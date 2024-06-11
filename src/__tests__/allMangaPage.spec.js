import {mockServer} from "../mocks/node";
import {rest} from "msw";
import {BASE_API_URL} from "../shared/utils/constants";
import {renderWithProviders} from "../shared/utils/testUtils";
import {BrowserRouter} from "react-router-dom";
import {fireEvent, screen, waitFor} from "@testing-library/react";
import AllMangaPage from "../pages/AllMangaPage/AllMangaPage";

const server = mockServer();

describe("allMangaPage.tsx", () => {
    const mockMangaList = [
        {
            "id": 2,
            "name": "Berserk",
            "russian": "Берсерк",
            "image": {
                "original": "/system/mangas/original/2.jpg?1712722988",
                "preview": "/system/mangas/preview/2.jpg?1712722988",
                "x96": "/system/mangas/x96/2.jpg?1712722988",
                "x48": "/system/mangas/x48/2.jpg?1712722988"
            },
            "url": "/mangas/2-berserk",
            "kind": "manga",
            "score": "9.47",
            "status": "ongoing",
            "volumes": 0,
            "chapters": 0,
            "aired_on": "1989-08-25",
            "released_on": null
        },
        {
            "id": 1706,
            "name": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
            "russian": "Невероятное приключение ДжоДжо — Часть 7: Гонка «Стальной шар»",
            "image": {
                "original": "/system/mangas/original/1706.jpg?1708255280",
                "preview": "/system/mangas/preview/1706.jpg?1708255280",
                "x96": "/system/mangas/x96/1706.jpg?1708255280",
                "x48": "/system/mangas/x48/1706.jpg?1708255280"
            },
            "url": "/mangas/1706-jojo-no-kimyou-na-bouken-part-7-steel-ball-run",
            "kind": "manga",
            "score": "9.3",
            "status": "released",
            "volumes": 24,
            "chapters": 96,
            "aired_on": "2004-01-19",
            "released_on": "2011-04-19"
        },
        {
            "id": 656,
            "name": "Vagabond",
            "russian": "Бродяга",
            "image": {
                "original": "/system/mangas/original/656.jpg?1708923143",
                "preview": "/system/mangas/preview/656.jpg?1708923143",
                "x96": "/system/mangas/x96/656.jpg?1708923143",
                "x48": "/system/mangas/x48/656.jpg?1708923143"
            },
            "url": "/mangas/656-vagabond",
            "kind": "manga",
            "score": "9.25",
            "status": "paused",
            "volumes": 37,
            "chapters": 327,
            "aired_on": "1998-09-03",
            "released_on": "2015-05-21"
        },
        {
            "id": 13,
            "name": "One Piece",
            "russian": "Ван-Пис",
            "image": {
                "original": "/system/mangas/original/13.jpg?1712830834",
                "preview": "/system/mangas/preview/13.jpg?1712830834",
                "x96": "/system/mangas/x96/13.jpg?1712830834",
                "x48": "/system/mangas/x48/13.jpg?1712830834"
            },
            "url": "/mangas/z13-one-piece",
            "kind": "manga",
            "score": "9.22",
            "status": "ongoing",
            "volumes": 0,
            "chapters": 0,
            "aired_on": "1997-07-22",
            "released_on": null
        },
    ];
    const anonsMockMangaList = [
        {
            "id": 1,
            "name": "Monster",
            "russian": "Монстр",
            "image": {
                "original": "/system/mangas/original/1.jpg?1708797485",
                "preview": "/system/mangas/preview/1.jpg?1708797485",
                "x96": "/system/mangas/x96/1.jpg?1708797485",
                "x48": "/system/mangas/x48/1.jpg?1708797485"
            },
            "url": "/mangas/1-monster",
            "kind": "manga",
            "score": "9.16",
            "status": "released",
            "volumes": 18,
            "chapters": 162,
            "aired_on": "1994-12-05",
            "released_on": "2001-12-20"
        },
        {
            "id": 51,
            "name": "Slam Dunk",
            "russian": "Слэм-данк",
            "image": {
                "original": "/system/mangas/original/51.jpg?1708882864",
                "preview": "/system/mangas/preview/51.jpg?1708882864",
                "x96": "/system/mangas/x96/51.jpg?1708882864",
                "x48": "/system/mangas/x48/51.jpg?1708882864"
            },
            "url": "/mangas/z51-slam-dunk",
            "kind": "manga",
            "score": "9.08",
            "status": "released",
            "volumes": 31,
            "chapters": 276,
            "aired_on": "1990-09-18",
            "released_on": "1996-06-04"
        },
        {
            "id": 642,
            "name": "Vinland Saga",
            "russian": "Сага о Винланде",
            "image": {
                "original": "/system/mangas/original/642.jpg?1712866244",
                "preview": "/system/mangas/preview/642.jpg?1712866244",
                "x96": "/system/mangas/x96/642.jpg?1712866244",
                "x48": "/system/mangas/x48/642.jpg?1712866244"
            },
            "url": "/mangas/642-vinland-saga",
            "kind": "manga",
            "score": "9.07",
            "status": "ongoing",
            "volumes": 0,
            "chapters": 0,
            "aired_on": "2005-04-13",
            "released_on": null
        },
        {
            "id": 25,
            "name": "Fullmetal Alchemist",
            "russian": "Стальной алхимик",
            "image": {
                "original": "/system/mangas/original/25.jpg?1712737720",
                "preview": "/system/mangas/preview/25.jpg?1712737720",
                "x96": "/system/mangas/x96/25.jpg?1712737720",
                "x48": "/system/mangas/x48/25.jpg?1712737720"
            },
            "url": "/mangas/z25-fullmetal-alchemist",
            "kind": "manga",
            "score": "9.04",
            "status": "released",
            "volumes": 27,
            "chapters": 116,
            "aired_on": "2001-07-12",
            "released_on": "2010-09-11"
        },
    ];

    test("should render error", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas", (req, res, context) => {
                return res(context.status(400), context.json("smth went wrong"));
            }),
        )
        renderWithProviders(<BrowserRouter>
            <AllMangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText("error")).toBeTruthy();
        })
    });

    test("should render list", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas", (req, res, context) => {
                return res(context.status(200), context.json(mockMangaList));
            }),
        )
        renderWithProviders(<BrowserRouter>
            <AllMangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Берсерк/i)).toBeTruthy();
        })

        expect(screen.getByText(/Невероятное приключение ДжоДжо — Часть 7: Гонка «Стальной шар»/i)).toBeTruthy();
        expect(screen.getByText(/Бродяга/i)).toBeTruthy();
        expect(screen.getByText(/Ван-Пис/i)).toBeTruthy();
    });

    test("should reload page with new list after filter click", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas", (req, res, context) => {
                return res(context.status(200), context.json(mockMangaList));
            }),
        )

        const view = renderWithProviders(<BrowserRouter>
            <AllMangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Берсерк/i)).toBeTruthy();
        });

        const anons = screen.getByText(/Анонсировано/i);
        expect(anons).toBeTruthy();
        fireEvent(anons, new MouseEvent("click", {
            bubbles: true,
        }));
        const inputId = anons.getAttribute("for");
        expect(inputId).toBe("bookStatus1");

        const input = view.container.querySelector("#" + inputId);
        expect(input.checked).toBeTruthy();

        server.use(
            rest.get(BASE_API_URL + "mangas", (req, res, context) => {
                return res(context.status(200), context.json(anonsMockMangaList));
            }),
        );

        expect(screen.getByText("Загрузка...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Монстр/i)).toBeTruthy();
        });
        expect(screen.getByText(/Слэм-данк/i)).toBeTruthy();
        expect(screen.getByText(/Сага о Винланде/i)).toBeTruthy();
        expect(screen.getByText(/Стальной алхимик/i)).toBeTruthy();
        expect(screen.queryByText(/Берсерк/i)).not.toBeTruthy();
    });
});