import React from 'react';
import cl from "./animePage.module.css";
import {useParams} from "react-router-dom";
import {
    useGetAnimeByIdQuery,
    useGetAnimeRolesByIdQuery,
} from "../../shared/api/shikimoriAPI";
import PageHeadline from "../../entities/PageHeadline/PageHeadline";
import Description from "../../features/Description/Description";
import {BASE_API_IMAGE_SRC} from "../../shared/utils/constants";
import InformationAnime from "../../features/InformationBlock/InformationAnime";
import Studio from "../../features/Studio/Studio";
import CardGrid from "../../features/CharactersGrid/CharactersGrid";
import CommentsList from "../../features/Comment/CommentsList";

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
                <InformationAnime
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
                <CommentsList commentable_id={data.topic_id} />
            </div>
        </>
    );
};

export default AnimePage;