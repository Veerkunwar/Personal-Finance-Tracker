import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addTransaction } from "../feature/transaction/transactionSlice";


export const AddTransaction = () => {
    const [description,setDescription] = useState("");
    const [amount , setAmount] = useState("");
    const [type,setType] = useState("income");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim()){
            dispatch(
                addTransaction({
                    id:Date.now(),
                    description,
                    type,
                    amount: parseFloat(amount),
                })
            );
            setAmount("");
            setDescription("");
        }
    }
    
    useEffect(()=>{
        localStorage.setItem('amount',JSON.stringify(amount))
    },[amount])

    useEffect(()=>{
        localStorage.setItem('description',JSON.stringify(description))
    },[description])

    return(
        <form onSubmit={handleSubmit} className="text-center" id="form" >
            <input name="input1" type="text" required value={description} onChange={(e)=> setDescription(e.target.value)} className="p-2 mr-2 border-rounded" placeholder="Add Note"/>
            <input name="input2" type="number" required value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter Amount" className="p-2 mr-2 border-rounded" />
            <select name="select1" value={type} onChange={(e)=>setType(e.target.value)}  className="p-2 mr-2 border-rounded">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button type="submit" className="p-2 text-black bg-purple-500 m-2"><h3>Add Transaction</h3></button>
        </form>
    );
}