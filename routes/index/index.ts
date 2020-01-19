import {Request, Response} from "express";

function index(_: Request, res: Response) {
	res.send("Holla!");
}

export default index;