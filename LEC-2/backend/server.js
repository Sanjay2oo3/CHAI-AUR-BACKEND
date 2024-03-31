const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            joke: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field."
        },
        {
            joke: "Why did the tomato turn red?",
            punchline: "Because it saw the salad dressing!"
        },
        {
            joke: "Why did the math book look sad?",
            punchline: "Because it had too many problems."
        }
    ]
    res.send(jokes);
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);