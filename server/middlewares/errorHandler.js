export const errorHandler = (err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({ error: messages.join(", ") })
    }

    // Mongoose duplicate item
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0]
        return res.status(409).json({ error: `${field} is already taken` })
    }

    // Invalid MongoDB ID
    if (err.name === "CastError" && err.kind === "ObjectId") {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Invalid token" })
    }
    if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Session has expired" })
    }

    if (err.isOperational) {
        return res.status(err.statusCode).json({ error: err.message })
    }

    console.error("UnexpectedError:", err);
    res.status(500).json({ error: "Something went wrong" })
}