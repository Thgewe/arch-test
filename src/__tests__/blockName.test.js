import {render, screen} from "@testing-library/react";
import BlockName from "../entities/BlockName/BlockName";

describe("BlockName.tsx", () => {
    it("BlockName is present", () => {
        render(<>
            <BlockName type={"news"}/>
            <BlockName type={"more news"}/>
            <BlockName type={"comments"}/>
            <BlockName type={"filter"} text={"ОНГОИНГ"}/>
            <BlockName type={"onTheScreens"}/>
            <BlockName type={"default"} text={"КАКОЙ ТО ТЕКСТ"}/>
        </>);
        expect(screen.getByText("НОВОСТИ")).toBeTruthy();
        expect(screen.getByText("ЕЩЕ НОВОСТИ")).toBeTruthy();
        expect(screen.getByText("КОММЕНТАРИИ")).toBeTruthy();
        expect(screen.getByText("ОНГОИНГ")).toBeTruthy();
        expect(screen.getByText("СЕЙЧАС НА ЭКРАНАХ")).toBeTruthy();
        expect(screen.getByText("КАКОЙ ТО ТЕКСТ")).toBeTruthy();
    })
});