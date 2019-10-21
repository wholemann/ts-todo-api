import app from './app';

const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening... http://localhost:${PORT}`);
});
