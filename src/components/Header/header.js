import React, {useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {MdArrowBack} from "react-icons/md";

const Header = () => {
    const location = useLocation(); // Получаем текущий маршрут
    const navigate = useNavigate()
    const navToHero = ()=> {
        navigate('/')
    }
    const isDetailPage = location.pathname !== '/';


    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <h1 onClick={navToHero}>{isDetailPage? <MdArrowBack /> : 'Ваш бренд'}</h1>
                    <div className="header--nav">
                        <Link className='header--nav__link' to={'/about'}>о нас</Link>
                        <Link className='header--nav__link' to={'/like'}>избранные</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;