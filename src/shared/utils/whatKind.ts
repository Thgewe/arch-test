import TShikimoriKind from "../models/shikimoriAPI/TShikimoriKind";

/**
 * Based on the passed, raw "kind", returns a user-friendly string.
 * @param kind {TShikimoriKind}
 */

export const whatKind = (kind: TShikimoriKind) => {
    let str: string;
    switch(kind) {
        case 'tv':
            str = 'TV Сериал'
            break;
        case 'movie':
            str = 'Фильм'
            break;
        case 'ova':
            str = 'OVA'
            break;
        case 'ona':
            str = 'ONA'
            break;
        case 'special':
            str = 'Спешл'
            break;
        case 'music':
            str = 'Клип'
            break;
        case 'manga':
            str = 'Манга'
            break;
        case 'manhwa':
            str = 'Манхва'
            break;
        case 'manhua':
            str = 'Маньхуа'
            break;
        case 'one_shot':
            str = 'Ваншот'
            break;
        case 'light_novel':
            str = 'Ранобэ'
            break;
        case 'novel':
            str = 'Новелла'
            break;
        default:
            str = 'TV Сериал'
    }
    return str
}