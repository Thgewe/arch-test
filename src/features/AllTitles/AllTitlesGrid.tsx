import React from 'react';
import cl from "./allTitlesGrid.module.css";
import AllTitlesCard from "../../entities/AllTitlesCard/AllTitlesCard";
import IShortAnime from "../../shared/models/shikimoriAPI/IShortAnime";
import {IShortManga} from "../../shared/models/shikimoriAPI/IShortManga";

interface IAllTitlesGridProps {
    items: IShortAnime[] | IShortManga[],
    type: "animes" | "mangas",
}

const AllTitlesGrid = ({items, type}: IAllTitlesGridProps) => {
    return (
        <div className={cl.grid}>
            {items?.map((item) =>
                <AllTitlesCard
                    key={item.id}
                    id={item.id}
                    title={item.russian ? item.russian : item.name}
                    kind={item.kind}
                    aired_on={item.aired_on}
                    image={item.image.preview}
                    path={'/' + type + '/'}
                />
            )}
        </div>
    );
};

export default AllTitlesGrid;