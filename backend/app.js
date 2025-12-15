const express = require('express');
const app = express();
const commentsRouter = require('./routes/api/comments');

app.use(express.json());

// Routes
app.use('/api/comments', commentsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
