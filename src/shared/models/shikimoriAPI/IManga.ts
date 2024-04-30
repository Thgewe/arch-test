import {IRatesStats} from "./IRatesStats";
import {IGenre} from "./IGenre";
import {IShortManga} from "./IShortManga";
import {IPublishers} from "./IPublishers";

export interface IManga extends IShortManga {
    english: string[],
    japanese: string[],
    synonyms: string[],
    licensors: string[],
    license_name_ru: string | null,
    description: string | null,
    description_html: string, // HTMLParagraphElement
    description_source: string | null,
    franchise: string | null,
    favoured: boolean,
    anons: boolean,
    ongoing: boolean,
    thread_id: string,
    topic_id: string,
    myanimelist_id: string,
    rates_scores_stats: IRatesStats[],
    rates_statuses_stats: IRatesStats[],
    genres: IGenre[],
    publishers: IPublishers[],
    user_rate: string
}