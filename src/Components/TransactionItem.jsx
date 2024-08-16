export const TransactionItem=({transaction,onDelete})=>{
  return (
  <li className={`flex item-center justify-between p-2 ${transaction.type ==="expense" ? "bg-red-400" : "bg-lime-500"} rounded`}>
      <span>{transaction.amount}</span>
      <span>{transaction.description}</span>
      <button onClick={onDelete} className="p-1 text-white bg-black-600 rounded">Delete</button>
  </li>
  )
}