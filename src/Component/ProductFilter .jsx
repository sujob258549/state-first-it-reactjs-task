import React, { useState, useEffect } from 'react';

// Example product list
const products = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 100 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 50 },
    { id: 3, name: 'Product 3', category: 'Electronics', price: 150 },
    { id: 4, name: 'Product 4', category: 'Accessories', price: 25 },
    { id: 5, name: 'Product 5', category: 'Clothing', price: 75 },
];

const ProductFilter = () => {
    // State to hold filter values
    const [category, setCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Function to handle category change
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    // Function to handle price range change
    const handlePriceChange = (e) => {
        const selectedPriceRange = e.target.value;
        if (selectedPriceRange === '0-50') {
            setPriceRange([0, 50]);
        } else if (selectedPriceRange === '51-100') {
            setPriceRange([51, 100]);
        } else if (selectedPriceRange === '101-200') {
            setPriceRange([101, 200]);
        } else {
            setPriceRange([0, 200]); // Default price range for all
        }
    };

    // Filtering logic based on category and price
    useEffect(() => {
        const applyFilters = () => {
            let filtered = products;

            // Apply category filter
            if (category !== 'All') {
                filtered = filtered.filter(product => product.category === category);
            }

            // Apply price filter
            filtered = filtered.filter(
                product => product.price >= priceRange[0] && product.price <= priceRange[1]
            );

            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [category, priceRange]);

    return (
        <div className="container mx-auto px-8">
            <h1 className="text-2xl font-bold py-5">Product Filters</h1>

            {/* Category Filter */}
            <div className="mb-4">
                <label className="font-semibold">Category: </label>
                <select value={category} onChange={handleCategoryChange} className="ml-2">
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
                <label className="font-semibold">Price: </label>
                <select onChange={handlePriceChange} className="ml-2">
                    <option value="0-200">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-200">$101 - $200</option>
                </select>
            </div>

            {/* Filtered Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.length ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-gray-200 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found matching the filters.</p>
                )}
            </div>
        </div>
    );
};

export default ProductFilter;
