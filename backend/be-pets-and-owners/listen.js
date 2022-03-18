const { app } = require('./index.js');
const port = 3000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Express app is running on port ${port}`);
});
