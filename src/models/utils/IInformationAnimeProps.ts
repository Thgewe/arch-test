import TShikimoriKind from "../shikimoriAPI/TShikimoriKind";
import {IGenre} from "../shikimoriAPI/IGenre";

export interface IInformationAnimeProps {
    kind: TShikimoriKind,
    episodes: number | undefined,
    duration: string | undefined,
    status: string,
    genres: IGenre[],
    licensors: string[] | undefined,
    license_name_ru: string | null | undefined,
    rating: string | undefined,
    aired_on: null | string,
    next_episode_at: null | string | undefined,
    japanese: string[],
    english: string[],
    synonyms: string[],
}