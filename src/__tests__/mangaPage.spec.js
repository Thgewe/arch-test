import {renderWithProviders} from "../shared/utils/testUtils";
import {BrowserRouter} from "react-router-dom";
import {screen, waitFor} from "@testing-library/react";
import {rest} from "msw";
import {BASE_API_URL} from "../shared/utils/constants";
import {mockServer} from "../mocks/node";
import MangaPage from "../pages/MangaPage/MangaPage";

const server = mockServer();

describe("mangaPage.tsx", () => {
    const mockManga = {
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
        "released_on": null,
        "english": [
            "Berserk"
        ],
        "japanese": [
            "ベルセルク"
        ],
        "synonyms": [
            "Берсерк: Прототип",
            "Berserk: The Prototype"
        ],
        "license_name_ru": "Берсерк",
        "description": "Наёмник Гатс, по прозвищу Чёрный Мечник, странствует по магическому королевству Мидланд, вооружившись двухметровым мечом «Убийцей Драконов» и уничтожая на своём пути полчища демонов, охотящихся на него. Не жалея ни себя, ни тех, кто попадается ему под руку, он неустанно движется вперёд, ведомый только безудержной жаждой мести. Но откуда она берёт своё начало? Какое тяжкое бремя несёт на своих плечах Гатс? И есть ли шанс на простое светлое будущее у того, кто воочию повидал сам ад?..\r\n\r\n«Берсерк» — это тёмная и печальная сага о неистовых жестоких сражениях, недостижимых мечтах, дружбе и предательстве, а также печальной судьбе одного человека.",
        "description_html": "\u003Cdiv class=\"b-text_with_paragraphs\"\u003EНаёмник \u003Ca href=\"https://shikimori.one/characters/422-guts\" title=\"Guts\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/422-guts/tooltip\" data-attrs=\"{&quot;id&quot;:422,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Guts&quot;,&quot;russian&quot;:&quot;Гатс&quot;}\"\u003EГатс\u003C/a\u003E, по прозвищу Чёрный Мечник, странствует по магическому королевству Мидланд, вооружившись двухметровым мечом «Убийцей Драконов» и уничтожая на своём пути полчища демонов, охотящихся на него. Не жалея ни себя, ни тех, кто попадается ему под руку, он неустанно движется вперёд, ведомый только безудержной жаждой мести. Но откуда она берёт своё начало? Какое тяжкое бремя несёт на своих плечах \u003Ca href=\"https://shikimori.one/characters/422-guts\" title=\"Guts\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/422-guts/tooltip\" data-attrs=\"{&quot;id&quot;:422,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Guts&quot;,&quot;russian&quot;:&quot;Гатс&quot;}\"\u003EГатс\u003C/a\u003E? И есть ли шанс на простое светлое будущее у того, кто воочию повидал сам ад?..\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003E«Берсерк» — это тёмная и печальная сага о неистовых жестоких сражениях, недостижимых мечтах, дружбе и предательстве, а также печальной судьбе одного человека.\u003C/div\u003E",
        "description_source": null,
        "franchise": "berserk",
        "favoured": false,
        "anons": false,
        "ongoing": true,
        "thread_id": 10932,
        "topic_id": 10932,
        "myanimelist_id": 2,
        "rates_scores_stats": [
            {
                "name": 10,
                "value": 11892
            },
            {
                "name": 9,
                "value": 3019
            },
            {
                "name": 8,
                "value": 1358
            },
            {
                "name": 7,
                "value": 484
            },
            {
                "name": 6,
                "value": 151
            },
            {
                "name": 5,
                "value": 65
            },
            {
                "name": 4,
                "value": 31
            },
            {
                "name": 3,
                "value": 22
            },
            {
                "name": 2,
                "value": 25
            },
            {
                "name": 1,
                "value": 53
            }
        ],
        "rates_statuses_stats": [
            {
                "name": "Запланировано",
                "value": 13855
            },
            {
                "name": "Прочитано",
                "value": 12077
            },
            {
                "name": "Читаю",
                "value": 18592
            },
            {
                "name": "Брошено",
                "value": 1019
            },
            {
                "name": "Отложено",
                "value": 2360
            }
        ],
        "licensors": [
            "XL Media"
        ],
        "genres": [
            {
                "id": 56,
                "name": "Action",
                "russian": "Экшен",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 68,
                "name": "Adventure",
                "russian": "Приключения",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 50,
                "name": "Drama",
                "russian": "Драма",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 57,
                "name": "Fantasy",
                "russian": "Фэнтези",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 80,
                "name": "Horror",
                "russian": "Ужасы",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 48,
                "name": "Supernatural",
                "russian": "Сверхъестественное",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 70,
                "name": "Military",
                "russian": "Военное",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 67,
                "name": "Psychological",
                "russian": "Психологическое",
                "kind": "genre",
                "entry_type": "Manga"
            },
            {
                "id": 52,
                "name": "Seinen",
                "russian": "Сэйнэн",
                "kind": "genre",
                "entry_type": "Manga"
            }
        ],
        "publishers": [
            {
                "id": 2,
                "name": "Young Animal"
            }
        ],
        "user_rate": null
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
                "id": 423,
                "name": "Casca",
                "russian": "Каска",
                "image": {
                    "original": "/system/characters/original/423.jpg?1716844046",
                    "preview": "/system/characters/preview/423.jpg?1716844046",
                    "x96": "/system/characters/x96/423.jpg?1716844046",
                    "x48": "/system/characters/x48/423.jpg?1716844046"
                },
                "url": "/characters/423-casca"
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
                "id": 7857,
                "name": "Farnese de Vandimion",
                "russian": "Фарнеза де Вандимион",
                "image": {
                    "original": "/system/characters/original/7857.jpg?1716844542",
                    "preview": "/system/characters/preview/7857.jpg?1716844542",
                    "x96": "/system/characters/x96/7857.jpg?1716844542",
                    "x48": "/system/characters/x48/7857.jpg?1716844542"
                },
                "url": "/characters/7857-farnese-de-vandimion"
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
                "id": 424,
                "name": "Griffith",
                "russian": "Гриффит",
                "image": {
                    "original": "/system/characters/original/424.jpg?1716844047",
                    "preview": "/system/characters/preview/424.jpg?1716844047",
                    "x96": "/system/characters/x96/424.jpg?1716844047",
                    "x48": "/system/characters/x48/424.jpg?1716844047"
                },
                "url": "/characters/424-griffith"
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
                "id": 422,
                "name": "Guts",
                "russian": "ГатсПерсонаж",
                "image": {
                    "original": "/system/characters/original/422.jpg?1716844049",
                    "preview": "/system/characters/preview/422.jpg?1716844049",
                    "x96": "/system/characters/x96/422.jpg?1716844049",
                    "x48": "/system/characters/x48/422.jpg?1716844049"
                },
                "url": "/characters/422-guts"
            },
            "person": null
        },
    ];
    const mockComments = [
        {
            "id": 10735188,
            "user_id": 749357,
            "commentable_id": 10932,
            "commentable_type": "Topic",
            "body": "[comment=10733832;1015557], это я",
            "html_body": "\u003Ca href=\"https://shikimori.one/comments/10733832\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10733832,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:1015557,&quot;text&quot;:&quot;Melmoth t Wanderer&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003EMelmoth t Wanderer\u003C/span\u003E\u003C/a\u003E, это я",
            "created_at": "2024-06-10T14:53:13.681+03:00",
            "updated_at": "2024-06-10T14:53:13.681+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 749357,
                "nickname": "vizon",
                "avatar": "https://desu.shikimori.one/system/users/x48/749357.png?1717823336",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/749357.png?1717823336",
                    "x148": "https://desu.shikimori.one/system/users/x148/749357.png?1717823336",
                    "x80": "https://desu.shikimori.one/system/users/x80/749357.png?1717823336",
                    "x64": "https://desu.shikimori.one/system/users/x64/749357.png?1717823336",
                    "x48": "https://desu.shikimori.one/system/users/x48/749357.png?1717823336",
                    "x32": "https://desu.shikimori.one/system/users/x32/749357.png?1717823336",
                    "x16": "https://desu.shikimori.one/system/users/x16/749357.png?1717823336"
                },
                "last_online_at": "2024-06-10T23:03:47.789+03:00",
                "url": "https://shikimori.one/vizon"
            }
        },
        {
            "id": 10734667,
            "user_id": 913329,
            "commentable_id": 10932,
            "commentable_type": "Topic",
            "body": "[comment=10733832;1015557], не знаю такого.",
            "html_body": "\u003Ca href=\"https://shikimori.one/comments/10733832\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10733832,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:1015557,&quot;text&quot;:&quot;Melmoth t Wanderer&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003EMelmoth t Wanderer\u003C/span\u003E\u003C/a\u003E, не.",
            "created_at": "2024-06-10T05:59:58.909+03:00",
            "updated_at": "2024-06-10T05:59:58.909+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 913329,
                "nickname": "mamashinji",
                "avatar": "https://desu.shikimori.one/system/users/x48/913329.png?1676955477",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/913329.png?1676955477",
                    "x148": "https://desu.shikimori.one/system/users/x148/913329.png?1676955477",
                    "x80": "https://desu.shikimori.one/system/users/x80/913329.png?1676955477",
                    "x64": "https://desu.shikimori.one/system/users/x64/913329.png?1676955477",
                    "x48": "https://desu.shikimori.one/system/users/x48/913329.png?1676955477",
                    "x32": "https://desu.shikimori.one/system/users/x32/913329.png?1676955477",
                    "x16": "https://desu.shikimori.one/system/users/x16/913329.png?1676955477"
                },
                "last_online_at": "2024-06-11T08:25:50.460+03:00",
                "url": "https://shikimori.one/mamashinji"
            }
        },
        {
            "id": 10733832,
            "user_id": 1015557,
            "commentable_id": 10932,
            "commentable_type": "Topic",
            "body": "[comment=10731823;913329], это ты?\n\n[replies=10734667,10734708,10735188]",
            "html_body": "\u003Ca href=\"https://shikimori.one/comments/10731823\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10731823,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:913329,&quot;text&quot;:&quot;mamashinji&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Emamashinji\u003C/span\u003E\u003C/a\u003E, это ты?\u003Cdiv class=\"b-replies translated-before \" data-text-ru=\"Ответы: \" data-text-en=\"Replies: \" data-text-alt-ru=\"Ответ: \" data-text-alt-en=\"Reply: \"\u003E\u003Ca href=\"https://shikimori.one/comments/10734667\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10734667,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:913329,&quot;text&quot;:&quot;mamashinji&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Emamashinji\u003C/span\u003E\u003C/a\u003E, \u003Ca href=\"https://shikimori.one/comments/10734708\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10734708,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:913329,&quot;text&quot;:&quot;mamashinji&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Emamashinji\u003C/span\u003E\u003C/a\u003E, \u003Ca href=\"https://shikimori.one/comments/10735188\" class=\"b-mention bubbled\" data-attrs=\"{&quot;id&quot;:10735188,&quot;type&quot;:&quot;comment&quot;,&quot;userId&quot;:749357,&quot;text&quot;:&quot;vizon&quot;}\"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cspan\u003Evizon\u003C/span\u003E\u003C/a\u003E\u003C/div\u003E",
            "created_at": "2024-06-09T18:06:12.964+03:00",
            "updated_at": "2024-06-09T18:06:15.964+03:00",
            "is_offtopic": false,
            "is_summary": false,
            "can_be_edited": false,
            "user": {
                "id": 1015557,
                "nickname": "Melmoth t Wanderer",
                "avatar": "https://desu.shikimori.one/system/users/x48/1015557.png?1717939238",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/1015557.png?1717939238",
                    "x148": "https://desu.shikimori.one/system/users/x148/1015557.png?1717939238",
                    "x80": "https://desu.shikimori.one/system/users/x80/1015557.png?1717939238",
                    "x64": "https://desu.shikimori.one/system/users/x64/1015557.png?1717939238",
                    "x48": "https://desu.shikimori.one/system/users/x48/1015557.png?1717939238",
                    "x32": "https://desu.shikimori.one/system/users/x32/1015557.png?1717939238",
                    "x16": "https://desu.shikimori.one/system/users/x16/1015557.png?1717939238"
                },
                "last_online_at": "2024-06-11T08:24:52.161+03:00",
                "url": "https://shikimori.one/Melmoth+t+Wanderer"
            }
        },
    ];

    test("should render error", async () => {
        renderWithProviders(<BrowserRouter>
            <MangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText("Error")).toBeTruthy();
        })
    });

    test("should render page with manga & roles error & comments error", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockManga));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined/roles", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <MangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Наёмник Гатс, по прозвищу Чёрный Мечник/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/Берсерк/i)).toBeTruthy();
        expect(screen.getAllByText(/Berserk/i)).toBeTruthy();
        expect(screen.getByText(/Something went wrong/i)).toBeTruthy();
        expect(screen.queryByText(/Каска/i)).not.toBeTruthy();
        expect(screen.queryByText(/Фарнеза де Вандимион/i)).not.toBeTruthy();
        expect(screen.queryByText(/Гриффит/i)).not.toBeTruthy();
        expect(screen.queryByText(/ГатсПерсонаж/i)).not.toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/Error/i)).toBeTruthy();
        })

        expect(screen.queryByText(/vizon/i)).not.toBeTruthy();
        expect(screen.queryByText(/это я/i)).not.toBeTruthy();
        expect(screen.queryByText(/mamashinji/i)).not.toBeTruthy();
        expect(screen.queryByText(/не знаю такого./i)).not.toBeTruthy();
        expect(screen.queryByText(/Melmoth t Wanderer/i)).not.toBeTruthy();
        expect(screen.queryByText(/это ты\?/i)).not.toBeTruthy();
    });

    test("should render page with manga & roles & comments error", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockManga));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined/roles", (req, res, context) => {
                return res(context.status(200), context.json(mockRoles));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(500), context.json("error"));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <MangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Наёмник Гатс, по прозвищу Чёрный Мечник/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/Берсерк/i)).toBeTruthy();
        expect(screen.getAllByText(/Berserk/i)).toBeTruthy();
        expect(screen.getByText(/Каска/i)).toBeTruthy();
        expect(screen.getByText(/Фарнеза де Вандимион/i)).toBeTruthy();
        expect(screen.getByText(/Гриффит/i)).toBeTruthy();
        expect(screen.getByText(/ГатсПерсонаж/i)).toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/Error/i)).toBeTruthy();
        })

        expect(screen.queryByText(/vizon/i)).not.toBeTruthy();
        expect(screen.queryByText(/это я/i)).not.toBeTruthy();
        expect(screen.queryByText(/mamashinji/i)).not.toBeTruthy();
        expect(screen.queryByText(/не знаю такого./i)).not.toBeTruthy();
        expect(screen.queryByText(/Melmoth t Wanderer/i)).not.toBeTruthy();
        expect(screen.queryByText(/это ты\?/i)).not.toBeTruthy();
    });

    test("should render page with manga & roles & comments", async () => {
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined", (req, res, context) => {
                return res(context.status(200), context.json(mockManga));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "mangas/undefined/roles", (req, res, context) => {
                return res(context.status(200), context.json(mockRoles));
            }),
        );
        server.use(
            rest.get(BASE_API_URL + "comments", (req, res, context) => {
                return res(context.status(200), context.json(mockComments));
            }),
        );


        renderWithProviders(<BrowserRouter>
            <MangaPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Наёмник Гатс, по прозвищу Чёрный Мечник/i)).toBeTruthy();
        })

        expect(screen.getAllByText(/Берсерк/i)).toBeTruthy();
        expect(screen.getAllByText(/Berserk/i)).toBeTruthy();
        expect(screen.getByText(/Каска/i)).toBeTruthy();
        expect(screen.getByText(/Фарнеза де Вандимион/i)).toBeTruthy();
        expect(screen.getByText(/Гриффит/i)).toBeTruthy();
        expect(screen.getByText(/ГатсПерсонаж/i)).toBeTruthy();

        // wait for comments
        await waitFor(() => {
            expect(screen.getByText(/vizon/i)).toBeTruthy();
        })
        expect(screen.getByText(/это я/i)).toBeTruthy();
        expect(screen.getAllByText(/mamashinji/i)).toBeTruthy();
        expect(screen.getByText(/не знаю такого./i)).toBeTruthy();
        expect(screen.getAllByText(/Melmoth t Wanderer/i)).toBeTruthy();
        expect(screen.getAllByText(/это ты\?/i)).toBeTruthy();
    })
})