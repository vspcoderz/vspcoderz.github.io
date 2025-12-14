export async function GET(request) {
    const routes = [
        {
            method: "GET",
            path: "/api",
            description: "Returns a list of all available API routes"
        },
        {
            method: "GET",
            path: "/api/users",
            description: "Fetches all users"
        },
        {
            method: "GET",
            path: "/api/users/:id",
            description: "Fetches a specific user by ID"
        },
        {
            method: "POST",
            path: "/api/users",
            description: "Creates a new user"
        },
        {
            method: "PUT",
            path: "/api/users/:id",
            description: "Updates a user by ID"
        },
        {
            method: "DELETE",
            path: "/api/users/:id",
            description: "Deletes a user by ID"
        }
    ];

    return Response.json({
        status: "success",
        message: "Available API routes",
        data: routes
    });
}