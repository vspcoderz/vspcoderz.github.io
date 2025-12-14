import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// Store for users (in-memory for demo purposes)
let users = {};
let userIdCounter = 1;

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
let cachedUsers = null;
let cacheTimestamp = null;

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

// GET /api/users - Fetch all users
export async function GET(request) {
  try {
    // Check cache validity
    const now = Date.now();
    if (cachedUsers && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json(cachedUsers, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
          'X-Cache': 'HIT',
        },
      });
    }

    const usersList = Object.values(users).sort((a, b) => a.id - b.id);
    const responseData = {
      status: "success",
      message: "All users fetched successfully",
      count: usersList.length,
      data: usersList,
    };

    // Update cache
    cachedUsers = responseData;
    cacheTimestamp = now;

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
        'X-Cache': 'MISS',
      },
    });
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

// POST /api/users - Create a new user
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Create new user with provided fields or generate fake ones
    const newUser = {
      id: userIdCounter++,
      firstName: body.firstName || faker.person.firstName(),
      lastName: body.lastName || faker.person.lastName(),
      email: body.email || faker.internet.email(),
      phone: body.phone || faker.phone.number(),
      address: body.address || faker.location.streetAddress(),
      city: body.city || faker.location.city(),
      country: body.country || faker.location.country(),
      state: body.state || faker.location.state(),
      pincode: body.pincode || faker.location.zipCode(),
      avatar: body.avatar || faker.image.avatar(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    users[newUser.id] = newUser;

    // Invalidate cache when new user is created
    cachedUsers = null;
    cacheTimestamp = null;

    return NextResponse.json(
      {
        status: "success",
        message: "User created successfully",
        data: newUser,
      },
      { 
        status: 201,
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
