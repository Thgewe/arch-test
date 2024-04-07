import React from 'react';
import NewsList from "../../components/NewsList/NewsList";
import INews from "../../models/shikimoriAPI/INews";
import Headline from "../../components/Headline/Headline";

const MainPage = () => {


    const mockList: INews[] = [
        {
            id: "1",
            topic_title: "Naruto",
            body: "Naruto boruto shit",
            created_at: "2024-04-06T19:34:30.070+03:00",
            title: "Naruto",
            html_footer: "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Cdiv class=\"c-video b-video unprocessed youtube  fixed\"\u003E\u003Ca class=\"video-link\" data-href=\"//youtube.com/embed/NlV3VpM2fNA\" href=\"https://youtu.be/NlV3VpM2fNA\"\u003E\u003Cimg data-id=\"67073\" src=\"//img.youtube.com/vi/NlV3VpM2fNA/hqdefault.jpg\"\u003E\u003C/a\u003E\u003Cspan class=\"name\" title=\"Тизер\"\u003EТизер\u003C/span\u003E\u003Cspan class=\"marker\"\u003Eyoutube\u003C/span\u003E\u003C/div\u003E\u003C/div\u003E",
        },
        {
            id: "2",
            topic_title: "Overlord",
            body: "Naruto boruto shit",
            created_at: "2024-04-06T19:34:30.070+03:00",
            title: "Overlord",
            html_footer: "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Cdiv class=\"c-video b-video unprocessed youtube  fixed\"\u003E\u003Ca class=\"video-link\" data-href=\"//youtube.com/embed/NlV3VpM2fNA\" href=\"https://youtu.be/NlV3VpM2fNA\"\u003E\u003Cimg data-id=\"67073\" src=\"//img.youtube.com/vi/NlV3VpM2fNA/hqdefault.jpg\"\u003E\u003C/a\u003E\u003Cspan class=\"name\" title=\"Тизер\"\u003EТизер\u003C/span\u003E\u003Cspan class=\"marker\"\u003Eyoutube\u003C/span\u003E\u003C/div\u003E\u003C/div\u003E",
        },
        {
            id: "3",
            topic_title: "Attack on titan Attack on titan Attack on titan Attack on titan Attack on titan Attack on titan",
            body: "Naruto boruto shit",
            created_at: "2024-04-06T19:34:30.070+03:00",
            title: "Attack on titan",
            html_footer: "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Cdiv class=\"c-video b-video unprocessed youtube  fixed\"\u003E\u003Ca class=\"video-link\" data-href=\"//youtube.com/embed/NlV3VpM2fNA\" href=\"https://youtu.be/NlV3VpM2fNA\"\u003E\u003Cimg data-id=\"67073\" src=\"//img.youtube.com/vi/NlV3VpM2fNA/hqdefault.jpg\"\u003E\u003C/a\u003E\u003Cspan class=\"name\" title=\"Тизер\"\u003EТизер\u003C/span\u003E\u003Cspan class=\"marker\"\u003Eyoutube\u003C/span\u003E\u003C/div\u003E\u003C/div\u003E",
        },
        {
            id: "4",
            topic_title: "Attack on titan Attack on titan Attack on titan Attack on titan Attack on titan Attack on titan",
            body: "Naruto boruto shit",
            created_at: "2024-04-06T19:34:30.070+03:00",
            title: "Attack on titan",
            html_footer: "\u003Cdiv class=\"b-shiki_wall to-process\" data-dynamic=\"wall\"\u003E\u003Ca href=\"https://desu.shikimori.one/system/user_images/original/210569/2572838.jpg\" class=\"b-image unprocessed\"\u003E\u003Cimg src=\"https://desu.shikimori.one/system/user_images/preview/210569/2572838.jpg\"\u003E\u003C/a\u003E\u003C/div\u003E",
        },
    ];

    return (
        <>
            <section>
                <Headline text={"Новости"} color={"orange"}/>
                <NewsList list={mockList}/>
            </section>
        </>
    );
};

export default MainPage;