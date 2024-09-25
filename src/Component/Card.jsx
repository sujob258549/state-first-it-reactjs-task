import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';

const Card = () => {

    const product = [
        {
            id: 'modal6',
            title: 'Kawai Toys',
            imgSrc: 'https://i.ibb.co.com/nn4H8ZT/51r-CQVj7-KCL-AC-SL1000-1-removebg-preview.png',
            price: 30,
            category: "Music"
        },
        {
            id: 'modal1',
            title: 'Itel Mobile',
            imgSrc: 'https://i.ibb.co.com/DpJFspd/Infinix-Smart-9-Mint-Green-300x300-removebg-preview.png',
            price: 90,
            category: "Electronics"

        },
        {
            id: 'modal2',
            title: 'Home',
            imgSrc: 'https://i.ibb.co.com/KWtWVnb/Hand-drawn-house-icon-on-transparent-background-PNG-1-removebg-preview-1.png',
            price: 20,
            category: "Home"
        },
        {
            id: 'modal8',
            title: 'tool box ',
            imgSrc: 'https://i.ibb.co.com/PQj36v9/a-HR0c-HM6-Ly9zd-GF0a-WMt-MDEu-ZGFy-YXou-Y29t-Lm-Jk-L3-Av-Nj-Rj-Mj-I0-Mz-Q3-Nj-Ey-Yz-Qz-MTlm-ZTg5-Mj.png',
            price: 55.99,
            category: "Tools"
        },
        {
            id: 'modal3',
            title: 'Guiter',
            imgSrc: 'https://i.ibb.co.com/tHGGvxS/a-HR0c-HM6-Ly9zd-GF0a-WMt-MDEu-ZGFy-YXou-Y29t-Lm-Jk-L3-Av-ZGMx-YTcy-MWFl-MDEz-ZGU2-Nm-Zh-Ym-Zm-Ym-Vj.png',
            price: 30,
            category: "Music"
        },
        {
            id: 'modal5',
            title: 'Iphone Mobile',
            imgSrc: 'https://i.ibb.co.com/ZMmW37d/Apple-i-Phone-16-Pro-Max-Black-Titanium-300x300-removebg-preview-removebg-preview.png',
            price: 290,
            category: "Electronics"

        },
        {
            id: 'modal4',
            title: 'Small Dril ',
            imgSrc: 'https://i.ibb.co.com/yS4P9F4/41-Nlm-W5k-YPL-400x400-removebg-preview.png',
            price: 25.99,
            category: "Tools"
        },
        {
            id: 'modal7',
            title: 'Pressure Cooker',
            imgSrc: 'https://i.ibb.co.com/dPPqjds/a-HR0c-HM6-Ly9zd-GF0a-WMt-MDEu-ZGFy-YXou-Y29t-Lm-Jk-L3-Av-Mm-Mz-YWE0-Yz-Vl-ODgw-ZTcy-Mz-Vl-YWNi-Mj-A.png',
            price: 10,
            category: "Home"
        }
    ];

    const [products, setProducts] = useState(product);

    const onPriceSort = (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === 'high') {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        } else if (selectedValue === 'low') {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        }
    };

    const onCategorySort = (e) => {
        const sortedCategory = e.target.value;

        if (sortedCategory === 'default') {
            setProducts(product); // Reset to original list if "default" is selected
        } else {
            const filteredProducts = product.filter(p => p.category === sortedCategory);
            setProducts(filteredProducts);
        }
    };

    const openModal = (modalId) => {
        document.getElementById(modalId).showModal();
    };

    return (
        <div className="container mx-auto px-8">
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-center font-bold py-10 md:py-20'>Cards section</h1>

            <div className='flex gap-6 flex-wrap justify-end pb-8'>
                <select onChange={onCategorySort} className="select select-primary w-full max-w-xs">
                    <option value="default">Sort by Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home">Home</option>
                    <option value="Music">Music</option>
                    <option value="Tools">Tools</option>
                </select>

                <select onChange={onPriceSort} className="select select-primary w-full max-w-xs">
                    <option value="default">Sort by Price</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {products.map(({ id, title, imgSrc, price, category }) => (
                    <div key={id} className="bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl" style={{ boxShadow: '1px 1px 50px #25A4DE' }}>
                        <motion.div whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.12 }} className="duration-500 contrast-50 rounded-md bg-gradient-to-bl from-black via-orange-900 to-indigo-600 hover:contrast-100">
                            <img className='h-[200px] mx-auto py-5' src={imgSrc} alt={title} />
                        </motion.div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xl text-gray-50 font-bold">{title}</span>
                                    <p className="text-[18px] font-semibold text-gray-400">Category :{category}</p>
                                </div>
                                <span className="font-bold text-red-600">${price}</span>
                            </div>
                            <button
                                className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl"
                                onClick={() => openModal(id)}
                            >
                                Open Details modal
                            </button>
                            <dialog id={id} className="modal">
                                <div className="modal-box">
                                    <img className='h-[100px] mx-auto' src={imgSrc} alt={title} />
                                    <h3 className="font-bold text-lg text-black pt-2">{title}</h3>
                                    <p className="py-2 text-black">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
