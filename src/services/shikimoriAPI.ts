import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import INews from "../models/shikimoriAPI/INews";
import IShortAnime from "../models/shikimoriAPI/IShortAnime";
import {IAnime} from "../models/shikimoriAPI/IAnime";
import {IRoles} from "../models/shikimoriAPI/IRoles";

export const shikimoriApi = createApi({
    reducerPath: "shikimoriApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://shikimori.one/api"}),
    endpoints: (builder) => ({
        // The API returns "limit + 1" items if there are pages left
        getNewsList: builder.query<INews[], number | void>({
            query: (page = 1) => ({url: "topics", params: {forum: "news", limit: 18, page}}),
            serializeQueryArgs: ({ endpointName }) => endpointName,
            transformResponse: (news: INews[]) => {
                news.pop();
                return news;
            },
            merge: (currentCacheData, newData) => {
                currentCacheData.push(...newData);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
        getNewsItemById: builder.query<INews, string>({
            query: (id) => ({url: `topics/${id}`, params: {forum: "news"}})
        }),
        getAnimeListMainOngoing: builder.query<IShortAnime[], void>({
            query: () => ({url: "animes", params: {status: "ongoing", order: "popularity", limit: 8}})
        }),
        getAnimeById: builder.query<IAnime, string>({
            query: (id) => ({
                url: `animes/${id}`
            })
        }),
        getAnimeRolesById: builder.query<IRoles[], string>({
            query: (id) => ({
                url: `animes/${id}/roles`
            })
        }),
    })
});

export const {
    useGetNewsListQuery,
    useGetNewsItemByIdQuery,
    useGetAnimeListMainOngoingQuery,
    useGetAnimeByIdQuery,
    useGetAnimeRolesByIdQuery,
} = shikimoriApi;