import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouteMatch } from "react-router-dom";
import Question_card, {
    CardPROPS,
} from "@components/Question_Card/question_card";
import { CardPROPS as QuestionSet } from "@components/Quiz_Card";
import {
    getAllQuestion,
    getQuestionsByQuestionSet,
    addQuestion,
    removeQuestion,
    getQuestionSet,
    putQuestionSet,
    Question,
    getAllQuestionSet,
} from "../../database";

import {Button} from "@components/button";
import { useAsync, useAsyncPreValue } from "@common/customHook";
import { QuestionEditor ,QuestionCard} from "@components/QuestionCard";

type PROPS = {
    t: string;
    [k: string]: unknown;
};

export interface MatchParams {
    id: string;
}



const QuizEditorV2: React.FC<PROPS> = (props) => {
    return (
    <div className="flex justify-items-start items-center flex-col w-full h-full">
            <div className="flex-1 w-full overflow-hidden">
                <QuestionEditor question={{
                    _id: "123",
                    img: "",
                    title: "test",
                    answers: [{ isCorrect: true, text: "123aaaaaaaaaaaaaaaaaa", id: 0 }, { isCorrect: false, text: "345", id: 1 }],
                    create: "1-1-1",
                    edit: "1-1-1",
                    gameMode: ""
                } as Question} onSave={function (value: Question): void {
                    throw new Error("Function not implemented.");
                } } onBack={function (): void {
                    throw new Error("Function not implemented.");
                } } onAddAnswer={function (): void {
                    throw new Error("Function not implemented.");
                } } onDelete={function (): void {
                    throw new Error("Function not implemented.");
                } } />
            </div>
    </div>
        )
};

export default QuizEditorV2;
