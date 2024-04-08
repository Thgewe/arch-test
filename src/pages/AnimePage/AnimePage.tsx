import React from 'react';
import cl from "./animePage.module.css";
import {useParams} from "react-router-dom";
import {useGetAnimeByIdQuery, useGetAnimeRolesByIdQuery} from "../../services/shikimoriAPI";
import PageHeadline from "../../components/PageHeadline/PageHeadline";
import Description from "../../components/Description/Description";
import {BASE_API_IMAGE_SRC} from "../../utils/constants";
import Information from "../../components/Information/Information";
import Studio from "../../components/Studio/Studio";
import CardGrid from "../../components/CardGrid/CardGrid";

// TODO: comments

const AnimePage = () => {

    const { id } = useParams<{id: string}>() as {id: string};
    const { data, isLoading, isError } = useGetAnimeByIdQuery(id);
    const roles = useGetAnimeRolesByIdQuery(id);

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
                <Information
                    key={data.id}
                    kind={data.kind}
                    status={data.status}
                    duration={data.duration}
                    episodes={data.episodes_aired}
                    genres={data.genres}
                    rating={data.rating}
                    licensors={data.licensors}
                    license_name_ru={data.license_name_ru}
                    japanese={data.japanese}
                    english={data.english}
                    synonyms={data.synonyms}
                    aired_on={data.aired_on}
                    next_episode_at={data.next_episode_at}
                />
                <Studio studios={data.studios} />
                <div className={cl.descr}>
                    <Description description={data.description} />
                </div>
                <CardGrid
                    isLoading={isLoading}
                    items={roles.data}
                    category={"characters"}
                    blockName={"Главные герои"}
                />
            </div>
        </>
    );
};

export default AnimePage;