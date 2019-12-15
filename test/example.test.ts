import example from "../src/lib/example";

test("index", () => {
	const value = example("TypeScript");
	expect(value).toContain("TypeScript");
});
