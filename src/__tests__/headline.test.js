import {render, screen} from "@testing-library/react";
import Headline from "../entities/Headline/Headline";

describe("Headline.tsx", () => {
    it("Headline is present", () => {
        render(<Headline text={"Заголовок"} />);
        expect(screen.getByText("Заголовок")).toBeTruthy();
    })
});