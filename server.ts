import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import compression from "compression";
import hello from "./routes/hello";
import index from "./routes";
import _404 from "./routes/404";

dotenv.config();

const {NODE_ENV, HOSTNAME, PORT} = process.env,
	development = NODE_ENV !== "production";

const server = express();

async function main() {
	server.use(morgan(development ? "dev" : "combined"));
	
	server.use(compression());
	
	server.get("/hello", hello);
	
	server.get("/", index);
	
	server.all("*", _404);
	
	return new Promise(resolve => {
		server.listen(
			PORT,
			resolve.bind(null, `Ready on http://${HOSTNAME}:${PORT}`),
		);
	});
}

export default main;