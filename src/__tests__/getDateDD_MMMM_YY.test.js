import {getDateDD_MMMM_YY} from "../shared/utils/getDateDD_MMMM_YY";
//2022-11-26T17:19:31.939+03:00

describe("getDateDD_MMMM_YY", () => {
    it("function returns correct date", () => {
        expect(getDateDD_MMMM_YY("2022-11-26T17:19:31.939+03:00", true)).toBe("26 ноя. 2022 г.");
        expect(getDateDD_MMMM_YY("2024-05-11T17:19:31.939+03:00", true)).toBe("11 май 2024 г.");
        expect(getDateDD_MMMM_YY("2024-05-11T17:19:31.939+03:00")).toBe("11 май");
        expect(getDateDD_MMMM_YY("1999-08-23T17:19:31.939+03:00", true)).toBe("23 авг. 1999 г.");
        expect(getDateDD_MMMM_YY("1999-08-23T17:19:31.939+03:00")).toBe("23 авг.");
    });
})