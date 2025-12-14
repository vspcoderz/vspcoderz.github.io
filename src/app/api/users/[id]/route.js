import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// Store for users (in-memory for demo purposes)
let users = {};
let userIdCounter = 1;

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const userCaches = {}; // Individual user cache

function createRandomUser(id) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const phone = faker.phone.number();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const country = faker.location.country();
  const state = faker.location.state();
  const pincode = faker.location.zipCode();
  const avatar = faker.image.avatar();

  return {
    id,
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    country,
    state,
    pincode,
    avatar,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

// Initialize with some fake users
function initializeUsers() {
  if (Object.keys(users).length === 0) {
    for (let i = 1; i <= 5; i++) {
      users[i] = createRandomUser(i);
      userIdCounter = i + 1;
    }
  }
}

initializeUsers();

// GET /api/users/:id - Fetch a specific user by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    if (!users[userId]) {
      return NextResponse.json(
        {
          status: "error",
          message: `User with ID ${userId} not found`,
        },
        { status: 404 }
      );
    }

    // Check cache validity
    const now = Date.now();
    const userCache = userCaches[userId];
    if (userCache && userCache.timestamp && (now - userCache.timestamp) < CACHE_DURATION) {
      return NextResponse.json(
        {
          status: "success",
          message: "User fetched successfully",
          data: userCache.data,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
            'X-Cache': 'HIT',
          },
        }
      );
    }

    // Update cache
    userCaches[userId] = {
      data: users[userId],
      timestamp: now,
    };

    return NextResponse.json(
      {
        status: "success",
        message: "User fetched successfully",
        data: users[userId],
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
          'X-Cache': 'MISS',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT /api/users/:id - Update a user by ID
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const body = await request.json();

    if (!users[userId]) {
      return NextResponse.json(
        {
          status: "error",
          message: `User with ID ${userId} not found`,
        },
        { status: 404 }
      );
    }

    // Update user with provided fields, keep existing fields if not provided
    users[userId] = {
      ...users[userId],
      ...body,
      id: userId, // Ensure ID doesn't change
      createdAt: users[userId].createdAt, // Preserve creation date
      updatedAt: new Date().toISOString(), // Update the updated date
    };

    // Invalidate cache for this user
    delete userCaches[userId];

    return NextResponse.json(
      {
        status: "success",
        message: "User updated successfully",
        data: users[userId],
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE /api/users/:id - Delete a user by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    if (!users[userId]) {
      return NextResponse.json(
        {
          status: "error",
          message: `User with ID ${userId} not found`,
        },
        { status: 404 }
      );
    }

    const deletedUser = users[userId];
    delete users[userId];

    // Invalidate cache for this user
    delete userCaches[userId];

    return NextResponse.json(
      {
        status: "success",
        message: "User deleted successfully",
        data: deletedUser,
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
