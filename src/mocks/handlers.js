import {BASE_API_URL} from "../shared/utils/constants";
import {rest} from "msw";

export const handlers = [
    rest.get(BASE_API_URL + "animes/21", (req, res, context) => {
        return res(context.status(200), context.json({
            "id": 21,
            "name": "One Piece",
            "russian": "Ван-Пис",
            "image": {
                "original": "/system/animes/original/21.jpg?1717283849",
                "preview": "/system/animes/preview/21.jpg?1717283849",
                "x96": "/system/animes/x96/21.jpg?1717283849",
                "x48": "/system/animes/x48/21.jpg?1717283849"
            },
            "url": "/animes/21-one-piece",
            "kind": "tv",
            "score": "8.72",
            "status": "ongoing",
            "episodes": 0,
            "episodes_aired": 1108,
            "aired_on": "1999-10-20",
            "released_on": null,
            "rating": "pg_13",
            "english": [
                "One Piece"
            ],
            "japanese": [
                "ONE PIECE"
            ],
            "synonyms": [
                "Большой куш",
                "Одним куском"
            ],
            "license_name_ru": "One Piece",
            "duration": 24,
            "description": "Легендарный [character=4883]Гол Д. Роджер[/character] был пиратским королём, он был единственным пиратом, проплывшим Гранд Лайн от начала и до конца. Захват Роджера 22 года тому назад всемирным правительством привёл к изменениям во всём мире. Последние слова пирата перед казнью открыли расположение величайшего сокровища мира Ван-Пис. Тот, кто добудет его, станет новым Королём пиратов, и именно это событие положило начало Великой эры пиратов.\r\n[character=40]Монки Д. Луффи[/character], 17-летний парень, бросает вызов Гранд Лайн. Он собирает команду и отправляется на поиски сокровища, мечтая о захватывающих приключениях и имея свои причины стать пиратом. Следуя по стопам своего героя детства, Короля пиратов, Луффи и его команда путешествуют по линии Великого моря навстречу безумным приключениям, сильным врагам, и всё для того, чтобы добыть великое сокровище мира — Ван-Пис.",
            "description_html": "<div class=\"b-text_with_paragraphs\">Легендарный <a href=\"https://shikimori.one/characters/4883-roger-gol-d\" title=\"Roger Gol D.\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/4883-roger-gol-d/tooltip\" data-attrs=\"{&quot;id&quot;:4883,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Roger Gol D.&quot;,&quot;russian&quot;:&quot;Роджер Гол Д.&quot;}\">Гол Д. Роджер</a> был пиратским королём, он был единственным пиратом, проплывшим Гранд Лайн от начала и до конца. Захват Роджера 22 года тому назад всемирным правительством привёл к изменениям во всём мире. Последние слова пирата перед казнью открыли расположение величайшего сокровища мира Ван-Пис. Тот, кто добудет его, станет новым Королём пиратов, и именно это событие положило начало Великой эры пиратов.<br><a href=\"https://shikimori.one/characters/40-luffy-monkey-d\" title=\"Luffy Monkey D.\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/characters/40-luffy-monkey-d/tooltip\" data-attrs=\"{&quot;id&quot;:40,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Luffy Monkey D.&quot;,&quot;russian&quot;:&quot;Луффи Монки Д.&quot;}\">Монки Д. Луффи</a>, 17-летний парень, бросает вызов Гранд Лайн. Он собирает команду и отправляется на поиски сокровища, мечтая о захватывающих приключениях и имея свои причины стать пиратом. Следуя по стопам своего героя детства, Короля пиратов, Луффи и его команда путешествуют по линии Великого моря навстречу безумным приключениям, сильным врагам, и всё для того, чтобы добыть великое сокровище мира — Ван-Пис.</div>",
            "description_source": null,
            "franchise": "one_piece",
            "favoured": false,
            "anons": false,
            "ongoing": true,
            "thread_id": 3413,
            "topic_id": 3413,
            "myanimelist_id": 21,
            "rates_scores_stats": [
                {
                    "name": 10,
                    "value": 21373
                },
                {
                    "name": 9,
                    "value": 6468
                },
                {
                    "name": 8,
                    "value": 5132
                },
                {
                    "name": 7,
                    "value": 2963
                },
                {
                    "name": 6,
                    "value": 1287
                },
                {
                    "name": 5,
                    "value": 789
                },
                {
                    "name": 4,
                    "value": 360
                },
                {
                    "name": 3,
                    "value": 194
                },
                {
                    "name": 2,
                    "value": 153
                },
                {
                    "name": 1,
                    "value": 490
                }
            ],
            "rates_statuses_stats": [
                {
                    "name": "Запланировано",
                    "value": 19591
                },
                {
                    "name": "Просмотрено",
                    "value": 17979
                },
                {
                    "name": "Смотрю",
                    "value": 60398
                },
                {
                    "name": "Брошено",
                    "value": 11243
                },
                {
                    "name": "Отложено",
                    "value": 9483
                }
            ],
            "updated_at": "2024-06-10T14:46:18.987+03:00",
            "next_episode_at": "2024-06-16T03:30:00.000+03:00",
            "fansubbers": [
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
            "fandubbers": [
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
            "licensors": [
                "2x2",
                "Wakanim",
                "Crunchyroll"
            ],
            "genres": [
                {
                    "id": 1,
                    "name": "Action",
                    "russian": "Экшен",
                    "kind": "genre",
                    "entry_type": "Anime"
                },
                {
                    "id": 2,
                    "name": "Adventure",
                    "russian": "Приключения",
                    "kind": "genre",
                    "entry_type": "Anime"
                },
                {
                    "id": 10,
                    "name": "Fantasy",
                    "russian": "Фэнтези",
                    "kind": "genre",
                    "entry_type": "Anime"
                },
                {
                    "id": 27,
                    "name": "Shounen",
                    "russian": "Сёнен",
                    "kind": "genre",
                    "entry_type": "Anime"
                }
            ],
            "studios": [
                {
                    "id": 18,
                    "name": "Toei Animation",
                    "filtered_name": "Toei",
                    "real": true,
                    "image": "/system/studios/original/18.?1446981470"
                }
            ],
            "videos": [
                {
                    "id": 15860,
                    "url": "https://youtu.be/-tviZNY6CSw",
                    "image_url": "http://img.youtube.com/vi/-tviZNY6CSw/hqdefault.jpg",
                    "player_url": "http://youtube.com/embed/-tviZNY6CSw",
                    "name": "Трейлер Madman",
                    "kind": "pv",
                    "hosting": "youtube"
                },
                {
                    "id": 31467,
                    "url": "https://youtu.be/rHOz66O3F2E",
                    "image_url": "http://img.youtube.com/vi/rHOz66O3F2E/hqdefault.jpg",
                    "player_url": "http://youtube.com/embed/rHOz66O3F2E",
                    "name": "Трейлер adult swim",
                    "kind": "pv",
                    "hosting": "youtube"
                }
            ],
            "screenshots": [
                {
                    "original": "/system/screenshots/original/625f8903677439e2a2a34878b8f619d57f537f0e.jpg?1620559070",
                    "preview": "/system/screenshots/x332/625f8903677439e2a2a34878b8f619d57f537f0e.jpg?1620559070"
                },
                {
                    "original": "/system/screenshots/original/67af2e8f99488836ac0f0fb51ec15c30f52f229c.jpg?1620559070",
                    "preview": "/system/screenshots/x332/67af2e8f99488836ac0f0fb51ec15c30f52f229c.jpg?1620559070"
                }
            ],
            "user_rate": null
        }))
    })
]