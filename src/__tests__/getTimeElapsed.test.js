import {getTimeSpanTest, timeElapsedTest} from "../shared/utils/getTimeElapsed";

describe("getTimeSpan", () => {
    const latestDate = new Date("2024-11-26T17:19:31.939+03:00");

    it("function returns correct time", () => {
        expect(getTimeSpanTest("2024-05-13T12:50:46.939+03:00", latestDate)).toEqual({
            years: 0,
            months: 6,
            days: 13,
            hours: 5,
            minutes: 31,
            seconds: 15,
        });
        expect(getTimeSpanTest("2024-06-30T02:01:01.939+03:00", latestDate)).toEqual({
            years: 0,
            months: 5,
            days: 3,
            hours: 15,
            minutes: 18,
            seconds: 30,
        });
        expect(getTimeSpanTest("2022-06-30T02:01:01.939+03:00", latestDate)).toEqual({
            years: 2,
            months: 5,
            days: 3,
            hours: 15,
            minutes: 18,
            seconds: 30,
        });
        expect(getTimeSpanTest("2024-10-30T02:01:01.939+03:00", latestDate)).toEqual({
            years: 0,
            months: 1,
            days: 3,
            hours: 15,
            minutes: 18,
            seconds: 30,
        });
    });
    it("function returns zeroed object if argument is undefined", () => {
        expect(getTimeSpanTest(undefined, latestDate)).toEqual({
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    })
});

describe("timeElapsedTest", () => {
    const latestDate = new Date("2024-11-26T17:19:31.939+03:00");

    it("fn returns correct elapsed time", () => {
        expect(timeElapsedTest("2024-06-30T02:01:01.939+03:00", latestDate)).toBe("5 месяцев назад");
        expect(timeElapsedTest("2024-11-11T14:44:24.939+03:00", latestDate)).toBe("15 дней назад");
        expect(timeElapsedTest("2024-11-26T14:44:24.939+03:00", latestDate)).toBe("3 часа назад");
        expect(timeElapsedTest("2023-11-11T14:44:24.939+03:00", latestDate)).toBe("год назад");
        expect(timeElapsedTest("2022-10-11T14:44:24.939+03:00", latestDate)).toBe("2 года назад");
        expect(timeElapsedTest("2023-12-25T14:44:24.939+03:00", latestDate)).toBe("11 месяцев назад");
    })
});