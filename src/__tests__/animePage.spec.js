import AnimePage from "../pages/AnimePage/AnimePage";
import {screen, waitFor} from "@testing-library/react";
import {mockServer} from "../mocks/node";
import {rest} from "msw";
import {BASE_API_URL} from "../shared/utils/constants";
import {renderWithProviders} from "../shared/utils/testUtils";
import {BrowserRouter} from "react-router-dom";

const server = mockServer();

describe("AnimePage.tsx", () => {
    const mockAnime = {
        id: 21,
        name: null,
        russian: "Ван-Пис",
        image: {
            original: "/system/animes/original/21.jpg?1717283849",
            preview: "/system/animes/preview/21.jpg?1717283849",
            x96: "/system/animes/x96/21.jpg?1717283849",
            x48: "/system/animes/x48/21.jpg?1717283849"
        },
        url: "/animes/21-one-piece",
        kind: "tv",
        score: "8.72",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 1108,
        aired_on: "1999-10-20",
        released_on: null,
        rating: "pg_13",
        english: [
            "One Piece"
        ],
        "japanese": [
            "ONE PIECE"
        ],
        "synonyms": [
            "Большой куш",
            "Одним куском"
        ],
        license_name_ru: "One Piece",
        duration: 24,
        description: "Легендарный [character=4883]Гол Д. Роджер[/character] был пиратским королём, он был единственным пиратом, проплывшим Гранд Лайн от начала и до конца. Захват Роджера 22 года тому назад всемирным правительством привёл к изменениям во всём мире. Последние слова пирата перед казнью открыли расположение величайшего сокровища мира Ван-Пис. Тот, кто добудет его, станет новым Королём пиратов, и именно это событие положило начало Великой эры пиратов.\r\n[character=40]Монки Д. Луффи[/character], 17-летний парень, бросает вызов Гранд Лайн. Он собирает команду и отправляется на поиски сокровища, мечтая о захватывающих приключениях и имея свои причины стать пиратом. Следуя по стопам своего героя детства, Короля пиратов, Луффи и его команда путешествуют по линии Великого моря навстречу безумным приключениям, сильным врагам, и всё для того, чтобы добыть великое сокровище мира — Ван-Пис.",
        description_html: "\u003Cdiv class=\"b-text_with_paragraphs\"\u003EЛегендарный \u003Ca href=\"https://shikimori.one/characters/4883-roger-gol-d\" title=\"Roger Gol D.\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/4883-roger-gol-d/tooltip\" data-attrs=\"{&quot;id&quot;:4883,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Roger Gol D.&quot;,&quot;russian&quot;:&quot;Роджер Гол Д.&quot;}\"\u003EГол Д. Роджер\u003C/a\u003E был пиратским королём, он был единственным пиратом, проплывшим Гранд Лайн от начала и до конца. Захват Роджера 22 года тому назад всемирным правительством привёл к изменениям во всём мире. Последние слова пирата перед казнью открыли расположение величайшего сокровища мира Ван-Пис. Тот, кто добудет его, станет новым Королём пиратов, и именно это событие положило начало Великой эры пиратов.\u003Cbr\u003E\u003Ca href=\"https://shikimori.one/characters/40-luffy-monkey-d\" title=\"Luffy Monkey D.\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/40-luffy-monkey-d/tooltip\" data-attrs=\"{&quot;id&quot;:40,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Luffy Monkey D.&quot;,&quot;russian&quot;:&quot;Луффи Монки Д.&quot;}\"\u003EМонки Д. Луффи\u003C/a\u003E, 17-летний парень, бросает вызов Гранд Лайн. Он собирает команду и отправляется на поиски сокровища, мечтая о захватывающих приключениях и имея свои причины стать пиратом. Следуя по стопам своего героя детства, Короля пиратов, Луффи и его команда путешествуют по линии Великого моря навстречу безумным приключениям, сильным врагам, и всё для того, чтобы добыть великое сокровище мира — Ван-Пис.\u003C/div\u003E",
        description_source: null,
        franchise: "one_piece",
        favoured: false,
        anons: false,
        ongoing: true,
        thread_id: 3413,
        topic_id: 3413,
        myanimelist_id: 21,
        rates_scores_stats: [
            {
                name: 10,
                value: 21373
            },
            {
                name: 9,
                value: 6468
            },
            {
                name: 8,
                value: 5132
            },
            {
                name: 7,
                value: 2963
            },
            {
                name: 6,
                value: 1287
            },
            {
                name: 5,
                value: 789
            },
            {
                name: 4,
                value: 360
            },
            {
                name: 3,
                value: 194
            },
            {
                name: 2,
                value: 153
            },
            {
                name: 1,
                value: 490
            }
        ],
        rates_statuses_stats: [
            {
                name: "Запланировано",
                value: 19591
            },
            {
                name: "Просмотрено",
                value: 17979
            },
            {
                name: "Смотрю",
                value: 60398
            },
            {
                name: "Брошено",
                value: 11243
            },
            {
                name: "Отложено",
                value: 9483
            }
        ],
        updated_at: "2024-06-10T14:46:18.987+03:00",
        next_episode_at: "2024-06-16T03:30:00.000+03:00",
        fansubbers: [
            "Kos-chan & Red Priest Rezo",
            "Ziggy Team",
            "Верт",
            "AniPlay",
            "Helix Group",
            "pushPOP",
            "Crunchyroll",
            "Wakanim",
            "AOS Team"
        ],
        fandubbers: [
            "AniPlay",
            "AniRise",
            "Get Smart Group",
            "AniMaunt",
            "AnimeVost",
            "AniMedia",
            "SHIZA Project",
            "Rain.Death",
            "AniStar",
            "KitsuneBox",
            "CactusTeam",
            "AniDUB",
            "Wakanim",
            "Jisedai",
            "DVMedia",
            "Мега-Аниме",
            "OPRUS",
            "блиннуукк",
            "QTV",
            "Naruto-Base",
            "Lisek"
        ],
        licensors: [
            "2x2",
            "Wakanim",
            "Crunchyroll"
        ],
        genres: [
            {
                id: 1,
                name: "Action",
                russian: "Экшен",
                kind: "genre",
                entry_type: "Anime"
            },
            {
                id: 2,
                name: "Adventure",
                russian: "Приключения",
                kind: "genre",
                entry_type: "Anime"
            },
            {
                id: 10,
                name: "Fantasy",
                russian: "Фэнтези",
                kind: "genre",
                entry_type: "Anime"
            },
            {
                id: 27,
                name: "Shounen",
                russian: "Сёнен",
                kind: "genre",
                entry_type: "Anime"
            }
        ],
        studios: [
            {
                id: 18,
                name: "Toei Animation",
                filtered_name: "Toei",
                real: true,
                image: "/system/studios/original/18.?1446981470"
            }
        ],
        videos: [
            {
                id: 15860,
                url: "https://youtu.be/-tviZNY6CSw",
                image_url: "http://img.youtube.com/vi/-tviZNY6CSw/hqdefault.jpg",
                player_url: "http://youtube.com/embed/-tviZNY6CSw",
                name: "Трейлер Madman",
                kind: "pv",
                hosting: "youtube"
            },
            {
                id: 31467,
                url: "https://youtu.be/rHOz66O3F2E",
                image_url: "http://img.youtube.com/vi/rHOz66O3F2E/hqdefault.jpg",
                player_url: "http://youtube.com/embed/rHOz66O3F2E",
                name: "Трейлер adult swim",
                kind: "pv",
                hosting: "youtube"
            }
        ],
        screenshots: [
            {
                original: "/system/screenshots/original/625f8903677439e2a2a34878b8f619d57f537f0e.jpg?1620559070",
                preview: "/system/screenshots/x332/625f8903677439e2a2a34878b8f619d57f537f0e.jpg?1620559070"
            },
            {
                original: "/system/screenshots/original/67af2e8f99488836ac0f0fb51ec15c30f52f229c.jpg?1620559070",
                preview: "/system/screenshots/x332/67af2e8f99488836ac0f0fb51ec15c30f52f229c.jpg?1620559070"
            }
        ],
        user_rate: null
    };
    const mockRoles = [
        {
            "roles": [
                "Main"
            ],
            "roles_russian": [
                "Main"
            ],
            "character": {
                "id": 5627,
                "name": "Brook",
                "russian": "Брук",
                "image": {
                    "original": "/system/characters/original/5627.jpg?1717360908",
                    "preview": "/system/characters/preview/5627.jpg?1717360908",
                    "x96": "/system/characters/x96/5627.jpg?1717360908",
                    "x48": "/system/characters/x48/5627.jpg?1717360908"
                },
                "url": "/characters/5627-brook"
            },
            "person": null
        },
        {
            "roles": [
                "Main"
            ],
            "roles_russian": [
                "Main"
            ],
            "character": {
                "id": 64,
                "name": "Franky",
                "russian": "Фрэнки",
                "image": {
                    "original": "/system/characters/original/64.jpg?1717706857",
                    "preview": "/system/characters/preview/64.jpg?1717706857",
                    "x96": "/system/characters/x96/64.jpg?1717706857",
                    "x48": "/system/characters/x48/64.jpg?1717706857"
                },
                "url": "/characters/64-franky"
            },
            "person": null
        },
        {
            "roles": [
                "Main"
            ],
            "roles_russian": [
                "Main"
            ],
            "character": {
                "id": 18938,
                "name": "Jinbe",
                "russian": "Дзимбэ",
                "image": {
                    "original": "/system/characters/original/18938.jpg?1717879659",
                    "preview": "/system/characters/preview/18938.jpg?1717879659",
                    "x96": "/system/characters/x96/18938.jpg?1717879659",
                    "x48": "/system/characters/x48/18938.jpg?1717879659"
                },
                "url": "/characters/18938-jinbe"
            },
            "person": null
        },
        {
            "roles": [
                "Main"
            ],
            "roles_russian": [
                "Main"
            ],
            "character": {
                "id": 40,
                "name": "Luffy Monkey D.",
                "russian": "Луффи Монки Д.",
                "image": {
                    "original": "/system/characters/original/40.jpg?1717534505",
                    "preview": "/system/characters/preview/40.jpg?1717534505",
                    "x96": "/system/characters/x96/40.jpg?1717534505",
                    "x48": "/system/characters/x48/40.jpg?1717534505"
                },
                "url": "/characters/40-luffy-monkey-d"
            },
            "person": null
        },
    ];
    const mockComments = [
        {
            "id": 10736228,
            "user_id": 1060360,
            "commentable_id": 3413,
            "commentable_type": "Topic",
            "body": "[comment=10735279;1450045], я за эти 1к \"комедийных\" серий плакал больше чем за всю свою жизнь до просмотра ван писа",
            "html_body": "\u003Ca href=\"https://shikimori.one/comments/10735279\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10735279,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:1450045,&quot;text&quot;:&quot;canesole&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Ecanesole\u003C/span\u003E\u003C/a\u003E, я за эти 1к \"комедийных\" серий плакал больше чем за всю свою жизнь до просмотра ван писа",
            "created_at": "2024-06-11T08:01:02.767+03:00",
            "updated_at": "2024-06-11T08:01:20.049+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 1060360,
                "nickname": "Taikoy",
                "avatar": "https://desu.shikimori.one/system/users/x48/1060360.png?1701969961",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/1060360.png?1701969961",
                    "x148": "https://desu.shikimori.one/system/users/x148/1060360.png?1701969961",
                    "x80": "https://desu.shikimori.one/system/users/x80/1060360.png?1701969961",
                    "x64": "https://desu.shikimori.one/system/users/x64/1060360.png?1701969961",
                    "x48": "https://desu.shikimori.one/system/users/x48/1060360.png?1701969961",
                    "x32": "https://desu.shikimori.one/system/users/x32/1060360.png?1701969961",
                    "x16": "https://desu.shikimori.one/system/users/x16/1060360.png?1701969961"
                },
                "last_online_at": "2024-06-11T08:03:07.252+03:00",
                "url": "https://shikimori.one/Taikoy"
            }
        },
        {
            "id": 10736008,
            "user_id": 1073515,
            "commentable_id": 3413,
            "commentable_type": "Topic",
            "body": "One piece в Вегасе \r\nhttps://youtu.be/yUIzhl9095A",
            "html_body": "One piece в Вегасе \u003Cbr\u003E\u003Cdiv class=\"c-video b-video unprocessed youtube  fixed\"\u003E\u003Ca class=\"video-link\" data-href=\"http://youtube.com/embed/yUIzhl9095A\" href=\"https://youtu.be/yUIzhl9095A\"\u003E\u003Cimg src=\"http://img.youtube.com/vi/yUIzhl9095A/hqdefault.jpg\"\u003E\u003C/a\u003E\u003Cspan class=\"marker\"\u003Eyoutube\u003C/span\u003E\u003C/div\u003E",
            "created_at": "2024-06-11T02:40:01.365+03:00",
            "updated_at": "2024-06-11T02:42:54.134+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 1073515,
                "nickname": "Nur_Sultan",
                "avatar": "https://desu.shikimori.one/system/users/x48/1073515.png?1713703354",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/1073515.png?1713703354",
                    "x148": "https://desu.shikimori.one/system/users/x148/1073515.png?1713703354",
                    "x80": "https://desu.shikimori.one/system/users/x80/1073515.png?1713703354",
                    "x64": "https://desu.shikimori.one/system/users/x64/1073515.png?1713703354",
                    "x48": "https://desu.shikimori.one/system/users/x48/1073515.png?1713703354",
                    "x32": "https://desu.shikimori.one/system/users/x32/1073515.png?1713703354",
                    "x16": "https://desu.shikimori.one/system/users/x16/1073515.png?1713703354"
                },
                "last_online_at": "2024-06-11T02:45:12.319+03:00",
                "url": "https://shikimori.one/Nur_Sultan"
            }
        },
        {
            "id": 10735722,
            "user_id": 1355585,
            "commentable_id": 3413,
            "commentable_type": "Topic",
            "body": "[comment=10735713;1450045], может и не убил, но колечил знатно. Та и вообще, сенен это обязательно убийства? :oh:",
            "html_body": "\u003Ca href=\"https://shikimori.one/comments/10735713\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10735713,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:1450045,&quot;text&quot;:&quot;canesole&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Ecanesole\u003C/span\u003E\u003C/a\u003E, может и не убил, но колечил знатно. Та и вообще, сенен это обязательно убийства? \u003Cimg src=\"/images/smileys/:oh:.gif\" alt=\":oh:\" title=\":oh:\" class=\"smiley\"\u003E",
            "created_at": "2024-06-10T22:25:03.948+03:00",
            "updated_at": "2024-06-10T22:25:03.948+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 1355585,
                "nickname": "mxpaper",
                "avatar": "https://desu.shikimori.one/system/users/x48/1355585.png?1714321767",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/1355585.png?1714321767",
                    "x148": "https://desu.shikimori.one/system/users/x148/1355585.png?1714321767",
                    "x80": "https://desu.shikimori.one/system/users/x80/1355585.png?1714321767",
                    "x64": "https://desu.shikimori.one/system/users/x64/1355585.png?1714321767",
                    "x48": "https://desu.shikimori.one/system/users/x48/1355585.png?1714321767",
                    "x32": "https://desu.shikimori.one/system/users/x32/1355585.png?1714321767",
                    "x16": "https://desu.shikimori.one/system/users/x16/1355585.png?1714321767"
                },
                "last_online_at": "2024-06-10T22:47:31.023+03:00",
                "url": "https://shikimori.one/mxpaper"
            }
        },
    ];

    test("should render error", async () => {
        renderWithProviders(<BrowserRouter>
            <AnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText("Error")).toBeTruthy();
        })
    });

    test("should render page with anime & roles error & comments error", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockAnime));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "animes/undefined/roles", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <AnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Легендарный/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/One Piece/i)).toBeTruthy();
        expect(screen.getByText(/Большой Куш/i)).toBeTruthy();
        expect(screen.getByText(/Something went wrong/i)).toBeTruthy();
        expect(screen.queryByText(/Брук/i)).not.toBeTruthy();
        expect(screen.queryByText(/Фрэнки/i)).not.toBeTruthy();
        expect(screen.queryByText(/Луффи Монки Д./i)).not.toBeTruthy();
        expect(screen.queryByText(/Дзимбэ/i)).not.toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/Error/i)).toBeTruthy();
        })

        expect(screen.queryByText(/Taikoy/i)).not.toBeTruthy();
        expect(screen.queryByText(/я за эти 1к/i)).not.toBeTruthy();
        expect(screen.queryByText(/Nur_Sultan/i)).not.toBeTruthy();
        expect(screen.queryByText(/One piece в Вегасе/i)).not.toBeTruthy();
        expect(screen.queryByText(/mxpaper/i)).not.toBeTruthy();
        expect(screen.queryByText(/может и не убил/i)).not.toBeTruthy();
    });

    test("should render page with anime & roles & comments error", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockAnime));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "animes/undefined/roles", (req, res, context) => {
                return res(context.status(200), context.json(mockRoles));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <AnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Легендарный/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/One Piece/i)).toBeTruthy();
        expect(screen.getByText(/Большой Куш/i)).toBeTruthy();
        expect(screen.getByText(/Брук/i)).toBeTruthy();
        expect(screen.getByText(/Фрэнки/i)).toBeTruthy();
        expect(screen.getByText(/Луффи Монки Д./i)).toBeTruthy();
        expect(screen.getByText(/Дзимбэ/i)).toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/Error/i)).toBeTruthy();
        })

        expect(screen.queryByText(/Taikoy/i)).not.toBeTruthy();
        expect(screen.queryByText(/я за эти 1к/i)).not.toBeTruthy();
        expect(screen.queryByText(/Nur_Sultan/i)).not.toBeTruthy();
        expect(screen.queryByText(/One piece в Вегасе/i)).not.toBeTruthy();
        expect(screen.queryByText(/mxpaper/i)).not.toBeTruthy();
        expect(screen.queryByText(/может и не убил/i)).not.toBeTruthy();
    });

    test("should render page with anime & roles & comments", async () => {
        server.use(
            rest.get(BASE_API_URL + "animes/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockAnime));
             }),
        );
        server.use(
            rest.get(BASE_API_URL + "animes/undefined/roles", (req, res, context) => {
                return res(context.status(200), context.json(mockRoles));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(200), context.json(mockComments));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <AnimePage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Легендарный/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/One Piece/i)).toBeTruthy();
        expect(screen.getByText(/Большой Куш/i)).toBeTruthy();
        expect(screen.getByText(/Брук/i)).toBeTruthy();
        expect(screen.getByText(/Фрэнки/i)).toBeTruthy();
        expect(screen.getByText(/Луффи Монки Д./i)).toBeTruthy();
        expect(screen.getByText(/Дзимбэ/i)).toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/Taikoy/i)).toBeTruthy();
        })

        expect(screen.getByText(/я за эти 1к/i)).toBeTruthy();
        expect(screen.getByText(/Nur_Sultan/i)).toBeTruthy();
        expect(screen.getByText(/One piece в Вегасе/i)).toBeTruthy();
        expect(screen.getByText(/mxpaper/i)).toBeTruthy();
        expect(screen.getByText(/может и не убил/i)).toBeTruthy();
    })
});