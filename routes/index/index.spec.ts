import "mocha";
import {stub} from "sinon";
import {expect} from "chai";
import index from "./index";

describe("index", () => {
	it(`should return "Holla!"`, () => {
		const req: any = {},
			res: any = {
				send: stub()
			};
		
		index(req, res);
		
		expect(res.send.called).eq(true);
		expect(res.send.calledWith("Holla!")).eq(true);
	});
});