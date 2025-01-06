import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import 'animate.css';
const Layout = ({children}) => {

    const [size, setSize] = useState(280);
    const [mobileSize, setMobileSize] = useState(0);
    const [accountMenu, setAccountMenu] = useState(false);
    //const location = useLocation();

    console.log(location);

    const menus = [
        {
            label: 'Dashboard',
            icon: <i className="ri-dashboard-3-line"></i>,
            link: '/admin/dashboard'
        },
        {
            label: 'Products',
            icon: <i className="ri-shopping-cart-line mr-2"></i>,
            link: '/admin/products'
        },
        {
            label: 'Customers',
            icon: < i class="ri-group-line"></i>            ,
            link: '/admin/customers'
        },
        {
            label: 'Orders',
            icon: <i className="ri-shape-line mr-2"></i>,
            link: '/admin/orders'
        },
        {
            label: 'Payments',
            icon: <i className="ri-money-rupee-circle-fill"></i>,
            link: '/admin/payments'
        },
        {
            label: 'Settings',
            icon: <i className="ri-settings-5-line"></i>,
            link: '/admin/settings'
        },
        {
            label: 'Logout',
            icon: <i className="ri-logout-circle-line"></i>,
            link: '/admin/logout'
        },
        



        
    ]

    return (
        <div>
        {/*  Desktop */}
        <div className="md:block hidden">
            <aside className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            >
            <div className="flex flex-col">

                {
                    menus.map((item,index)=>(
                        <Link key={index} to={item.link} className="px-4 py-3 text-gray-100 text-[18px] hover:bg-rose-600 hover:text-white"
                        style={{
                            background: (location.pathname)=== item.link ? '#e11d48' : 'trasparent'
                        }}
                        >
                        {item.icon}
                        {item.label}
                        </Link>
                    ))
                }
                
            </div>

            </aside>
            <section className="bg-gray-100 h-screen"
                style={{
                    marginLeft: size,
                    transition: '0.3s'
                }}
            >
                <nav className="bg-white p-6 shadow flex item-center justify-between sticky left-0 top-0">
                    <div className="flex gap-4 items-center">
                        <button className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8"
                            onClick={() => setSize(size === 280 ? 0 : 280)}
                        >
                        <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1>PTC</h1>
                    </div>
                    <div>
                        <button className="relative">
                            <img src="/images/ava.jpg" className="w-10 h-10 rounded-full" onClick={() => setAccountMenu(!accountMenu)} />
                            {accountMenu &&
                                <div className="absolute top-18 shadow-lg w-[200px] bg-white p-6 right-0">
                                    <div>
                                        <h1 className="text-lg font-semibold">Er. Saurav</h1>
                                        <p className="text-grey-500">example@gmail.com</p>
                                        <div className="h-px bg-gray-200 my-4" />
                                        <button>
                                            <i className="ri-logout-circle-line mr-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            }
                        </button>
                    </div>
                </nav>
                <div>
                    {children}
                </div>
            </section>
        </div>

         {/* Mobile */}
        <div className="md:hidden block">
            <aside className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
                style={{
                    width: mobileSize,
                    transition: '0.3s'
                }}
            >
            <div className="flex flex-col">

                {
                    menus.map((item,index)=>(
                        <Link key={index} to={item.link} className="px-4 py-3 text-gray-100 text-[18px] hover:bg-rose-600 hover:text-white"
                        style={{
                            background: (location.pathname)=== item.link ? '#e11d48' : 'trasparent'
                        }}
                        >
                        {item.icon}
                        {item.label}
                        </Link>
                    ))
                }
                
            </div>

            </aside>
            <section className="bg-gray-100 h-screen"
                style={{
                    marginLeft: mobileSize,
                    transition: '0.3s'
                }}
            >
                <nav className="bg-white p-6 shadow flex item-center justify-between sticky left-0 top-0">
                    <div className="flex gap-4 items-center">
                        <button className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8"
                            onClick={() => setMobileSize(mobileSize === 280 ? 0 : 280)}
                        >
                        <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1>PTC</h1>
                    </div>
                    <div>
                        <button className="relative">
                            <img src="/images/ava.jpg" className="w-10 h-10 rounded-full" onClick={() => setAccountMenu(!accountMenu)} />
                            {accountMenu &&
                                <div className="absolute top-18 shadow-lg w-[200px] bg-white p-6 right-0">
                                    <div>
                                        <h1 className="text-lg font-semibold">Er. Saurav</h1>
                                        <p className="text-grey-500">example@gmail.com</p>
                                        <div className="h-px bg-gray-200 my-4" />
                                        <button>
                                            <i className="ri-logout-circle-line mr-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            }
                        </button>
                    </div>
                </nav>
                <div>
                    {children}
                </div>
            </section>
        </div>
        </div>
    )
}
export default Layout;