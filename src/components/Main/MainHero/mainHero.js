import React, {useEffect, useState} from 'react';
import {IoSearch} from "react-icons/io5";
import {data} from "../../../data";
import {useNavigate} from "react-router-dom";
import {FaHeart, FaRegHeart} from "react-icons/fa";

const MainHero = () => {

    const navigate = useNavigate()

    const [product,setProduct] = useState(data)
    const [like,setLike] = useState([])
    useEffect(()=> {
        setLike(JSON.parse(localStorage.getItem('noutMacLike')) || [])
    },[])

    const filteredProducts =(e)=> {
        const newPosts = data.filter(posts =>
            posts.name.toLowerCase().includes(e.toLowerCase())
        );
        setProduct(newPosts)
    }

    const navToDetail = (id)=> {
        navigate(`/detail/${id}`)
    }

    const addLike = (event,item) => {
        event.stopPropagation();
        const newItem = [...like, item]
        localStorage.setItem('noutMacLike',JSON.stringify( newItem))
        setLike(newItem)
    };

    const removeLike = (event,item) => {
        event.stopPropagation();
        const newItem = like.filter(e=> e.id !== item.id)
        localStorage.setItem('noutMacLike',JSON.stringify( newItem))
        setLike(newItem)
    };


    return (
        <section id='mainHero'>
            <div className="container">
                <div className="mainHero">
                    <div className="mainHero--search">
                        <div className="mainHero--search__group">
                            <input onChange={(e)=> filteredProducts(e.target.value)} type="text" placeholder='Поиск'/>
                            <div>
                                <IoSearch />
                            </div>
                        </div>
                    </div>
                    <div className="mainHero--group">
                        {
                            product.length === 0?
                                <h3>Ничего не найден!</h3>:
                                product.map((el,index)=> (
                                    <div onClick={()=> navToDetail(el.id)} key={index} className='mainHero--group__block'>
                                        <img src={el.img} alt=""/>
                                        <div className="mainHero--group__block--info">
                                            <h2>{el.name}</h2>
                                            <p>{el.price} {el.currency}</p>
                                        </div>
                                        <div className="mainHero--group__block--like">{like.find(e=> e.id === el.id)? <FaHeart onClick={(e)=> removeLike(e,el)}/> :<FaRegHeart onClick={(e)=> addLike(e,el)} style={{color: "black"}}/>}</div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainHero;