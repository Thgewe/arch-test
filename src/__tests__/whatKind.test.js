import {whatKind} from "../shared/utils/whatKind";

describe("whatKind", () => {
    it("returns correct kind", () => {
        expect(whatKind("tv")).toBe("TV Сериал");
        expect(whatKind("movie")).toBe("Фильм");
        expect(whatKind("ova")).toBe("OVA");
        expect(whatKind("ona")).toBe("ONA");
        expect(whatKind("special")).toBe("Спешл");
        expect(whatKind("music")).toBe("Клип");
        expect(whatKind("manga")).toBe("Манга");
        expect(whatKind("manhwa")).toBe("Манхва");
        expect(whatKind("manhua")).toBe("Маньхуа");
        expect(whatKind("one_shot")).toBe("Ваншот");
        expect(whatKind("light_novel")).toBe("Ранобэ");
        expect(whatKind("novel")).toBe("Новелла");
        expect(whatKind("asdasdasd")).toBe("TV Сериал");
        expect(whatKind("TVs")).toBe("TV Сериал");
        expect(whatKind("novela")).toBe("TV Сериал");
    });
});