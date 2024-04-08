import TShikimoriKind from "./TShikimoriKind";
import IImage from "./IImage";

export default interface IShortAnime {
    id: string,
    name: string,
    russian: string,
    image: IImage,
    url: string,
    kind: TShikimoriKind,
    score: string,
    status: string, // 'anons' | 'ongoing' | 'released'
    episodes: number,
    episodes_aired: number,
    aired_on: null | string,
    released_on: null | string,
}