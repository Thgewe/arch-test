import React from 'react';
import cl from "./informationBlock.module.css";
import BlockName from "../../entities/BlockName/BlockName";
import {whatKind} from "../../shared/utils/whatKind";
import InformationProperty from "../../entities/InformationProperty/InformationProperty";
import {IInformationMangaProps} from "../../shared/models/utils/IInformationMangaProps";
import {getDateDD_MMMM_YY} from "../../shared/utils/getDateDD_MMMM_YY";

const InformationManga = ({
    kind,
    japanese,
    english,
    synonyms,
    genres,
    volumes,
    chapters,
    status,
    licensors,
    license_name_ru,
    aired_on,
}: IInformationMangaProps) => {
    return (
        <div className={cl.info}>
            <BlockName type={'default'} text={'ИНФОРМАЦИЯ'}/>
            <div className={cl.properties}>
                <InformationProperty name={'Тип'} value={whatKind(kind)} />
                {volumes ? <InformationProperty name={'Томов'} value={volumes} /> : null}
                {chapters ? <InformationProperty name={'Глав'} value={chapters} /> : null}
                <InformationProperty name={'Жанры'} value={genres.reduce((acc, item) => acc + item.russian + ' ', '')} />
                {aired_on ? <InformationProperty name={'Статус'} value={
                    status === 'ongoing'
                        ? 'выходит с ' + getDateDD_MMMM_YY(aired_on, true)
                        : status === 'anons'
                            ? status
                            : status + ' ' + getDateDD_MMMM_YY(aired_on, true)
                } /> : null}
                {licensors ? <InformationProperty name={'Лицензировано'} value={licensors.join(', ')} /> : null}
                {license_name_ru ? <InformationProperty name={'Лицензировано в РФ под названием'} value={license_name_ru} /> : null}
                <InformationProperty name={'По-японски'} value={japanese.join(', ')} />
                <InformationProperty name={'По-английски'} value={english.join(', ')} />
                <InformationProperty name={'Другие название'} value={synonyms.join(', ')} />
            </div>
        </div>
    );
};

export default InformationManga;