const express = require('express');
const router = express.Router();

// Mock data for demonstration
let comments = [
    { id: 1, text: "This is the first comment" },
    { id: 2, text: "This is the second comment" }
];

// GET all comments
router.get('/', async (req, res) => {
    try {
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch comments" });
    }
});

// DELETE a comment by ID
// @route DELETE /api/comments/:id
router.delete('/:id', async (req, res) => {
    try {
        const commentId = parseInt(req.params.id);
        const index = comments.findIndex(c => c.id === commentId);
        if (index !== -1) {
            comments.splice(index, 1);
            res.status(200).json({ message: "Comment deleted successfully" });
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete comment" });
    }
});

module.exports = router;
