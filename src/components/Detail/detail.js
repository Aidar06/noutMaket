import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {data} from "../../data";

const Detail = () => {
    const { id } = useParams()

    console.log(id)
    const [product,setProduct] = useState(data.find(el => el.id === +id))
    console.log(product)

    return (
        <section id='ditail'>
            <div className="container">
                <div className="detail">
                    <div className='detail--img'>
                        <img src={product.img} alt=""/>
                    </div>
                    <div className='detail--info'>
                        <h1>{product.name}</h1>
                        <h3>{product.price}{product.currency}</h3>
                        <p>{product.description}</p>
                        <div className='detail--info__character'>
                            <h2>Характеристики</h2>
                            {
                                product.characteristics.map((el,i)=> (
                                    <div>
                                        <h4>{el.name}</h4>
                                        <h5>{el.dis}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;