import { useMemo, useState } from "react";

function FinancialHealth() {
  const [sales, setSales] = useState(0);
  const [costs, setCosts] = useState(0);

  const profit = useMemo(() => {
    console.log("محاسبه سود");
    const persentageFee = sales - costs;
    return persentageFee;
  }, [sales, costs]);

  const profitManage = useMemo(() => {
    console.log("محاسبه حاشیه سود");

    return (profit / sales) * 100;
    
  }, [profit, sales]);


  return (
    <section className="border-t border-line py-[100px]">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
        <span className="text-primary">06 / تحلیل مالی</span>

        <h2 className="mt-5 text-[clamp(38px,5vw,66px)]">
          سلامت مالی <span className="text-primary">کسب‌وکار</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5">
          <input
            type="number"
            value={costs}
            onChange={(e) => setCosts(Number(e.target.value))}
            className="border border-line bg-transparent p-4"
            placeholder="هزینه"
          />
          <input
            type="number"
            value={sales}
            onChange={(e) => setSales(Number(e.target.value))}
            className="border border-line bg-transparent p-4"
            placeholder="فروش"
          />
        </div>
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="mt-5 border border-white px-4 py-2"
        >
          جزئیات
        </button>
        <div className="mt-10 border border-line p-6">
          <p>هزینه: {costs.toLocaleString()}</p>
          <p>فروش: {sales.toLocaleString()}</p>
          <p>سود: {profit.toLocaleString()}</p>
          <p>حاشیه سود: {profitManage.toLocaleString()}%</p>
        </div>
      </div>
    </section>
  );
}

export default FinancialHealth;
