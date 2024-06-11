import {render, screen} from "@testing-library/react";
import PageHeadline from "../entities/PageHeadline/PageHeadline";
import {BrowserRouter} from "react-router-dom";

describe("PageHeadline.tsx", () => {
    it("PageHeadline is present correctly with two languages", () => {
        render(<BrowserRouter>
            <PageHeadline titleEn={"Naruto"} titleRu={"Наруто"}/>
        </BrowserRouter>);
        expect(screen.getByText("/")).toBeTruthy();
    });
    it("PageHeadline is present correctly with russian language", () => {
        render(<BrowserRouter>
            <PageHeadline titleRu={"Наруто"}/>
        </BrowserRouter>);
        expect(screen.getByText("Наруто")).toBeTruthy();
    });
});