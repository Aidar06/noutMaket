import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Like = () => {

    const navigate = useNavigate()

    const [like,setLike] = useState(JSON.parse(localStorage.getItem('noutMacLike')) || [])

    const navToDetail = (id)=> {
        navigate(`/detail/${id}`)
    }

    const removeLike = (event,item) => {
        event.stopPropagation();
        const newItem = like.filter(e=> e.id !== item.id)
        localStorage.setItem('noutMacLike',JSON.stringify( newItem))
        setLike(newItem)
    };

    return (
        <section id='like'>
            <div className="container">
                <div className="like">
                {
                    like.length === 0?
                        <h3>Ничего не найден!</h3>:
                        like.map((el,index)=> (
                            <div onClick={()=> navToDetail(el.id)} key={index} className='like--block'>
                                <img src={el.img} alt=""/>
                                <div className="like--block__info">
                                    <h2>{el.name}</h2>
                                    <p>{el.price} {el.currency}</p>
                                </div>
                                <div className="like--block__like"><FaHeart onClick={(e)=> removeLike(e,el)}/></div>
                            </div>
                        ))
                }
            </div>
            </div>
        </section>
    );
};

export default Like;