import { AddButton } from "./AddButton";
import { useContext } from "react";
import { SelectedDesserts } from "./Container";

export function ItemCard({ imgUrls, name, category, price}) {
    const selectedDesserts = useContext(SelectedDesserts);
    const selectedCount = selectedDesserts[category].quantity;
    const selected = selectedCount > 0 ? " border-(--color-red)" : " border-transparent";

    return (
        <div className="grid gap-2">
            <div className="relative mb-4">
                <picture>
                    <source srcSet={imgUrls.desktop.slice(1)} media="(min-width : 64rem)"/>
                    <source srcSet={imgUrls.tablet.slice(1)} media="(min-width : 48rem)" />
                    <img src={imgUrls.mobile.slice(1)} alt="" className={`rounded object-cover border-4` + selected}/>
                </picture>
                <AddButton totalCount={selectedCount} name={category}></AddButton>
            </div>
            <p className="category text-(--color-rose400)">{category}</p>
            <h2 className="name font-bold">{name}</h2>
            <p className="price text-(--color-red)">${price.toFixed(2)}</p>
        </div>
    )
}