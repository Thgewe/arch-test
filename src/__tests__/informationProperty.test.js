import {render, screen} from "@testing-library/react";
import InformationProperty from "../entities/InformationProperty/InformationProperty";

describe("InformationProperty.tsx", () => {
    it("InformationProperty is present", () => {
        render(<InformationProperty value={"Значение"} name={"Имя"}/>);
        expect(screen.getByText("Имя:")).toBeTruthy();
        expect(screen.getByText("Значение")).toBeTruthy();
    })
});