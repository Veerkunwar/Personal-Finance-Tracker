import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../feature/transaction/transactionSlice";
import { TransactionItem } from "./TransactionItem";


export const TransactionList=()=>{
    const transactions = useSelector((state)=>state.transaction);
    const filter = useSelector((state)=>state.filter.type);
    const dispatch = useDispatch();
    const filteredTxn = transactions.filter
    (
        (txn) => filter === "All" || txn.type === filter
    );

    return <> 
         <ul className="space-y-2">
        {filteredTxn.map((txn)=>(
            <TransactionItem
            key = {txn.id}
            transaction={txn}
            onDelete={()=>dispatch(deleteTransaction(txn.id))}
            />
        ))}
    </ul>
    </>
}