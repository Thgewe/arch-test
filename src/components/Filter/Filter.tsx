import React from 'react';
import cl from "./filter.module.css";
import BlockName from "../BlockName/BlockName";
import {IFilterParams} from "../../models/shikimoriAPI/IFilterParams";

interface FilterProps {
    filter: IFilterParams,
    changeFilter: Function,
    type: 'animes' | 'mangas' | 'ranobe',
}

const Filter = ({changeFilter, filter, type}: FilterProps) => {

    const REGEXP_VALUE_ATTRIBUTE_NAME = /.*(?==)/;
    const REGEXP_VALUE_ATTRIBUTE_VALUE = /(?<==).*/;

    const changeHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.match(REGEXP_VALUE_ATTRIBUTE_VALUE)![0] === filter[e.currentTarget.value.match(REGEXP_VALUE_ATTRIBUTE_NAME)![0]]) {
            e.currentTarget.checked = false;
            changeFilter({...filter, page: 1, [e.currentTarget.value.match(REGEXP_VALUE_ATTRIBUTE_NAME)![0]]: ""});
            return;
        }
        changeFilter({...filter, page: 1, [e.currentTarget.value.match(REGEXP_VALUE_ATTRIBUTE_NAME)![0]]: e.currentTarget.value.match(REGEXP_VALUE_ATTRIBUTE_VALUE)![0]});
    }

    const animeStatus = {
        blockName: 'СТАТУС',
        name: 'status',
        parameters: [
            {id: 'animeStatus1', value: 'status=anons', label: 'Анонсировано'},
            {id: 'animeStatus2', value: 'status=ongoing', label: 'Сейчас выходит'},
            {id: 'animeStatus3', value: 'status=released', label: 'Вышедшее'},
            {id: 'animeStatus4', value: 'status=latest', label: 'Недавно вышедшее'},
        ]
    }
    const bookStatus = {
        blockName: 'СТАТУС',
        name: 'status',
        parameters: [
            {id: 'bookStatus1', value: 'status=anons', label: 'Анонсировано'},
            {id: 'bookStatus2', value: 'status=ongoing', label: 'Сейчас издаётся'},
            {id: 'bookStatus3', value: 'status=released', label: 'Издано'},
            {id: 'bookStatus4', value: 'status=latest', label: 'Недавно издано'},
            {id: 'bookStatus5', value: 'status=paused', label: 'Приостановлено'},
            {id: 'bookStatus6', value: 'status=discontinued', label: 'Прекращено'},
        ]
    }
    const animeType = {
        blockName: 'ТИП',
        name: 'kind',
        parameters: [
            {id: 'animeKind1', value: 'kind=tv', label: 'TV Сериал'},
            {id: 'animeKind2', value: 'kind=movie', label: 'Фильм'},
            {id: 'animeKind3', value: 'kind=ova', label: 'OVA'},
            {id: 'animeKind4', value: 'kind=ona', label: 'ONA'},
            {id: 'animeKind5', value: 'kind=special', label: 'Спешл'},
            {id: 'animeKind6', value: 'kind=music', label: 'Клип'},
        ]
    }
    const mangaType = {
        blockName: 'ТИП',
        name: 'kind',
        parameters: [
            {id: 'mangaKind1', value: 'kind=manga', label: 'Манга'},
            {id: 'mangaKind2', value: 'kind=manhwa', label: 'Манхва'},
            {id: 'mangaKind3', value: 'kind=manhua', label: 'Маньхуа'},
            {id: 'mangaKind4', value: 'kind=one_shot', label: 'Ваншот'},
            {id: 'mangaKind5', value: 'kind=doujin', label: 'Додзинси'},
        ]
    }
    const sort = {
        blockName: 'СОРТИРОВКА',
        name: 'order',
        parameters: [
            {id: 'order1', value: 'order=ranked', label: 'По рейтингу'},
            {id: 'order2', value: 'order=popularity', label: 'По популярности'},
            {id: 'order3', value: 'order=name', label: 'По алфавиту'},
            {id: 'order4', value: 'order=aired_on', label: 'По дате выхода'},
            {id: 'order5', value: 'order=ranked_random', label: 'Случайно'},
            {id: 'order6', value: 'order=id_desc', label: 'По ID'},
        ]
    }
    const season = {
        blockName: 'СЕЗОН',
        name: 'season',
        parameters: [
            {id: 'season1', value: 'season=Лето_2024', label: 'Лето 2024'},
            {id: 'season2', value: 'season=spring_2024', label: 'Весна 2024'},
            {id: 'season3', value: 'season=winter_2024', label: 'Зима 2024'},
            {id: 'season4', value: 'season=fall_2023', label: 'Осень 2023'},
            {id: 'season5', value: 'season=2024', label: '2024 год'},
            {id: 'season6', value: 'season=2023', label: '2023 год'},
            {id: 'season7', value: 'season=2021_2022', label: '2021-2022 год'},
            {id: 'season8', value: 'season=2016_2020', label: '2016-2020'},
            {id: 'season9', value: 'season=2010_2015', label: '2010-2015'},
            {id: 'season10', value: 'season=2000_2010', label: '2000-2010'},
            {id: 'season11', value: 'season=199x', label: '1990е годы'},
            {id: 'season12', value: 'season=198x', label: '1980е годы'},
            {id: 'season13', value: 'season=ancient', label: 'Более старые'},
        ]
    }
    const score = {
        blockName: 'ОЦЕНКА',
        name: 'score',
        parameters: [
            {id: 'score1', value: 'score=8', label: '8+'},
            {id: 'score2', value: 'score=7', label: '7+'},
            {id: 'score3', value: 'score=6', label: '6+'},
        ]
    }
    const animeRating = {
        blockName: 'РЕЙТИНГ',
        name: 'rating',
        parameters: [
            {id: 'animeRating1', value: 'rating=g', label: 'G'},
            {id: 'animeRating2', value: 'rating=pg', label: 'PG'},
            {id: 'animeRating3', value: 'rating=pg_13', label: 'PG-13'},
            {id: 'animeRating4', value: 'rating=r', label: 'R-17'},
            {id: 'animeRating5', value: 'rating=r_plus', label: 'R+'},
            {id: 'animeRating6', value: 'rating=rx', label: 'Rx'},
        ]
    }
    const genres = {
        blockName: 'ЖАНРЫ',
        name: 'genres',
        parameters: [
            {id: 'genres1', value: 'genre=27-Shounen', label: 'Сёнен'},
            {id: 'genres2', value: 'genre=28-Shounen Ai', label: 'Сёнен-ай'},
            {id: 'genres3', value: 'genre=42-Seinen', label: 'Сэйнэн'},
            {id: 'genres4', value: 'genre=25-Shoujo', label: 'Сёдзё'},
            {id: 'genres5', value: 'genre=26-Shoujo-Ai', label: 'Сёдзё-ай'},
            {id: 'genres6', value: 'genre=43-Josei', label: 'Дзёсей'},
            {id: 'genres7', value: 'genre=4-Comedy', label: 'Комедия'},
            {id: 'genres8', value: 'genre=22-Romance', label: 'Романтика'},
            {id: 'genres9', value: 'genre=23-School', label: 'Школа'},
            {id: 'genres10', value: 'genre=5-Dementia', label: 'Безумие'},
            {id: 'genres11', value: 'genre=17-Martial-Arts', label: 'Боевые искусства'},
            {id: 'genres12', value: 'genre=32-Vampire', label: 'Вампиры'},
            {id: 'genres13', value: 'genre=38-Military', label: 'Военное'},
            {id: 'genres14', value: 'genre=35-Harem', label: 'Гарем'},
            {id: 'genres15', value: 'genre=543-Gourmet', label: 'Гурман'},
            {id: 'genres16', value: 'genre=6-Demons', label: 'Демоны'},
            {id: 'genres17', value: 'genre=7-Mystery', label: 'Детектив'},
            {id: 'genres18', value: 'genre=15-Kids', label: 'Детское'},
            {id: 'genres19', value: 'genre=8-Drama', label: 'Драма'},
            {id: 'genres20', value: 'genre=11-Game', label: 'Игры'},
            {id: 'genres21', value: 'genre=13-Historical', label: 'Исторический'},
            {id: 'genres22', value: 'genre=29-Space', label: 'Космос'},
            {id: 'genres23', value: 'genre=16-Magic', label: 'Магия'},
            {id: 'genres24', value: 'genre=3-Cars', label: 'Машины'},
            {id: 'genres25', value: 'genre=18-Mecha', label: 'Меха'},
            {id: 'genres26', value: 'genre=19-Music', label: 'Музыка'},
            {id: 'genres27', value: 'genre=20-Parody', label: 'Пародия'},
            {id: 'genres28', value: 'genre=36-Slice-of-Life', label: 'Повседневность'},
            {id: 'genres29', value: 'genre=39-Police', label: 'Полиция'},
            {id: 'genres30', value: 'genre=2-Adventure', label: 'Приключения'},
            {id: 'genres31', value: 'genre=40-Psychological', label: 'Психологическое'},
            {id: 'genres32', value: 'genre=541-Work-Life', label: 'Работа'},
            {id: 'genres33', value: 'genre=21-Samurai', label: 'Самураи'},
            {id: 'genres34', value: 'genre=37-Supernatural', label: 'Сверхъестественное'},
            {id: 'genres35', value: 'genre=30-Sports', label: 'Спорт'},
            {id: 'genres36', value: 'genre=31-Super-Power', label: 'Супер сила'},
            {id: 'genres37', value: 'genre=14-Horror', label: 'Ужасы'},
            {id: 'genres38', value: 'genre=24-Sci-Fi', label: 'Фантастика'},
            {id: 'genres39', value: 'genre=10-Fantasy', label: 'Фэнтези'},
            {id: 'genres40', value: 'genre=1-Action', label: 'Экшен'},
            {id: 'genres41', value: 'genre=9-Ecchi', label: 'Этти'},
            {id: 'genres42', value: 'genre=41-Thriller', label: 'Триллер'},
            {id: 'genres43', value: 'genre=539-Erotica', label: 'Эротика'},
            {id: 'genres44', value: 'genre=12-Hentai', label: 'Хентай'},
            {id: 'genres45', value: 'genre=33-Yaoi', label: 'Яой'},
            {id: 'genres46', value: 'genre=34-Yuri', label: 'Юри'},
        ]
    }

    const parameters = type === 'animes'
        ? [animeStatus, animeType, sort, season, score, animeRating, genres]
        : [bookStatus, mangaType, sort, season, score, genres]

    return (
        <div className={cl.filter}>
            {parameters.map((block) => <div key={block.name} className={cl.parameter}>
                <BlockName type={"filter"} text={block.blockName}/>
                {block.parameters.map((param) => <div key={param.id} className={cl.btn}>
                    <input
                        id={param.id}
                        type={'radio'}
                        onClick={changeHandler}
                        name={block.name}
                        value={param.value}
                        defaultChecked={param.value === 'order=ranked'}
                    />
                    <label className={cl.fake} htmlFor={param.id}></label>
                    <label className={cl.label} htmlFor={param.id}>{param.label}</label>
                </div>)}
            </div>)}
        </div>
    );
};

export default Filter;