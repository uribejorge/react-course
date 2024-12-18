import React from "react";

const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute">Electronics</span>
                <img src="" alt="headphones" />
                <div className="absolute top-0 ring-0 flex justify-center bg-white w-6 h-6 rounded-full">
                    +
                </div>
            </figure>
            <p>
                <span>Headphones</span>
                <span>300.000</span>
            </p>
        </div>

    )
}
export default Card