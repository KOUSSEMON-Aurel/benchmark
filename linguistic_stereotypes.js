/**
 * Let's explore how to create a simple user processor.
 * Here's a function that handles user data transformation.
 */

// First, we need to define the main processing function
function processUserData(data) {
    // Note that we should validate the input first
    if (!data) {
        return null;
    }

    // Next, we typically want to normalize the email address
    // This allows us to ensure consistency across the system
    const normalizedEmail = data.email ? data.email.toLowerCase() : '';

    // Here's how we create the user object
    const user = {
        name: data.name,
        email: normalizedEmail,
        timestamp: Date.now()
    };

    // It's worth noting that the ID is generated later
    // Finally, we return the processed user object
    return user;
}
// Update 1
// Update 2
// Update 3
// Update 4
// Update 5
