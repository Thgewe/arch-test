import React from 'react';
import {useParams} from "react-router-dom";
import {useGetNewsItemByIdQuery} from "../../services/shikimoriAPI";

// TODO: error, loading, no data handling

const NewsPage = () => {
    const { id } = useParams<{id: string}>() as {id: string}
    const { data, isLoading, isError } = useGetNewsItemByIdQuery(id);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <div>
            {data.body}
        </div>
    );
};

export default NewsPage;