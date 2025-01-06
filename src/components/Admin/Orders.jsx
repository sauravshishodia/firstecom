import Layout from "./Layout";
import { useState } from "react";
const Orders = () => {

    const [orders,setOrders] = useState([
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        },
        {
            orderid: '#edcef',
            cusromername: 'er saurav',
            email: 'sau@gmail.com',
            mobile: '+91 6754389035',
            product: 'Lenevo 5100 D',
            amount: 52000,
            date: '03-01-2025 5:36 PM',
            status: 'pending'
        }
    ])

    return(
        <Layout>
            <div className="m-5">
            <h1 className="text-xl font-semi-bold">Orders list</h1>
            <div className="mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-rose-600 text-white">
                            <th className="py-4">Order Id</th>
                            <th>Customer's Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item,index)=>(
                            <tr key={index} className="text-center" style={{
                                background: (index+1)%2 === 0 ? "#e2e8f0" : 'white'
                            }}>
                                <td className="py-4">{item.orderid}</td>
                                <td className="capitalize">{item.cusromername}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td className="capitalize">{item.product}</td>
                                <td>₹{item.amount}</td>
                                <td>{item.date}</td>
                                <td className="capitalize">
                                    <select className="border p-1 border-gray-200">
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="dispatched">Dispatched</option>
                                        <option value="returned">Returned</option>
                                    </select>
                                </td>
                            </tr>
                            )
                        )
                
                        }
                        
                    </tbody>
                </table>
            </div>
            </div>
         
        </Layout>
        
       
    )
}
export default Orders