import React, {useMemo} from 'react';
import cl from "./cardGrid.module.css";
import BlockName from "../BlockName/BlockName";
import {Link} from "react-router-dom";
import {BASE_API_IMAGE_SRC} from "../../utils/constants";
import {IRoles} from "../../models/shikimoriAPI/IRoles";

interface IMainChars {
    id: string,
    name: string,
    image: string
}

interface ICardGridProps {
    isLoading: boolean,
    items: IRoles[] | undefined,
    category: string,
    blockName: string,
}

// TODO: loading handler

const CardGrid = ({
isLoading,
items,
category,
blockName,
}: ICardGridProps) => {
    const mainChars: IMainChars[] = useMemo(() => {
        const arr: IMainChars[] = []
        if (items) {
            items.forEach((role) => {
                if (role.roles.includes("Main")) arr.push({
                        id: role.character!.id,
                        name: role.character!.russian,
                        image: role.character!.image.preview,
                    })
            })
        }

        return arr;
    }, [items])

    if (isLoading) return <div className={cl.block}>
        <BlockName type={'default'} text={blockName} />
        <div>Loading...</div>
    </div>

    return (
        <div className={cl.block}>
            <BlockName type={'default'} text={blockName} />
            {mainChars.length === 0 && <div>Нет информации</div>}
            <div className={cl.grid}>
                {mainChars.map((item) =>
                    <Link className={cl.card} key={item.id} to={'/' + category + '/' + item.id}>
                        <img src={BASE_API_IMAGE_SRC + item.image} alt={item.name}/>
                        <div className={cl.name}>{item.name}</div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CardGrid;