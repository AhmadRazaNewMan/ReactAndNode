const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "this is just connection" });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
