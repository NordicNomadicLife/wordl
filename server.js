import InitApp from './src/app.js';

const app = InitApp();
const PORT = process.env.PORT || 5080;



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Server is running on: http://localhost:${PORT}/`);
});
