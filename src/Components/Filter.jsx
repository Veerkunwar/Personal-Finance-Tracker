import {useDispatch } from "react-redux"
import { setFilter } from "../feature/filter/filterSlice"

export const Filter=()=>{
    const dispatch = useDispatch()
    const handleFilter=(filterType)=>{
        dispatch(setFilter(filterType))
    }
    return(
    <>
    <div className="flex flex-wrap justify-center mb-4">
  <button onClick={() => handleFilter("All")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
    All
  </button>
  <button onClick={() => handleFilter("income")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
    Income
  </button>
  <button onClick={() => handleFilter("expense")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
    Expense
  </button>
</div>
    </>
    )
}