import { memo } from "react";

const FinancialDetails = memo(({ calculateProfit }) => {
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
