import { useContext } from "react";
import { SelectedDesserts } from "./Container";

export function Cart() {
    const currentDesserts = useContext(SelectedDesserts);
    const filteredDesserts = Object.values(currentDesserts).filter((dessert) => dessert.quantity > 0);
    const isEmpty = filteredDesserts.length === 0;
    const itemsCount = filteredDesserts.reduce((res, item) => res + item.quantity, 0);
    
    return (
        <div className="grid gap-4 p-4 bg-white rounded self-start">
            <h2 className="text-(--color-red) font-bold text-2xl">Your Cart ({itemsCount})</h2>
            {isEmpty && <img src="/assets/images/illustration-empty-cart.svg" alt="" className="justify-self-center" /> }
            {isEmpty && <p className="text-center text-(--color-rose400)">Your added items will appear here</p> }
            {filteredDesserts.map((dessert, idx) => {
                return (
                    <div key={idx} className="flex justify-between items-center">
                        <div className="dessertType">
                            <h3 className="font-bold">{dessert.name}</h3>
                            <p className="flex gap-4"><span className="text-(--color-red)">{dessert.quantity}x</span><span className="text-(--color-rose400)">@{dessert.price.toFixed(2)}</span><span className="text-(--color-rose500)">${(dessert.price * dessert.quantity).toFixed(2)}</span></p>
                        </div>
                        <div className="p-0.5 rounded-[50%] border-2 border-(--color-rose400)"><img src="/assets/images/icon-remove-item.svg" alt="" /></div>
                    </div>
                )
            })}
            {!isEmpty && 
            <div className="flex justify-between items-center my-4">
                <p>Order Total</p>
                <p className="font-bold text-2xl">${filteredDesserts.reduce((res, item) => (res + (Number(item.quantity) * Number(item.price))), 0).toFixed(2)}</p>
            </div>
            }
        </div>
    )
}