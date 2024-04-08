import React from 'react';
import cl from './information.module.css';
import BlockName from "../BlockName/BlockName";
import {IGenre} from "../../models/shikimoriAPI/IGenre";
import TShikimoriKind from "../../models/shikimoriAPI/TShikimoriKind";
import InformationProperty from "../InformationProperty/InformationProperty";
import {whatKind} from "../../utils/whatKind";
import {getDateDD_MMMM_YY} from "../../utils/getDateDD_MMMM_YY";
import {whatRating} from "../../utils/whatRating";

interface IInformationProps {
    kind: TShikimoriKind,
    episodes: number | undefined,
    duration: number | undefined,
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

const Information = ({
                                                kind,
                                                episodes,
                                                status,
                                                genres,
                                                licensors,
                                                license_name_ru,
                                                rating,
                                                duration,
                                                aired_on,
                                                next_episode_at,
                                                japanese,
                                                english,
                                                synonyms,
                                            }: IInformationProps) => {
    return (
        <div className={cl.info}>
            <BlockName type={'default'} text={'ИНФОРМАЦИЯ'}/>
            <div className={cl.properties}>
                <InformationProperty name={'Тип'} value={whatKind(kind)} />
                {episodes ? <InformationProperty name={'Эпизоды'} value={episodes} /> : null}
                {next_episode_at ? <InformationProperty name={'Следующий эпизод'} value={getDateDD_MMMM_YY(next_episode_at)} /> : null}
                {aired_on ? <InformationProperty name={'Статус'} value={
                    status === 'ongoing'
                        ? status + ' с ' + getDateDD_MMMM_YY(aired_on, true)
                        : status === 'anons'
                            ? status
                            : status + ' ' + getDateDD_MMMM_YY(aired_on, true)
                } /> : null}
                {duration ? <InformationProperty name={'Длительность'} value={duration + ' мин.'} /> : null}
                <InformationProperty name={'Жанры'} value={genres.reduce((acc, item) => acc + item.russian + ' ', '')} />
                {rating ? <InformationProperty name={'Рейтинг'} value={whatRating(rating)} /> : null}
                {licensors ? <InformationProperty name={'Лицензировано'} value={licensors.join(', ')} /> : null}
                {license_name_ru ? <InformationProperty name={'Лицензировано в РФ под названием'} value={license_name_ru} /> : null}
                <InformationProperty name={'По-японски'} value={japanese.join(', ')} />
                <InformationProperty name={'По-английски'} value={english.join(', ')} />
                <InformationProperty name={'Другие название'} value={synonyms.join(', ')} />
            </div>
        </div>
    );
};

export default Information;