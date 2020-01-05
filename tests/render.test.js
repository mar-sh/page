const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
	path.resolve(__dirname, "../public/index.html"),
	"utf8"
);
require("@testing-library/jest-dom/extend-expect");

jest.dontMock("fs");

describe("render page", function() {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
	});

	afterEach(() => {
		jest.resetModules();
	});

	it("all elements exist", function() {
		expect(document.getElementById("main")).toBeInTheDocument();
		expect(document.getElementById("title")).toBeInTheDocument();
		expect(document.getElementById("content")).toBeInTheDocument();
		expect(document.getElementById("socials")).toBeInTheDocument();
	});
});
