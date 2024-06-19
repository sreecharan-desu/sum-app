const express = require('express');
const app = express();
const cors = require('cors');

// Use environment variable for the port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/sum', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ msg: 'Invalid input' });
    }

    res.json({
        msg: (a + b)
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
