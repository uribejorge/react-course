import React from "react";

const Card = ({ data }) => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category?.name || "Electronics"}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="headphones"
                />
                <div className="absolute top-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">300.000</span>
            </p>
        </div>
    );
};

export default Card;

