import { useSelector } from "react-redux";

export const Summary = () => {
  const transactions = useSelector((state) => state.transaction);
  console.log(transactions);

  let totalIncome = 0;
  let totalExpense = 0;
  transactions.forEach((ele) => {
    if (ele.type === 'income') {
      totalIncome += ele.amount;
    } else {
      totalExpense += ele.amount;
    }
  });
  let Balance = totalIncome - totalExpense;

  return (
    <div className="flex flex-wrap justify-center mb-4">
      <div className="bg-green-100 p-4 rounded-lg shadow-md w-40 mr-9">
        <div className="text-lg font-bold">Income</div>
        <span className="text-2xl">{totalIncome}</span>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow-md w-40 mr-9">
        <div className="text-lg font-bold">Expense</div>
        <span className="text-2xl">{totalExpense}</span>
      </div>
      <div className="bg-orange-100 p-4 rounded-lg shadow-md w-40">
        <div className="text-lg font-bold">Balance</div>
        <span className="text-2xl">{Balance}</span>
      </div>
    </div>
  );
};