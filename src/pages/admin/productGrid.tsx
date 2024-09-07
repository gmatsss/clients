import React, { useState } from 'react';
import './productGrid.css';

interface Product {
    id: number;
    productName: string;
    price: number;
    productDescription: string;
    image: string | ArrayBuffer | null;
}

const ProductGrid: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, productName: '', price: 0, productDescription: '', image: null },
    ]);

    const handleInputChange = (id: number, name: keyof Omit<Product, 'id'>, value: any) => {
        setProducts(
            products.map((product) =>
                product.id === id ? { ...product, [name]: value } : product
            )
        );
    };

    const handleImageChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProducts(
                    products.map((product) =>
                        product.id === id ? { ...product, image: reader.result } : product
                    )
                );
            };
            reader.readAsDataURL(file);
        }
    };

    const addProduct = () => {
        const id = products.length ? products[products.length - 1].id + 1 : 1;
        setProducts([
            ...products,
            { id, productName: '', price: 0, productDescription: '', image: null },
        ]);
    };

    const removeProduct = (id: number) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h1>Product Grid</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <input
                                    type="text"
                                    value={product.productName}
                                    onChange={(e) =>
                                        handleInputChange(product.id, 'productName', e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) =>
                                        handleInputChange(product.id, 'price', parseFloat(e.target.value))
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.productDescription}
                                    onChange={(e) =>
                                        handleInputChange(product.id, 'productDescription', e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                {product.image ? (
                                    <>
                                        <img
                                            src={product.image as string}
                                            alt="Product"
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(product.id, e)}
                                        />
                                    </>
                                ) : (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(product.id, e)}
                                    />
                                )}
                            </td>
                            <td>
                                <button onClick={() => removeProduct(product.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default ProductGrid;
