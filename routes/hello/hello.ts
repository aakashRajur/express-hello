import {Request, Response} from "express";

function hello(_: Request, res: Response) {
	res.send("Hello world");
}

export default hello;