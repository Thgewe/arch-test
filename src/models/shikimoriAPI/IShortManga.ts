import TShikimoriKind from "./TShikimoriKind";
import IImage from "./IImage";

export interface IShortManga {
    id: string,
    name: string,
    russian: string,
    image: IImage,
    url: string,
    kind: TShikimoriKind,
    score: string,
    status: string,
    volumes: number,
    chapters: number,
    aired_on: string,
    released_on: null | string,
}