import {Request, Response} from "express";

function _404(_: Request, res: Response) {
	res.sendStatus(404);
}

export default _404;