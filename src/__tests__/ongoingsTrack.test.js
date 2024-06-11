import {render, screen} from "@testing-library/react";
import OngoingsTrack from "../entities/OngoingsTrack/OngoingsTrack";
import {BrowserRouter} from "react-router-dom";

describe("OngoingsTrack.tsx", () => {
    it("OngoingsTrack null list render is correct", () => {
        render(<OngoingsTrack list={null} />);
        expect(screen.getByText("Something went wrong")).toBeTruthy();
    });
    it("OngoingsTrack render is correct", () => {
        render(<BrowserRouter>
            <OngoingsTrack list={[{
                name: "One Piece",
                id: "someId",
                image: {
                    preview: "#",
                }
            }, {
                name: "Naruto",
                id: "someId1",
                image: {
                    preview: "#",
                }
            }, {
                name: "Bleach",
                id: "someId2",
                image: {
                    preview: "#",
                }
            }]} />
        </BrowserRouter>);
        expect(screen.getByText("One Piece")).toBeTruthy();
        expect(screen.getByText("Naruto")).toBeTruthy();
        expect(screen.getByText("Bleach")).toBeTruthy();
    });
});