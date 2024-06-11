import {render, screen} from "@testing-library/react";
import Topic from "../entities/Topic/Topic";

describe("Topic.tsx", () => {
    it("Topic is present", () => {
        render(<Topic text={"НОВОСТИ"} />);
        expect(screen.getByText("НОВОСТИ")).toBeTruthy();
    });
});