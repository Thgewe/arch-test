import React from 'react';
import cl from "./mangaPage.module.css";
import {useParams} from "react-router-dom";
import {useGetMangaByIdQuery, useGetMangaRolesByIdQuery} from "../../shared/api/shikimoriAPI";
import PageHeadline from "../../entities/PageHeadline/PageHeadline";
import {BASE_API_IMAGE_SRC} from "../../shared/utils/constants";
import Description from "../../features/Description/Description";
import CardGrid from "../../features/CharactersGrid/CharactersGrid";
import InformationManga from "../../features/InformationBlock/InformationManga";
import CommentsList from "../../features/Comment/CommentsList";

const MangaPage = () => {

    const { id } = useParams<{id: string}>() as {id: string};
    const { data, isLoading, isError } = useGetMangaByIdQuery(id);
    const roles = useGetMangaRolesByIdQuery(id);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <>
            <PageHeadline titleRu={data.russian} titleEn={data.name}/>
            <div className={cl.main}>
                <div className={cl.mainImage}>
                    <img src={BASE_API_IMAGE_SRC + data.image.original} alt={data.name}/>
                </div>
                <InformationManga
                    kind={data.kind}
                    volumes={data.volumes}
                    chapters={data.chapters}
                    licensors={data.licensors}
                    status={data.status}
                    japanese={data.japanese}
                    english={data.english}
                    synonyms={data.synonyms}
                    aired_on={data.aired_on}
                    genres={data.genres}
                    license_name_ru={data.license_name_ru}
                />
                <div className={cl.descr}>
                    <Description description={data.description} />
                </div>
                <CardGrid
                    isLoading={isLoading}
                    items={roles.data}
                    category={"characters"}
                    blockName={"Главные герои"}
                />
                <CommentsList commentable_id={data.topic_id} />
            </div>
        </>
    );
};

export default MangaPage;