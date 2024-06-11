import {renderWithProviders} from "../shared/utils/testUtils";
import {BrowserRouter} from "react-router-dom";
import {fireEvent, screen, waitFor} from "@testing-library/react";
import {rest} from "msw";
import {BASE_API_URL} from "../shared/utils/constants";
import AllAnimePage from "../pages/AllAnimePage/AllAnimePage";
import {mockServer} from "../mocks/node";

const server = mockServer();

describe("allAnimePage.tsx", () => {
    const mockAnimeList = [
        {
            "id": 52991,
            "name": "Sousou no Frieren",
            "russian": "Провожающая в последний путь Фрирен",
            "image": {
                "original": "/system/animes/original/52991.jpg?1710731127",
                "preview": "/system/animes/preview/52991.jpg?1710731127",
                "x96": "/system/animes/x96/52991.jpg?1710731127",
                "x48": "/system/animes/x48/52991.jpg?1710731127"
            },
            "url": "/animes/52991-sousou-no-frieren",
            "kind": "tv",
            "score": "9.36",
            "status": "released",
            "episodes": 28,
            "episodes_aired": 27,
            "aired_on": "2023-09-29",
            "released_on": "2024-03-22"
        },
        {
            "id": 5114,
            "name": "Fullmetal Alchemist: Brotherhood",
            "russian": "Стальной алхимик: Братство",
            "image": {
                "original": "/system/animes/original/5114.jpg?1711949773",
                "preview": "/system/animes/preview/5114.jpg?1711949773",
                "x96": "/system/animes/x96/5114.jpg?1711949773",
                "x48": "/system/animes/x48/5114.jpg?1711949773"
            },
            "url": "/animes/z5114-fullmetal-alchemist-brotherhood",
            "kind": "tv",
            "score": "9.09",
            "status": "released",
            "episodes": 64,
            "episodes_aired": 0,
            "aired_on": "2009-04-05",
            "released_on": "2010-07-04"
        },
        {
            "id": 9253,
            "name": "Steins;Gate",
            "russian": "Врата Штейна",
            "image": {
                "original": "/system/animes/original/9253.jpg?1711975211",
                "preview": "/system/animes/preview/9253.jpg?1711975211",
                "x96": "/system/animes/x96/9253.jpg?1711975211",
                "x48": "/system/animes/x48/9253.jpg?1711975211"
            },
            "url": "/animes/z9253-steins-gate",
            "kind": "tv",
            "score": "9.07",
            "status": "released",
            "episodes": 24,
            "episodes_aired": 24,
            "aired_on": "2011-04-06",
            "released_on": "2011-09-14"
        },
        {
            "id": 28977,
            "name": "Gintama°",
            "russian": "Гинтама 4",
            "image": {
                "original": "/system/animes/original/28977.jpg?1711951367",
                "preview": "/system/animes/preview/28977.jpg?1711951367",
                "x96": "/system/animes/x96/28977.jpg?1711951367",
                "x48": "/system/animes/x48/28977.jpg?1711951367"
            },
            "url": "/animes/z28977-gintama",
            "kind": "tv",
            "score": "9.06",
            "status": "released",
            "episodes": 51,
            "episodes_aired": 51,
            "aired_on": "2015-04-08",
            "released_on": "2016-03-30"
        },
    ]
    const anonsMockAnimeList = [
        {
            "id": 38524,
            "name": "Shingeki no Kyojin Season 3 Part 2",
            "russian": "Атака титанов 3. Часть 2",
            "image": {
                "original": "/system/animes/original/38524.jpg?1711973463",
                "preview": "/system/animes/preview/38524.jpg?1711973463",
                "x96": "/system/animes/x96/38524.jpg?1711973463",
                "x48": "/system/animes/x48/38524.jpg?1711973463"
            },
            "url": "/animes/38524-shingeki-no-kyojin-season-3-part-2",
            "kind": "tv",
            "score": "9.05",
            "status": "released",
            "episodes": 10,
            "episodes_aired": 10,
            "aired_on": "2019-04-29",
            "released_on": "2019-07-01"
        },
        {
            "id": 39486,
            "name": "Gintama: The Final",
            "russian": "Гинтама: Финал",
            "image": {
                "original": "/system/animes/original/39486.jpg?1711951459",
                "preview": "/system/animes/preview/39486.jpg?1711951459",
                "x96": "/system/animes/x96/39486.jpg?1711951459",
                "x48": "/system/animes/x48/39486.jpg?1711951459"
            },
            "url": "/animes/39486-gintama-the-final",
            "kind": "movie",
            "score": "9.04",
            "status": "released",
            "episodes": 1,
            "episodes_aired": 0,
            "aired_on": "2021-01-08",
            "released_on": null
        },
        {
            "id": 11061,
            "name": "Hunter x Hunter (2011)",
            "russian": "Охотник х Охотник (2011)",
            "image": {
                "original": "/system/animes/original/11061.jpg?1711954447",
                "preview": "/system/animes/preview/11061.jpg?1711954447",
                "x96": "/system/animes/x96/11061.jpg?1711954447",
                "x48": "/system/animes/x48/11061.jpg?1711954447"
            },
            "url": "/animes/z11061-hunter-x-hunter-2011",
            "kind": "tv",
            "score": "9.04",
            "status": "released",
            "episodes": 148,
            "episodes_aired": 148,
            "aired_on": "2011-10-02",
            "released_on": "2014-09-24"
        },
        {
            "id": 9969,
            "name": "Gintama'",
            "russian": "Гинтама 2",
            "image": {
                "original": "/system/animes/original/9969.jpg?1711951325",
                "preview": "/system/animes/preview/9969.jpg?1711951325",
                "x96": "/system/animes/x96/9969.jpg?1711951325",
                "x48": "/system/animes/x48/9969.jpg?1711951325"
            },
            "url": "/animes/z9969-gintama",
            "kind": "tv",
            "score": "9.03",
            "status": "released",
            "episodes": 51,
            "episodes_aired": 252,
            "aired_on": "2011-04-04",
            "released_on": "2012-03-26"
        },
    ]

    test("should render error", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(400), context.json("smth went wrong"));
            }),
        )
        renderWithProviders(<BrowserRouter>
            <AllAnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText("error")).toBeTruthy();
        })
    });

    test("should render list", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(200), context.json(mockAnimeList));
            }),
        )
        renderWithProviders(<BrowserRouter>
            <AllAnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Провожающая в последний путь Фрирен/i)).toBeTruthy();
        })

        expect(screen.getByText(/Врата Штейна/i)).toBeTruthy();
        expect(screen.getByText(/Гинтама 4/i)).toBeTruthy();
        expect(screen.getByText(/Стальной алхимик: Братство/i)).toBeTruthy();
    });

    test("should reload page with new list after filter click", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(200), context.json(mockAnimeList));
            }),
        )

        const view = renderWithProviders(<BrowserRouter>
            <AllAnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Провожающая в последний путь Фрирен/i)).toBeTruthy();
        });

        const anons = screen.getByText(/Анонсировано/i);
        expect(anons).toBeTruthy();
        fireEvent(anons, new MouseEvent("click", {
            bubbles: true,
        }));
        const inputId = anons.getAttribute("for");
        expect(inputId).toBe("animeStatus1");

        const input = view.container.querySelector("#" + inputId);
        expect(input.checked).toBeTruthy();

        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(200), context.json(anonsMockAnimeList));
            }),
        );

        expect(screen.getByText("Загрузка...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Атака титанов 3. Часть 2/i)).toBeTruthy();
        });
        expect(screen.getByText(/Охотник х Охотник \(2011\)/i)).toBeTruthy();
        expect(screen.getByText(/Гинтама: Финал/i)).toBeTruthy();
        expect(screen.getByText(/Гинтама 2/i)).toBeTruthy();
        expect(screen.queryByText(/Врата Штейна/i)).not.toBeTruthy();
    })
});