import {mockServer} from "../mocks/node";
import {renderWithProviders} from "../shared/utils/testUtils";
import {BrowserRouter} from "react-router-dom";
import AnimePage from "../pages/AnimePage/AnimePage";
import {screen, waitFor} from "@testing-library/react";
import MainPage from "../pages/MainPage/MainPage";
import {rest} from "msw";
import {BASE_API_URL} from "../shared/utils/constants";

const server = mockServer();

describe("AnimePage.tsx", () => {
    const mockNews = [
        {
            "id": 551109,
            "topic_title": "Манга «Oshi no Ko» подходит к концу",
            "body": "Манга [person=2139]Аки Акасаки[/person] «[anime=52034]Ребёнок идола[/anime]» вступит в финальную арку со следующей недели.\r\n\r\nА 3 июля начинается трансляция [anime=55791]2-ого сезона аниме-адаптации[/anime].\r\n\r\n[quote]Красная ковровая дорожка, яркие вспышки фотоаппаратов, восторженные вскрики поклонников! Наверняка каждый хоть раз в жизни мечтал прославиться: стать знаменитым музыкантом, востребованным актёром или популярным певцом. Только вот путь становления звездой тернист, и лишь немногим удаётся осуществить мечту. Но что, если двери в шоу-бизнес были бы открыты с самого начала?\r\n\r\nАквамарин и Руби Хосино — дети популярной певицы Ай Хосино. Им не составило труда начать карьеру и влиться в развлекательную индустрию, ведь они с самого начала являлись её частью. Пускай близнецы с рождения принадлежат миру грёз и им суждено стать идолами, знают ли они, что главное оружие в этой сфере — ложь, а яркий свет софитов скрывает тёмные стороны шоу-бизнеса? Чтобы выжить в этом блистательном мире и раскрыть главную тайну их матери, Аквамарину и Руби тоже придётся надеть маски и смиренно играть свои роли.[/quote]",
            "html_body": "Манга \u003Ca href=\"https://shikimori.one/people/2139-aka-akasaka\" title=\"Aka Akasaka\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/2139-aka-akasaka/tooltip\" data-attrs=\"{&quot;id&quot;:2139,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Aka Akasaka&quot;,&quot;russian&quot;:&quot;Ака Акасака&quot;}\"\u003EАки Акасаки\u003C/a\u003E «\u003Ca href=\"https://shikimori.one/animes/52034-oshi-no-ko\" title=\"&quot;Oshi no Ko&quot;\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/animes/52034-oshi-no-ko/tooltip\" data-attrs=\"{&quot;id&quot;:52034,&quot;type&quot;:&quot;anime&quot;,&quot;name&quot;:&quot;\\&quot;Oshi no Ko\\&quot;&quot;,&quot;russian&quot;:&quot;Ребёнок идола&quot;}\"\u003EРебёнок идола\u003C/a\u003E» вступит в финальную арку со следующей недели.\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003EА 3 июля начинается трансляция \u003Ca href=\"https://shikimori.one/animes/55791-oshi-no-ko-2nd-season\" title=\"&quot;Oshi no Ko&quot; 2nd Season\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/animes/55791-oshi-no-ko-2nd-season/tooltip\" data-attrs=\"{&quot;id&quot;:55791,&quot;type&quot;:&quot;anime&quot;,&quot;name&quot;:&quot;\\&quot;Oshi no Ko\\&quot; 2nd Season&quot;,&quot;russian&quot;:&quot;Ребёнок идола 2&quot;}\"\u003E2-ого сезона аниме-адаптации\u003C/a\u003E.\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003E\u003Cdiv class=\"b-quote\"\u003E\u003Cdiv class=\"quote-content\"\u003EКрасная ковровая дорожка, яркие вспышки фотоаппаратов, восторженные вскрики поклонников! Наверняка каждый хоть раз в жизни мечтал прославиться: стать знаменитым музыкантом, востребованным актёром или популярным певцом. Только вот путь становления звездой тернист, и лишь немногим удаётся осуществить мечту. Но что, если двери в шоу-бизнес были бы открыты с самого начала?\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003EАквамарин и Руби Хосино — дети популярной певицы Ай Хосино. Им не составило труда начать карьеру и влиться в развлекательную индустрию, ведь они с самого начала являлись её частью. Пускай близнецы с рождения принадлежат миру грёз и им суждено стать идолами, знают ли они, что главное оружие в этой сфере — ложь, а яркий свет софитов скрывает тёмные стороны шоу-бизнеса? Чтобы выжить в этом блистательном мире и раскрыть главную тайну их матери, Аквамарину и Руби тоже придётся надеть маски и смиренно играть свои роли.\u003C/div\u003E\u003C/div\u003E",
            "html_footer": "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Ca href=\"https://desu.shikimori.one/system/user_images_h/original/0aeb2fb835b8d9d6d63b5ae8/ec8f8e2161e7ce624bd5f9022a483385e0e2253e64b4599a6d1d1afd6ac8f47d.jpg\" class=\"b-image unprocessed\"\u003E\u003Cimg src=\"https://desu.shikimori.one/system/user_images_h/preview/0aeb2fb835b8d9d6d63b5ae8/ec8f8e2161e7ce624bd5f9022a483385e0e2253e64b4599a6d1d1afd6ac8f47d.jpg\"\u003E\u003C/a\u003E\u003C/div\u003E",
            "created_at": "2024-06-11T00:45:00.098+03:00",
            "comments_count": 28,
            "forum": {
                "id": 20,
                "position": 5,
                "name": "Новости",
                "permalink": "news",
                "url": "/forum/news"
            },
            "user": {
                "id": 982655,
                "nickname": "MR_nick_Russ",
                "avatar": "https://desu.shikimori.one/system/users/x48/982655.png?1717849317",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/982655.png?1717849317",
                    "x148": "https://desu.shikimori.one/system/users/x148/982655.png?1717849317",
                    "x80": "https://desu.shikimori.one/system/users/x80/982655.png?1717849317",
                    "x64": "https://desu.shikimori.one/system/users/x64/982655.png?1717849317",
                    "x48": "https://desu.shikimori.one/system/users/x48/982655.png?1717849317",
                    "x32": "https://desu.shikimori.one/system/users/x32/982655.png?1717849317",
                    "x16": "https://desu.shikimori.one/system/users/x16/982655.png?1717849317"
                },
                "last_online_at": "2024-06-11T06:29:29.699+03:00",
                "url": "https://shikimori.one/MR_nick_Russ"
            },
            "type": "Topics::NewsTopic",
            "linked_id": 126146,
            "linked_type": "Manga",
            "linked": {
                "id": 126146,
                "name": "\"Oshi no Ko\"",
                "russian": "Ребёнок идола",
                "image": {
                    "original": "/system/mangas/original/126146.jpg?1716651404",
                    "preview": "/system/mangas/preview/126146.jpg?1716651404",
                    "x96": "/system/mangas/x96/126146.jpg?1716651404",
                    "x48": "/system/mangas/x48/126146.jpg?1716651404"
                },
                "url": "/mangas/126146-oshi-no-ko",
                "kind": "manga",
                "score": "8.51",
                "status": "ongoing",
                "volumes": 0,
                "chapters": 0,
                "aired_on": "2020-04-23",
                "released_on": null
            },
            "viewed": true,
            "last_comment_viewed": true,
            "event": null,
            "episode": null
        },
        {
            "id": 551072,
            "topic_title": "Дополнительный актерский состав аниме «Mob kara Hajimaru Tansaku Eiyuutan»",
            "body": "На официальном сайте аниме «[anime=57646 от-простого-человека-до-героя-разведчика]» представили дополнительный актерский состав.\r\n\u003E [b]СЭЙЮ И ПЕРСОНАЖИ:[/b]\r\n\u003E [person=24269 ёсино-аояма] в роли [url=https://shikimori.one/characters/250226-airi-jinguuji]Айри Дзингудзи[/url].\r\n\u003E [person=51858 сайка-китамори] в роли [url=https://shikimori.one/characters/250419-miku-moriyama]Мику Морияма[/url].\r\n\u003E [url=https://shikimori.one/people/75296-azusa-tsujimori]Адзуса Цудзимори[/url] в роли [url=https://shikimori.one/characters/250420-hikari-tanabe]Хикари Танабэ[/url].\r\n\u003E \r\n\u003E МУЗЫКАЛЬНЫЕ ТЕМЫ:\r\n\u003E [b]OPENING[/b] «Up Start» исполнит [person=42058 amatsuki].\r\n\u003E [b]ENDING[/b] «Strobe Fantasy» исполнит [person=6731 may'n].\r\nТрансляция начнется 6 июля.\r\nЗа производство отвечает студия [url=https://shikimori.one/animes/studio/2554-Gekkou]Gekkou[/url].",
            "html_body": "На официальном сайте аниме «\u003Ca href=\"https://shikimori.one/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan\" title=\"Mob kara Hajimaru Tansaku Eiyuutan\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan/tooltip\" data-attrs=\"{&quot;id&quot;:57646,&quot;type&quot;:&quot;anime&quot;,&quot;name&quot;:&quot;Mob kara Hajimaru Tansaku Eiyuutan&quot;,&quot;russian&quot;:&quot;От простого человека до героя-разведчика&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003EMob kara Hajimaru Tansaku Eiyuutan\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EОт простого человека до героя-разведчика\u003C/span\u003E\u003C/a\u003E» представили дополнительный актерский состав.\u003Cbr\u003E\u003Cblockquote class=\"b-quote-v2\"\u003E\u003Cdiv class=\"quote-content\"\u003E\u003Cstrong\u003EСЭЙЮ И ПЕРСОНАЖИ:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"https://shikimori.one/people/24269-yoshino-aoyama\" title=\"Yoshino Aoyama\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/24269-yoshino-aoyama/tooltip\" data-attrs=\"{&quot;id&quot;:24269,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Yoshino Aoyama&quot;,&quot;russian&quot;:&quot;Ёсино Аояма&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003EYoshino Aoyama\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EЁсино Аояма\u003C/span\u003E\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250226-airi-jinguuji\"\u003EАйри Дзингудзи\u003C/a\u003E.\u003Cbr\u003E\u003Ca href=\"https://shikimori.one/people/51858-saika-kitamori\" title=\"Saika Kitamori\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/51858-saika-kitamori/tooltip\" data-attrs=\"{&quot;id&quot;:51858,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Saika Kitamori&quot;,&quot;russian&quot;:&quot;Сайка Китамори&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003ESaika Kitamori\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EСайка Китамори\u003C/span\u003E\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250419-miku-moriyama\"\u003EМику Морияма\u003C/a\u003E.\u003Cbr\u003E\u003Ca class=\"b-link\" href=\"/people/75296-azusa-tsujimori\"\u003EАдзуса Цудзимори\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250420-hikari-tanabe\"\u003EХикари Танабэ\u003C/a\u003E.\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003EМУЗЫКАЛЬНЫЕ ТЕМЫ:\u003Cbr\u003E\u003Cstrong\u003EOPENING\u003C/strong\u003E «Up Start» исполнит \u003Ca href=\"https://shikimori.one/people/42058-amatsuki\" title=\"Amatsuki\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/42058-amatsuki/tooltip\" data-attrs=\"{&quot;id&quot;:42058,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Amatsuki&quot;,&quot;russian&quot;:&quot;&quot;}\"\u003EAmatsuki\u003C/a\u003E.\u003Cbr\u003E\u003Cstrong\u003EENDING\u003C/strong\u003E «Strobe Fantasy» исполнит \u003Ca href=\"https://shikimori.one/people/6731-may-n\" title=\"May'n\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/6731-may-n/tooltip\" data-attrs=\"{&quot;id&quot;:6731,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;May'n&quot;,&quot;russian&quot;:&quot;&quot;}\"\u003EMay'n\u003C/a\u003E.\u003C/div\u003E\u003C/blockquote\u003EТрансляция начнется 6 июля.\u003Cbr\u003EЗа производство отвечает студия \u003Ca class=\"b-link\" href=\"/animes/studio/2554-Gekkou\"\u003EGekkou\u003C/a\u003E.",
            "html_footer": "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Ca href=\"https://desu.shikimori.one/system/user_images_h/original/7d7f69b1fb6f27f220b29119/b748d23560a68e21fb0f91ada0f4de2d253e5f465418e46b13fd38013f7a5ca8.jpg\" class=\"b-image unprocessed\"\u003E\u003Cimg src=\"https://desu.shikimori.one/system/user_images_h/preview/7d7f69b1fb6f27f220b29119/b748d23560a68e21fb0f91ada0f4de2d253e5f465418e46b13fd38013f7a5ca8.jpg\"\u003E\u003C/a\u003E\u003C/div\u003E",
            "created_at": "2024-06-10T16:39:14.314+03:00",
            "comments_count": 5,
            "forum": {
                "id": 20,
                "position": 5,
                "name": "Новости",
                "permalink": "news",
                "url": "/forum/news"
            },
            "user": {
                "id": 385438,
                "nickname": "omashune",
                "avatar": "https://desu.shikimori.one/system/users/x48/385438.png?1668942868",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/385438.png?1668942868",
                    "x148": "https://desu.shikimori.one/system/users/x148/385438.png?1668942868",
                    "x80": "https://desu.shikimori.one/system/users/x80/385438.png?1668942868",
                    "x64": "https://desu.shikimori.one/system/users/x64/385438.png?1668942868",
                    "x48": "https://desu.shikimori.one/system/users/x48/385438.png?1668942868",
                    "x32": "https://desu.shikimori.one/system/users/x32/385438.png?1668942868",
                    "x16": "https://desu.shikimori.one/system/users/x16/385438.png?1668942868"
                },
                "last_online_at": "2024-06-11T04:14:06.376+03:00",
                "url": "https://shikimori.one/omashune"
            },
            "type": "Topics::NewsTopic",
            "linked_id": 57646,
            "linked_type": "Anime",
            "linked": {
                "id": 57646,
                "name": "Mob kara Hajimaru Tansaku Eiyuutan",
                "russian": "От простого человека до героя-разведчика",
                "image": {
                    "original": "/system/animes/original/57646.jpg?1711568233",
                    "preview": "/system/animes/preview/57646.jpg?1711568233",
                    "x96": "/system/animes/x96/57646.jpg?1711568233",
                    "x48": "/system/animes/x48/57646.jpg?1711568233"
                },
                "url": "/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan",
                "kind": "tv",
                "score": "0.0",
                "status": "anons",
                "episodes": 0,
                "episodes_aired": 0,
                "aired_on": "2024-07-06",
                "released_on": null
            },
            "viewed": true,
            "last_comment_viewed": true,
            "event": null,
            "episode": null
        },
        {
            "id": 552072,
            "topic_title": "TO POP",
            "body": "На официальном сайте аниме «[anime=57646 от-простого-человека-до-героя-разведчика]» представили дополнительный актерский состав.\r\n\u003E [b]СЭЙЮ И ПЕРСОНАЖИ:[/b]\r\n\u003E [person=24269 ёсино-аояма] в роли [url=https://shikimori.one/characters/250226-airi-jinguuji]Айри Дзингудзи[/url].\r\n\u003E [person=51858 сайка-китамори] в роли [url=https://shikimori.one/characters/250419-miku-moriyama]Мику Морияма[/url].\r\n\u003E [url=https://shikimori.one/people/75296-azusa-tsujimori]Адзуса Цудзимори[/url] в роли [url=https://shikimori.one/characters/250420-hikari-tanabe]Хикари Танабэ[/url].\r\n\u003E \r\n\u003E МУЗЫКАЛЬНЫЕ ТЕМЫ:\r\n\u003E [b]OPENING[/b] «Up Start» исполнит [person=42058 amatsuki].\r\n\u003E [b]ENDING[/b] «Strobe Fantasy» исполнит [person=6731 may'n].\r\nТрансляция начнется 6 июля.\r\nЗа производство отвечает студия [url=https://shikimori.one/animes/studio/2554-Gekkou]Gekkou[/url].",
            "html_body": "На официальном сайте аниме «\u003Ca href=\"https://shikimori.one/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan\" title=\"Mob kara Hajimaru Tansaku Eiyuutan\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan/tooltip\" data-attrs=\"{&quot;id&quot;:57646,&quot;type&quot;:&quot;anime&quot;,&quot;name&quot;:&quot;Mob kara Hajimaru Tansaku Eiyuutan&quot;,&quot;russian&quot;:&quot;От простого человека до героя-разведчика&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003EMob kara Hajimaru Tansaku Eiyuutan\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EОт простого человека до героя-разведчика\u003C/span\u003E\u003C/a\u003E» представили дополнительный актерский состав.\u003Cbr\u003E\u003Cblockquote class=\"b-quote-v2\"\u003E\u003Cdiv class=\"quote-content\"\u003E\u003Cstrong\u003EСЭЙЮ И ПЕРСОНАЖИ:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"https://shikimori.one/people/24269-yoshino-aoyama\" title=\"Yoshino Aoyama\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/24269-yoshino-aoyama/tooltip\" data-attrs=\"{&quot;id&quot;:24269,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Yoshino Aoyama&quot;,&quot;russian&quot;:&quot;Ёсино Аояма&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003EYoshino Aoyama\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EЁсино Аояма\u003C/span\u003E\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250226-airi-jinguuji\"\u003EАйри Дзингудзи\u003C/a\u003E.\u003Cbr\u003E\u003Ca href=\"https://shikimori.one/people/51858-saika-kitamori\" title=\"Saika Kitamori\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/51858-saika-kitamori/tooltip\" data-attrs=\"{&quot;id&quot;:51858,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Saika Kitamori&quot;,&quot;russian&quot;:&quot;Сайка Китамори&quot;}\"\u003E\u003Cspan class=\"name-en\"\u003ESaika Kitamori\u003C/span\u003E\u003Cspan class=\"name-ru\"\u003EСайка Китамори\u003C/span\u003E\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250419-miku-moriyama\"\u003EМику Морияма\u003C/a\u003E.\u003Cbr\u003E\u003Ca class=\"b-link\" href=\"/people/75296-azusa-tsujimori\"\u003EАдзуса Цудзимори\u003C/a\u003E в роли \u003Ca class=\"b-link\" href=\"/characters/250420-hikari-tanabe\"\u003EХикари Танабэ\u003C/a\u003E.\u003Cbr class=\"br\"\u003E\u003Cbr class=\"br\"\u003EМУЗЫКАЛЬНЫЕ ТЕМЫ:\u003Cbr\u003E\u003Cstrong\u003EOPENING\u003C/strong\u003E «Up Start» исполнит \u003Ca href=\"https://shikimori.one/people/42058-amatsuki\" title=\"Amatsuki\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/42058-amatsuki/tooltip\" data-attrs=\"{&quot;id&quot;:42058,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;Amatsuki&quot;,&quot;russian&quot;:&quot;&quot;}\"\u003EAmatsuki\u003C/a\u003E.\u003Cbr\u003E\u003Cstrong\u003EENDING\u003C/strong\u003E «Strobe Fantasy» исполнит \u003Ca href=\"https://shikimori.one/people/6731-may-n\" title=\"May'n\" class=\"bubbled b-link\" data-tooltip_url=\"https://shikimori.one/people/6731-may-n/tooltip\" data-attrs=\"{&quot;id&quot;:6731,&quot;type&quot;:&quot;person&quot;,&quot;name&quot;:&quot;May'n&quot;,&quot;russian&quot;:&quot;&quot;}\"\u003EMay'n\u003C/a\u003E.\u003C/div\u003E\u003C/blockquote\u003EТрансляция начнется 6 июля.\u003Cbr\u003EЗа производство отвечает студия \u003Ca class=\"b-link\" href=\"/animes/studio/2554-Gekkou\"\u003EGekkou\u003C/a\u003E.",
            "html_footer": "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Ca href=\"https://desu.shikimori.one/system/user_images_h/original/7d7f69b1fb6f27f220b29119/b748d23560a68e21fb0f91ada0f4de2d253e5f465418e46b13fd38013f7a5ca8.jpg\" class=\"b-image unprocessed\"\u003E\u003Cimg src=\"https://desu.shikimori.one/system/user_images_h/preview/7d7f69b1fb6f27f220b29119/b748d23560a68e21fb0f91ada0f4de2d253e5f465418e46b13fd38013f7a5ca8.jpg\"\u003E\u003C/a\u003E\u003C/div\u003E",
            "created_at": "2024-06-10T16:39:14.314+03:00",
            "comments_count": 5,
            "forum": {
                "id": 20,
                "position": 5,
                "name": "Новости",
                "permalink": "news",
                "url": "/forum/news"
            },
            "user": {
                "id": 385438,
                "nickname": "omashune",
                "avatar": "https://desu.shikimori.one/system/users/x48/385438.png?1668942868",
                "image": {
                    "x160": "https://desu.shikimori.one/system/users/x160/385438.png?1668942868",
                    "x148": "https://desu.shikimori.one/system/users/x148/385438.png?1668942868",
                    "x80": "https://desu.shikimori.one/system/users/x80/385438.png?1668942868",
                    "x64": "https://desu.shikimori.one/system/users/x64/385438.png?1668942868",
                    "x48": "https://desu.shikimori.one/system/users/x48/385438.png?1668942868",
                    "x32": "https://desu.shikimori.one/system/users/x32/385438.png?1668942868",
                    "x16": "https://desu.shikimori.one/system/users/x16/385438.png?1668942868"
                },
                "last_online_at": "2024-06-11T04:14:06.376+03:00",
                "url": "https://shikimori.one/omashune"
            },
            "type": "Topics::NewsTopic",
            "linked_id": 57646,
            "linked_type": "Anime",
            "linked": {
                "id": 57646,
                "name": "Mob kara Hajimaru Tansaku Eiyuutan",
                "russian": "От простого человека до героя-разведчика",
                "image": {
                    "original": "/system/animes/original/57646.jpg?1711568233",
                    "preview": "/system/animes/preview/57646.jpg?1711568233",
                    "x96": "/system/animes/x96/57646.jpg?1711568233",
                    "x48": "/system/animes/x48/57646.jpg?1711568233"
                },
                "url": "/animes/57646-mob-kara-hajimaru-tansaku-eiyuutan",
                "kind": "tv",
                "score": "0.0",
                "status": "anons",
                "episodes": 0,
                "episodes_aired": 0,
                "aired_on": "2024-07-06",
                "released_on": null
            },
            "viewed": true,
            "last_comment_viewed": true,
            "event": null,
            "episode": null
        },
    ];
    const mockOngoings = [
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
    ];

    test("should render error", async () => {
        server.use(
            rest.get(BASE_API_URL + "topics", (req, res, context) => {
                return res(context.status(500), context.json("error message"));
            })
        );

        renderWithProviders(<BrowserRouter>
            <MainPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText("Error")).toBeTruthy();
        })
    });
    test("should render news and ongoings error", async () => {
        server.use(
            rest.get(BASE_API_URL + "topics", (req, res, context) => {
                return res(context.status(200), context.json(mockNews));
            })
        );
        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(500), context.json("error message"));
            })
        );

        renderWithProviders(<BrowserRouter>
            <MainPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Манга «Oshi no Ko» подходит к концу/i)).toBeTruthy();
        })
        expect(screen.getByText(/Дополнительный актерский состав аниме «Mob kara Hajimaru Tansaku Eiyuutan»/i)).toBeTruthy();
        expect(screen.getByText("Something went wrong")).toBeTruthy();
        expect(screen.queryByText(/TO POP/i)).not.toBeTruthy();
        expect(screen.queryByText(/Sousou no Frieren/i)).not.toBeTruthy();
        expect(screen.queryByText(/Fullmetal Alchemist: Brotherhood/i)).not.toBeTruthy();
        expect(screen.queryByText(/Gintama°/i)).not.toBeTruthy();
        expect(screen.queryByText(/Steins;Gate/i)).not.toBeTruthy();
    });
    test("should render news and ongoings", async () => {

        server.use(
            rest.get(BASE_API_URL + "topics", (req, res, context) => {
                return res(context.status(200), context.json(mockNews));
            })
        );
        server.use(
            rest.get(BASE_API_URL + "animes", (req, res, context) => {
                return res(context.status(200), context.json(mockOngoings));
            })
        );

        renderWithProviders(<BrowserRouter>
            <MainPage />
        </BrowserRouter>);

        expect(screen.getByText("Loading...")).toBeTruthy();

        await waitFor(() => {
            expect(screen.getByText(/Манга «Oshi no Ko» подходит к концу/i)).toBeTruthy();
        });
        expect(screen.getByText(/Дополнительный актерский состав аниме «Mob kara Hajimaru Tansaku Eiyuutan»/i)).toBeTruthy();
        expect(screen.queryByText(/TO POP/i)).not.toBeTruthy();
        expect(screen.getByText(/Sousou no Frieren/i)).toBeTruthy();
        expect(screen.getByText(/Fullmetal Alchemist: Brotherhood/i)).toBeTruthy();
        expect(screen.getByText(/Steins;Gate/i)).toBeTruthy();
        expect(screen.getByText(/Gintama°/i)).toBeTruthy();
    });

});