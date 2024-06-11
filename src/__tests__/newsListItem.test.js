import {render, screen} from "@testing-library/react";
import NewsListItem from "../entities/NewsListItem/NewsListItem";
import {BrowserRouter} from "react-router-dom";

describe("NewsListItem.tsx", () => {
    it("NewsListItem is present", () => {
        render(<BrowserRouter>
            <NewsListItem item={{
                id: "ID",
                created_at: "2022-12-12",
                topic_title: "Название новости",
                body: "asd",
                html_footer: "asd",
                title: "asd",
                user: null,
                comments_count: 0,
                html_body: "asd",
                linked: null,
            }} />
        </BrowserRouter>);
        expect(screen.getByText("Название новости")).toBeTruthy();
    })
})