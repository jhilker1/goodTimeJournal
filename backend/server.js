const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", 3000);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "postgres",
	password: "test",
	database: "journals"
};

const pool = new Pool(config);

app.get("/", async (req, res) => {
	// req.query.q
	// ? SELECT * FROM campgrounds WHERE name = ...
	try {
		const template = "select journalEntries.entry_body, journalEntries.publicity, journalEntries.u_id,  users.id from journalEntries join users on journalEntries.u_id=users.id where publicity = true;";
		const response = await pool.query(template);
		if (response.rowCount == 0) {
			res.json({ status: "no posts found"});
		} else {
			res.json({ status: "ok", results: response.rows });
		}
	} catch (err) {
		console.error("Error running query " + err);
		res.json({ status: "error" });
	}
});
    

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
});