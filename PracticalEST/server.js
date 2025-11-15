const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const posts = [];

app.use(express.static(path.join(__dirname, 'public')));

app.post('/posts', (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) return res.status(400).json({ error: 'Missing title or body' });

  const id = posts.length + 1;
  const post = { id, title, body, createdAt: new Date().toISOString() };
  posts.push(post);
  res.status(201).json({ message: 'Post created', post });
});
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
