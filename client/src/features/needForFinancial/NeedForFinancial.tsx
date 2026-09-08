import React, { useReducer } from "react";
import { questions } from "./staticData/questionList";

const initialState = {
  cashFlow: "",
  IncomeAndExpenses: "",
  SpecificProgram: "",
  RegularForecastFinancialReports: "",
  Forecast: "",
  ImportantDecisions: "",
};

type FormState = typeof initialState;

type Action = {
  type: "SET_ANSWER";
  name: keyof FormState;
  value: string;
};

const handleFillForm = (state: FormState, { name, value, type }: Action) => {
  switch (type) {
    case "SET_ANSWER":
      return {
        ...state,
        [name]: value,
      };
      break;

    default:
      return state;

      break;
  }
};

const NeedForFinancial = () => {
  const [needHelpAnswer, dispatch] = useReducer(handleFillForm, initialState);

  const handleAnswer = ({
    field,
    value,
  }: {
    field: keyof FormState;
    value: string;
  }) => {
    dispatch({
      type: "SET_ANSWER",
      name: field,
      value,
    });
  };

  const handleSubmit = () => {
    console.log("Final Answers:", needHelpAnswer);
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen overflow-hidden bg-bg py-33.75 max-[850px]:py-22.5 "
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
        {/* Header */}
        <div className="mb-17.5 max-w-187.5">
          <span className="text-md uppercase tracking-[1.5px] text-primary">
            01 / بررسی وضعیت مالی
          </span>

          <h1 className="mt-5 text-[clamp(38px,5vw,66px)] text-white leading-[1.15] tracking-[-2px]">
            آیا کسب‌وکار شما به
            <span className="block text-primary">
              مدیر مالی عملیاتی نیاز دارد؟
            </span>
          </h1>

          <p className="mt-7 max-w-155 text-[15px] leading-[2.05] text-muted">
            به چند سؤال کوتاه پاسخ دهید تا وضعیت مالی و نیاز کسب‌وکار شما به
            مشاوره و مدیریت مالی عملیاتی بررسی شود.
          </p>
        </div>

        {/* Questions */}
        <div className="border-t border-line">
          {questions.map((item, index) => {
            console.log("question map: ", item);
            return (
              <article key={item.id} className="border-b border-line py-9.5">
                <div className="grid grid-cols-[90px_1fr] gap-7.5 max-[520px]:grid-cols-1 max-[520px]:gap-4">
                  {/* Number */}
                  <div className="pt-2 text-[11px] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="m-0 max-w-187.5 text-[22px] leading-[1.7] text-text max-[520px]:text-[18px]">
                      {item.title}
                    </h2>

                    {/* Options */}
                    <div className="mt-7 grid grid-cols-3 gap-3 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">
                      {item.options.map((option) => {
                        const isSelected =
                          needHelpAnswer[item.id as keyof FormState] ===
                          option.value;
                        console.log("isSelected", isSelected);
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              handleAnswer({
                                field: item.id as keyof FormState,
                                value: option.value,
                              })
                            }
                            className={`border px-5 py-4 text-right text-md transition ${
                              isSelected
                                ? "border-primary bg-primary text-bg"
                                : "border-line bg-bg-soft text-text-secondary hover:border-primary/60 hover:text-primary"
                            }`}
                          >
                            <span className="flex items-center justify-between gap-4">
                              {option.label}

                              <span
                                className={`h-2.5 w-2.5 rounded-full ${
                                  isSelected
                                    ? "bg-bg"
                                    : "bg-transparent border border-line"
                                }`}
                              />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Submit */}
        <div className="mt-13.75 flex justify-end max-[520px]:justify-stretch">
          <button
            type="button"
            onClick={handleSubmit}
            className="min-h-15 border-0 bg-primary px-7.5 py-3.75 font-bold text-bg transition hover:bg-primary-soft max-[520px]:w-full"
          >
            مشاهده نتیجه
            <span className="mr-3.5">←</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedForFinancial;
