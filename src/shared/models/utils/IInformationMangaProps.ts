import TShikimoriKind from "../shikimoriAPI/TShikimoriKind";
import {IGenre} from "../shikimoriAPI/IGenre";

export interface IInformationMangaProps {
    kind: TShikimoriKind,
    volumes: string,
    chapters: string,
    status: string,
    genres: IGenre[],
    licensors: string[],
    license_name_ru: string | null | undefined,
    aired_on: null | string,
    japanese: string[],
    english: string[],
    synonyms: string[],
}