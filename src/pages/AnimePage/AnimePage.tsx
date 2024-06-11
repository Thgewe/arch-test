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
    const anime = useGetAnimeByIdQuery(id);
    const roles = useGetAnimeRolesByIdQuery(id);

    if (anime.isLoading) return <div>Loading...</div>
    if (anime.isError) return <div>Error</div>
    if (!anime.currentData) return <div>Something went wrong</div>

    return (
        <>
            <PageHeadline titleRu={anime.currentData.russian} titleEn={anime.currentData.name}/>
            <div className={cl.main}>
                <div className={cl.mainImage}>
                    <img src={BASE_API_IMAGE_SRC + anime.currentData.image.original} alt={anime.currentData.name}/>
                </div>
                <InformationAnime
                    key={anime.currentData.id}
                    kind={anime.currentData.kind}
                    status={anime.currentData.status}
                    duration={anime.currentData.duration}
                    episodes={anime.currentData.episodes_aired}
                    genres={anime.currentData.genres}
                    rating={anime.currentData.rating}
                    licensors={anime.currentData.licensors}
                    license_name_ru={anime.currentData.license_name_ru}
                    japanese={anime.currentData.japanese}
                    english={anime.currentData.english}
                    synonyms={anime.currentData.synonyms}
                    aired_on={anime.currentData.aired_on}
                    next_episode_at={anime.currentData.next_episode_at}
                />
                <Studio studios={anime.currentData.studios} />
                <div className={cl.descr}>
                    <Description description={anime.currentData.description} />
                </div>
                <CardGrid
                    isLoading={roles.isLoading}
                    items={roles.data}
                    category={"characters"}
                    blockName={"Главные герои"}
                />
                <CommentsList commentable_id={anime.currentData.topic_id} />
            </div>
        </>
    );
};

export default AnimePage;