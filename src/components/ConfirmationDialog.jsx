import { useContext } from "react";
import { SelectedDesserts } from "./Container";
import { DialogRefContext } from "./Container";
import { UpdateDessertsSelected } from "./Container";

export function ConfirmationDialog() {
    const dispatch = useContext(UpdateDessertsSelected);
    const dialogRef = useContext(DialogRefContext);
    const currentDesserts = useContext(SelectedDesserts);
    const filteredDesserts = Object.values(currentDesserts).filter((dessert) => dessert.quantity > 0);
    
    return (
        <dialog ref={dialogRef} className="md:m-auto inset-0 md:w-[60ch] md:max-h-[75%] gap-4 open:grid rounded-2xl bg-white p-4 backdrop:bg-black/40 max-md:w-screen">
            <img src="/assets/images/icon-order-confirmed.svg" alt="" />
            <h2 className="font-bold text-3xl">Order <br className="md:hidden"/> Confirmed</h2>
            <p className="text-(--color-rose500) text-sm">We hope you enjoy your food!</p>
            <div className="p-4 bg-(--color-rose100) rounded">
                {filteredDesserts.map((dessert, idx) => {
                return (
                    <div key={idx} className="flex justify-between items-center not-last:border-b-2 border-(--color-rose100) pb-4">
                        <div className="dessertType flex gap-4 items-center">
                            <img src={currentDesserts[Object.keys(currentDesserts).filter((curr) => dessert.name === currentDesserts[curr].name)[0]].imageUrl} alt="" className="rounded size-12" />
                            <div>
                                <h3 className="font-bold text-nowrap text-ellipsis overflow-hidden max-md:max-w-[20ch]">{dessert.name}</h3>
                                <p className="flex gap-4"><span className="text-(--color-red)">{dessert.quantity}x</span><span className="text-(--color-rose400)">@{dessert.price.toFixed(2)}</span></p>
                            </div>
                        </div>
                        <div><span className="text-(--color-rose900)">${(dessert.price * dessert.quantity).toFixed(2)}</span></div>
                    </div>
                )
                })}
                <div className="flex justify-between items-center my-4">
                    <p>Order Total</p>
                    <p className="font-bold text-2xl">${filteredDesserts.reduce((res, item) => (res + (Number(item.quantity) * Number(item.price))), 0).toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => Object.keys(currentDesserts).forEach((dessertToWipe) => dispatch({type: "wiped", name: dessertToWipe})) || dialogRef.current.close()} className="hover:cursor-pointer text-center p-3 rounded-full bg-(--color-red) text-white">Start New Order</button>
        </dialog>
    )
}