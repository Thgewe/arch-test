import React, {useEffect, useRef, useState} from 'react';
import {useGetAnimeListQuery} from "../../services/shikimoriAPI";
import cl from "./allAnimePage.module.css";
import debounce from "../../utils/debounce";
import AllTitlesGrid from "../../components/AllTitlesGrid/AllTitlesGrid";
import Filter from "../../components/Filter/Filter";
import {IFilterParams} from "../../models/shikimoriAPI/IFilterParams";
import {ANIMES_PER_PAGE} from "../../utils/constants";

const AllAnimePage = () => {

    const [filterParams, setFilterParams] = useState<IFilterParams>({
        page: 1,
        limit: ANIMES_PER_PAGE,
        order: "ranked",
        genre: "",
        kind: "",
        rating: "",
        score: "",
        season: "",
        status: "",
    });
    const { data, isLoading, isFetching, isError } = useGetAnimeListQuery(filterParams);

    const prevPage = useRef<number>(filterParams.page);
    const gridRef = useRef<HTMLDivElement>(null);
    const scrollHandler = debounce((isFetch: boolean) => {
        if (gridRef.current && gridRef.current.clientHeight
            - document.documentElement.clientHeight
            - document.documentElement.scrollTop
            < document.documentElement.clientHeight + 100
            && !isFetch
            && data!.length === prevPage.current * ANIMES_PER_PAGE)
        {
            setFilterParams(prevState => ({...prevState, page: prevState.page + 1}))
        }
    }, 200)

    useEffect(() => {
        window.addEventListener("scroll", () => scrollHandler(isFetching));
        return () => {
            window.removeEventListener("scroll", () => scrollHandler(isFetching));
        }
    }, [isFetching])

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>error</div>
    if (!data) return <div>Что-то пошло не так</div>

    const changeFilter = (params: IFilterParams) => {
        setFilterParams(params);
    }

    return (
        <div className={cl.page} ref={gridRef}>
            <div className={cl.descr}>
                <h1>Аниме</h1>
                <p>
                    На этой странице отображен список аниме.<br/>
                    Используйте фильтры для поиска подходящего вам или воспользуйтесь поиском.
                </p>
            </div>
            <div className={cl.track}>
                <section className={cl.list}>
                    <AllTitlesGrid
                        items={data}
                        type={"animes"}
                    />
                    {isFetching && <div className={cl.loading}>Загрузка...</div>}
                </section>
                <aside className={cl.filter}>
                    {/*<Filter filter={filterParams} changeFilter={setFilterParams} type={"animes"} />*/}
                    <Filter filter={filterParams} changeFilter={changeFilter} type={"animes"} />
                </aside>
            </div>
        </div>
    );
};

export default AllAnimePage;