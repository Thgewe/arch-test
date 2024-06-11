import {whatRating} from "../shared/utils/whatRating";

describe("whatKind", () => {
    it("returns correct kind", () => {
        expect(whatRating("none")).toBe("");
        expect(whatRating("g")).toBe("G");
        expect(whatRating("pg")).toBe("PG");
        expect(whatRating("pg_13")).toBe("PG-13");
        expect(whatRating("r")).toBe("R");
        expect(whatRating("r_plus")).toBe("R+");
        expect(whatRating("rx")).toBe("Rx");
        expect(whatRating("")).toBe("");
        expect(whatRating("aasd")).toBe("");
    });
});