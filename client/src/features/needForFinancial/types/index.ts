
export type AnswerValue = "yes" | "sometimes" | "no";

export type QuestionOption = {
    label: string;
    value: AnswerValue;
    score: number;
};

export type Question = {
    id: string;
    title: string;
    options: QuestionOption[];
};


// =========================
// User Answers
// =========================

export type Answers = Record<string, AnswerValue>;


// =========================
// Assessment State
// =========================

export type AssessmentState = {
    started: boolean;
    currentQuestion: number;
    answers: Answers;
    isFinished: boolean;
};


// =========================
// Reducer Actions
// =========================

export type AssessmentAction =
    | {
        type: "START";
    }
    | {
        type: "SELECT_ANSWER";
        payload: {
            questionId: string;
            answer: AnswerValue;
        };
    }
    | {
        type: "NEXT_QUESTION";
    }
    | {
        type: "PREVIOUS_QUESTION";
    }
    | {
        type: "FINISH";
    }
    | {
        type: "RESET";
    };


// =========================
// Final Analysis
// =========================

export type AssessmentLevel = "low" | "medium" | "high";

export type AssessmentResult = {
    score: number;
    level: AssessmentLevel;
    title: string;
    description: string;
    problems: string[];
    recommendedServices: string[];
};