import { ItemsGrid } from "./ItemsGrid";
import { Cart } from "./Cart";
import dessertsJson from "../data.json";
import { useReducer, createContext, useRef } from "react";
import { ConfirmationDialog } from "./ConfirmationDialog";

export function Container() {
    const [state, dispatch] = useReducer(dessertReducer, Object.fromEntries(dessertsJson.map((dessert) => [dessert.category, {quantity: 0, price:dessert.price, name:dessert.name, imageUrl: dessert.image.thumbnail}])));
    const dialogRef = useRef(null);

    return (
        <DialogRefContext.Provider value={dialogRef}>
            <UpdateDessertsSelected.Provider value={dispatch}>
                <SelectedDesserts.Provider value={state}>
                    <div className="grid mb-8 gap-4 max-w-[90%] mx-auto md:grid-cols-[5fr_2fr]">
                        <ItemsGrid desserts={dessertsJson}></ItemsGrid>
                        <Cart></Cart>
                    </div>
                    <ConfirmationDialog></ConfirmationDialog>
                </SelectedDesserts.Provider>
            </UpdateDessertsSelected.Provider>
        </DialogRefContext.Provider>
    )
}

export const SelectedDesserts = createContext(null);
export const UpdateDessertsSelected = createContext(null);
export const DialogRefContext = createContext(null);
function dessertReducer(selectedDesserts, action) {
    switch (action.type) {
        case "added": {
            return {...selectedDesserts, [action.name]: {...selectedDesserts[action.name], quantity: Number([selectedDesserts[action.name].quantity]) + 1},}
        }
        case "removed": {
            return {...selectedDesserts, [action.name]: {...selectedDesserts[action.name], quantity: Number([selectedDesserts[action.name].quantity]) - 1},}
        }
        case "wiped": {
            return {...selectedDesserts, [action.name]: {...selectedDesserts[action.name], quantity: 0},}
        }
    }
}