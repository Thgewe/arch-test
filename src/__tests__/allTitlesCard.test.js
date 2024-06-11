import {render, screen} from "@testing-library/react";
import AllTitlesCard from "../entities/AllTitlesCard/AllTitlesCard";
import {BrowserRouter} from "react-router-dom";

describe("AllTitlesCard.tsx", () => {
    it("AllTitlesCard is present", () => {
        render(<BrowserRouter>
            <AllTitlesCard
                title={"One Piece"}
                id={"AllTitlesCardId"}
                aired_on={"2022-11-12"}
                image={""}
                kind={"tv"}
                path={"#someLink"}
            />
        </BrowserRouter>);
        expect(screen.getByText("One Piece")).toBeTruthy();
        expect(screen.getByText("TV Сериал")).toBeTruthy();
    })
});