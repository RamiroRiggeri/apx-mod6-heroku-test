import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola ke ase",
  });
});

app.listen(port, () => {
  console.log(`server iniciado en ${port}`);
});
