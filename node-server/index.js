const express = require('express');

const app = express();
const port = 8001;

// Intentionally minimal server with no routes; useful placeholder for future endpoints.
app.listen(port, () => {
  console.log(`Node server listening on port ${port}`);
});
