import { useContext } from "react"
import { UpdateDessertsSelected } from "./Container"

export function AddButton({ totalCount, name }) {
    const dispatch = useContext(UpdateDessertsSelected);
    
    function handleClick(e) {
        if (totalCount == 0) {
            dispatch({type: "added", name})
        }
        else {
            let increment = e.target.closest(".increment");

            if (increment) dispatch({type: "added", name})
            else dispatch({type: "removed", name})
        }
    }
    
    if (totalCount == 0) {
        return (
            <button className="py-2 px-4 flex gap-2 border-1 border-black justify-center rounded-full absolute bg-white bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] hover:cursor-pointer" onClick={handleClick}>
                <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                <p className="text-nowrap">Add to Cart</p>
            </button>
        )
    }
    else {
        return (
            <button className="rounded-full p-2 flex justify-around text-white bg-(--color-red) gap-10 absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] hover:cursor-pointer">
                <div onClick={handleClick} className="p-2 border-1 border-white rounded-[50%] grid place-items-center increment"><img src="/assets/images/icon-increment-quantity.svg" alt="" className="size-3"/></div>
                {totalCount}
                <div onClick={handleClick} className="p-2 border-1 border-white rounded-[50%] grid place-items-center decrement"><img src="/assets/images/icon-decrement-quantity.svg" alt="" className="size-3"/></div>
            </button>
        )
    }
}