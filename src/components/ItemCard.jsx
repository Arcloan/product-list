import { AddButton } from "./AddButton";

export function ItemCard({ imgUrl, name, category, price}) {
    let url = imgUrl.slice(1);
    return (
        <div className="grid gap-2">
            <div className="relative mb-4">
                <img src={`${url}`} alt="" />
                <AddButton totalCount={0}></AddButton>
            </div>
            <p className="category text-(--color-rose400)">{category}</p>
            <h2 className="name font-bold">{name}</h2>
            <p className="price text-(--color-red)">${price}</p>
        </div>
    )
}