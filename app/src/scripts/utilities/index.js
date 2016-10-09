export const generateRandomId = function () {
    //TODO: Avoid ID Collision
    return Math.random().toString(36).substring(7);
}
