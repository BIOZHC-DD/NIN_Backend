"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authUtils_1 = require("../utils/authUtils");
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
        // ⬆️ Added 'return' here to prevent further execution
    }
    try {
        const decoded = (0, authUtils_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: "Forbidden: Invalid or expired token" });
        // ⬆️ Added 'return' here as well
    }
};
exports.authMiddleware = authMiddleware;
