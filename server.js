var path = require("path"),
	fs = require("fs"),
	http = require("http"),
	https = require("https"),
	express = require("express")

var port = 8000

var options = {
	pfx: fs.readFileSync("./certs/orderwire-dev.pfx"),
	passphrase: "orderwire",
}

var app = express()
app.use("/", express.static("public"))

app.get("/api/todos", (_, res) => {
	res.send([
		{
			id: "1",
			name: "NOok",
		},
		{
			id: "2",
			name: "WonYoung",
		},
	])
})

https.createServer(options, app).listen(port, function () {
	console.log("Express server listening on port " + port)
})
