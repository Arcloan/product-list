export function AddButton({ totalCount }) {
    if (totalCount == 0) {
        return (
            <button className="py-2 px-6 flex gap-2 border-1 border-black justify-center rounded-full absolute bg-white -bottom-4 left-[50%] -translate-x-[50%]">
                <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                Add to Cart
            </button>
        )
    }
    else {
        return (
            <button className="rounded-full p-2 flex justify-around text-white bg-(--color-red) gap-10 absolute -bottom-4 left-[50%] -translate-x-[50%]">
                <div className="p-2 border-1 border-white rounded-[50%] grid place-items-center"><img src="/assets/images/icon-increment-quantity.svg" alt="" /></div>
                {totalCount}
                <div className="p-2 border-1 border-white rounded-[50%] grid place-items-center"><img src="/assets/images/icon-decrement-quantity.svg" alt="" /></div>
            </button>
        )
    }
}