const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000; //look at the underlying environment
//and see if they have declared a
//port for us to use
app.listen(PORT);
