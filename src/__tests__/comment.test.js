import {render, screen} from "@testing-library/react";
import Comment from "../entities/Comment/Comment";

describe("Comment.tsx", () => {
    it("Comment is present", () => {
        render(<Comment
            body={"Какой-то комментарий для теста"}
            commentable_id={"someCommentTestId"}
            created_at={"2022-13-11"}
            reply_to={{
                id: "some",
                nickname: "Склифосовский",
            }}
            user={{
                id: "mainUser",
                nickname: "@Мессмер",
                avatar: "#",
                image: "#",
                last_online_at: "2023-12-12",
            }}
            updated_at={"2022-13-11"}
        />);
        expect(screen.getByText("Какой-то комментарий для теста")).toBeTruthy();
        expect(screen.getByText("@Мессмер")).toBeTruthy();
    })
});