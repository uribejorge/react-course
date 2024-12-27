import React, { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../context";

const Card = ({ data }) => {
    const context = useContext(ShoppingCardContext);

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => context.openProductos()} // Mover onClick dentro del div
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data?.category?.name || "Category"}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={data?.images?.[0] || "https://via.placeholder.com/150"}
                    alt={data?.category?.name || "Product"}
                />
                <div
                    className="absolute top-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
                    onClick={() => context.setCount(context.count + 1)}
                >
                    <PlusIcon className="h-6 w-6 text-black" />
                </div>
            </figure>
            <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light">{data?.title || "Product Name"}</span>
                <span className="text-lg font-medium">{data?.price ? `$${data.price}` : "Price"}</span>
            </p>
        </div>
    );
};

export default Card;



