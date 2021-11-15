import Image from "next/image";
import Currency from "react-currency-formatter"
import { useState } from "react";
function Product({id,title,price,description,category,image}) {
    const[hasPrime]= useState(Math.random()<0.5);
    return (
        <div className="flex flex-col relative m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="USD" />
            </div>
            {hasPrime &&(
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="primeLogo" />
                    <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                </div>
            )}
            <button className="mt-auto button">Add to Cart</button>
        </div>
    );
}

export default Product
