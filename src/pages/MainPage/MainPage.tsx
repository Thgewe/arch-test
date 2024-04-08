import React, {useState, useRef, useEffect} from 'react';
import NewsList from "../../components/NewsList/NewsList";
import Headline from "../../components/Headline/Headline";
import {useGetAnimeListMainOngoingQuery, useGetNewsListQuery} from "../../services/shikimoriAPI";
import debounce from "../../utils/debounce";
import OngoingsTrack from "../../components/OngoingsTrack/OngoingsTrack";

// TODO: error, loading, no data handling

const MainPage = () => {

    const mainPageRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isError, isFetching } = useGetNewsListQuery(page);
    const animeList = useGetAnimeListMainOngoingQuery();

    const scrollHandler = debounce((isFetch: boolean) => {
        if (mainPageRef.current && mainPageRef.current!.clientHeight
            - document.documentElement.clientHeight
            - document.documentElement.scrollTop
            < document.documentElement.clientHeight + 100 && !isFetch) {
            setPage((prevState) => prevState + 1);
        }
    }, 200)

    useEffect(() => {
        window.addEventListener('scroll', () => scrollHandler(isFetching));

        return () => {
            window.removeEventListener('scroll', () => scrollHandler(isFetching));
        }
    }, [isFetching])

    if (isLoading || animeList.isLoading) return <div>Loading...</div>
    if (isError || animeList.isError) return <div>Error</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <>
            <section ref={mainPageRef}>
                <Headline text={"Сейчас на экранах"}/>
                <OngoingsTrack list={animeList.data}/>
            </section>
            <section ref={mainPageRef}>
                <Headline text={"Новости"} color={"orange"}/>
                <NewsList list={data}/>
                {isFetching && <div>Loading...</div>}
                {isFetching && <button>Загрузить еще</button>}
            </section>
        </>
    );
};

export default MainPage;