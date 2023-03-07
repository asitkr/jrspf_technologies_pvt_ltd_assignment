import axios from 'axios';
import React, { useEffect, useState } from 'react';

// https://dummyjson.com/products

const Product = () => {
    const [pro, setPro] = useState([]);
    const [filterProd, setFilterProd] = useState([]);
    const [name, setName] = useState("");

    const getData = () => {
        let url = "https://dummyjson.com/products";
        axios.get(url).then(res => setPro(res.data.products));
    }

    useEffect(() => {
        getData();
    }, [])

    const handleSearch = (name) => {
        const url = `https://dummyjson.com/products/search?q=${name}`;
        axios.get(url).then(res => setFilterProd(res.data.products))
        // let newArray = pro.filter(item => {
        //     return item.name !== str;
        // })

        // setPro(newArray);
    }

    console.log(filterProd);

    return (
        <div>
            <div className="container mb-5">
                <input type="search" 
                    name={name} 
                    onChange={(e) => handleSearch(e.target.value)} /> &nbsp; &nbsp;
            </div>

            <div className='container mt-5'>
                <div className="row">
                {
                    name ? filterProd.map(item => (
                        <div className="col-lg-4" key={item.id}>
                            <div className="card mb-5" style={{width: "18rem"}}>
                                    <img src={item.images[0]} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p>Price ₹ {item.price}</p> 
                                        <p>Discount {item.discountPercentage}%</p>
                                        <p>Rating {item.rating}</p>
                                        <p>Stock {item.stock}</p>
                                    </div>
                                </div>
                        </div>
                    )) : pro.map(item => (
                        <div className="col-lg-4" key={item.id}>
                            <div className="card mb-5" style={{width: "18rem"}}>
                                <img src={item.images[0]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p>Price ₹ {item.price}</p> 
                                    <p>Discount {item.discountPercentage}%</p>
                                    <p>Rating {item.rating}</p>
                                    <p>Stock {item.stock}</p>
                                </div>
                            </div>
                        </div>
                    )
                )               
                }
                </div>
            </div>
        </div>
    )
}

export default Product;