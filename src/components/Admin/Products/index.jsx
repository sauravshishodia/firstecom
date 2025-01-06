import Layout from "../Layout";
import { useState } from "react";
const Product = () => {

    const [orders,setOrders] = useState([
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/1.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/2.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/3.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/4.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/5.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/6.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/7.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/8.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/9.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/10.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/11.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/12.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/13.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/14.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/15.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/16.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/17.jpg'
        },
        {
            title: "Men's Shirt slim blue",
            price: 450,
            discount: 20,
            description: 'this is best available in online market',
            image: '../products/18.jpg'
        }
    ])

    return(
        <Layout>
            <div className="m-[20px]">
            <h1 className="text-xl font-semi-bold mb-4">Products</h1>
            <div className="grid grid-cols-4 gap-8">
                        {
                            orders.map((item,index)=>(
                            <div key={index} className="bg-white shadow-lg rounded-md" >
                                <img src={item.image} className="animate__animated animate__pulse rounded-t-md h-[250px] w-full object-cover" />
                                <div className="p-4">
                                    <h1 className="text-md capitalize font-semibold">{item.title}</h1>
                                    <p className="text-gray-500">{item.description.slice(0.50)}</p>
                                    <div className="flex gap-2 mt-1">
                                        <p>₹{item.price-(item.price*item.discount)/100}</p>
                                        <del>₹{item.price}</del>
                                        <label className="text-gray-600">₹{item.discount}% Off</label>
                                    </div>    
                                </div>
                            </div>
                            )
                        )
                        }
            </div>
            </div>
        </Layout>
    )
}
export default Product