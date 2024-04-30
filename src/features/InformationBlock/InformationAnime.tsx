import React from 'react';
import cl from './informationBlock.module.css';
import BlockName from "../../entities/BlockName/BlockName";
import InformationProperty from "../../entities/InformationProperty/InformationProperty";
import {whatKind} from "../../shared/utils/whatKind";
import {getDateDD_MMMM_YY} from "../../shared/utils/getDateDD_MMMM_YY";
import {whatRating} from "../../shared/utils/whatRating";
import {IInformationAnimeProps} from "../../shared/models/utils/IInformationAnimeProps";

const InformationAnime = ({
                         kind,
                         status,
                         duration,
                         episodes,
                         genres,
                         rating,
                         licensors,
                         license_name_ru,
                         japanese,
                         english,
                         synonyms,
                         aired_on,
                         next_episode_at,
}: IInformationAnimeProps) => {
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

export default InformationAnime;