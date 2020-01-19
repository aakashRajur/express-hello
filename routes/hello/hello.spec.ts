import "mocha";
import {stub} from "sinon";
import {expect} from "chai";
import hello from "./hello";

describe("hello", () => {
		it(`should return "Hello world"`, () => {
			const req: any = {},
				res: any = {
					send: stub()
				};
			
			hello(req, res);
			
			expect(res.send.called).eq(true);
			expect(res.send.calledWith("Hello world")).eq(true);
		});
	},
);