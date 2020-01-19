import "mocha";
import {stub} from "sinon";
import {expect} from "chai";
import _404 from "./404";

describe("404", () => {
		it("should return 404", () => {
			const req: any = {},
				res: any = {
					sendStatus: stub()
				};
			
			_404(req, res);
			
			expect(res.sendStatus.called).eq(true);
			expect(res.sendStatus.calledWith(404)).eq(true);
		})
	},
);