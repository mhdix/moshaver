import { memo } from "react";

type FinancialDetailsProps = {
  calculateProfit: () => void;
};

const FinancialDetails = memo(({ calculateProfit }: FinancialDetailsProps) => {
  console.log("❌FinancialDetails Render");

  return (
    <div>
      <p>جزئیات مالی</p>
      <button className="text-white" onClick={calculateProfit}>
        mohasebe
      </button>
    </div>
  );
});

export default FinancialDetails;
