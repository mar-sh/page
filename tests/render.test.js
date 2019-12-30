const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
require("@testing-library/jest-dom/extend-expect");

jest.dontMock("fs");

describe("render page", function() {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
	});

	afterEach(() => {
		jest.resetModules();
	});

	it("page exists", function() {
		expect(document.getElementById("main")).toBeInTheDocument();
	});
});
