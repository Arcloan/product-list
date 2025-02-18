import { ItemCard } from "./ItemCard";

export function ItemsGrid({ desserts }) {
    return (
        <div>
            <h1 className="text-3xl mb-4 font-bold">Desserts</h1>
            <section className="grid gap-4 md:grid-cols-3">
                {desserts.map((dessert, idx) => 
                    <ItemCard imgUrls={dessert.image} name={dessert.name}
                                price={dessert.price} category={dessert.category} key={idx}>
                    </ItemCard>
                )}
            </section>
        </div>
    )
}