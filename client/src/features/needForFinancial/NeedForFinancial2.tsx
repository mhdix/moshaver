import { useEffect, useReducer, useState } from "react";
import { questions } from "./staticData/questionList.ts";
import FinancialResultModal from "./components/Modal.tsx";

type AssessmentState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
};

type AssessmentAction =
  | {
      type: "ANSWER_QUESTION";
      payload: {
        questionId: string;
        answer: string;
      };
    }
  | {
      type: "NEXT_QUESTION";
    }
  | {
      type: "PREVIOUS_QUESTION";
    }
  | {
      type: "SHOW_RESULT";
    }
  | {
      type: "RESET_ANSWER";
    };

const initialState: AssessmentState = {
  currentQuestionIndex: 0,
  answers: {},
};

const assessmentReducer = (
  state: AssessmentState,
  action: AssessmentAction,
): AssessmentState => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };

    case "NEXT_QUESTION":
      if (state.currentQuestionIndex == 5) {
      }
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          questions.length - 1,
        ),
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };

    case "RESET_ANSWER":
      return initialState
      
    default:
      return state;
  }
};

const NeedForFinancial2 = () => {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);
  const [isResultOpen, setIsResultOpen] = useState(false);

  useEffect(() => {
    if (state.currentQuestionIndex == 5) {
      console.log(state.currentQuestionIndex);
      setIsResultOpen(true)
    } else {
      setIsResultOpen(false);
    }
  }, [state]);

  const currentQuestion = questions[state.currentQuestionIndex];

  const currentQuestionNumber = state.currentQuestionIndex + 1;

  const progress = (currentQuestionNumber / questions.length) * 100;

  return (
    <section
      id="assessment"
      className="border-t border-line bg-surface py-30 max-[850px]:py-20"
    >
      <FinancialResultModal
        isOpen={isResultOpen}
        needsFinancialManager={true}
        onClose={() => setIsResultOpen(false)}
        onRestart={() => {
          dispatch({type: 'RESET_ANSWER'})
        }}
      />
      <div className="mx-auto w-[min(800px,calc(100%-48px))]">
        {/* ================= HEADER ================= */}

        <div className="text-center">
          <span className="text-[10px] tracking-[2px] text-primary">
            BUSINESS ASSESSMENT
          </span>

          <h2 className="mt-5 text-[clamp(32px,5vw,52px)] font-bold leading-[1.3] tracking-[-1px]">
            آیا کسب‌وکار شما به
            <br />
            <span className="text-primary">مشاور مالی و عملیاتی</span> نیاز
            دارد؟
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-8 text-muted">
            با پاسخ دادن به چند سؤال کوتاه، وضعیت مالی و عملیاتی کسب‌وکار خود را
            بهتر ارزیابی کنید.
          </p>
        </div>

        {/* ================= ASSESSMENT CARD ================= */}

        <div className="mt-[65px] border border-line bg-card p-[clamp(24px,5vw,50px)]">
          {/* Progress Header */}

          <div className="flex items-center justify-between gap-5">
            <span className="text-xs text-muted">
              سؤال{" "}
              <strong className="text-primary">{currentQuestionNumber}</strong>{" "}
              از <strong className="text-text">{questions.length}</strong>
            </span>

            <span className="text-[10px] tracking-[1px] text-muted">
              FINANCIAL CHECK
            </span>
          </div>

          {/* Progress Bar */}

          <div className="mt-5 h-[3px] w-full bg-bg">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Question */}

          <div className="mt-[55px]">
            <span className="text-[10px] text-primary">
              QUESTION {currentQuestionNumber.toString().padStart(2, "0")}
            </span>

            <h3 className="mt-4 max-w-[650px] text-[clamp(23px,4vw,34px)] font-semibold leading-[1.6]">
              {currentQuestion.title}
            </h3>
          </div>

          {/* Options */}

          <div className="mt-[40px] grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected =
                state.answers[currentQuestion.id] === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: "ANSWER_QUESTION",
                      payload: {
                        questionId: currentQuestion.id,
                        answer: option.value,
                      },
                    });

                    dispatch({
                      type: "NEXT_QUESTION",
                    });
                  }}
                  className={`group flex w-full items-center justify-between border px-5 py-[18px] text-right transition duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-line bg-bg-soft hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`text-sm transition ${
                      isSelected
                        ? "text-text"
                        : "text-text-secondary group-hover:text-text"
                    }`}
                  >
                    {option.label}
                  </span>

                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full border text-[10px] transition ${
                      isSelected
                        ? "border-primary text-primary"
                        : "border-line text-muted group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer */}

          <div className="mt-12.5 flex items-center justify-between border-t border-line pt-6">
            <p className="text-[11px] text-muted">
              پاسخ‌های شما برای تحلیل وضعیت کسب‌وکار استفاده می‌شوند.
            </p>

            <span className="text-[10px] text-primary">
              {currentQuestionNumber.toString().padStart(2, "0")} /{" "}
              {questions.length.toString().padStart(2, "0")}
            </span>
          </div>

          {
            <button
              className="p-2 w-full bg-primary/75 mt-6"
              onClick={() => dispatch({ type: "SHOW_RESULT" })}
            >
              نمایش وضعیت
            </button>
          }
        </div>

        {/* Bottom Info */}

        <div className="mt-7 flex items-center justify-center gap-3 text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          ارزیابی کوتاه و اولیه برای شناخت بهتر وضعیت کسب‌وکار شما
        </div>
      </div>
    </section>
  );
};

export default NeedForFinancial2;
