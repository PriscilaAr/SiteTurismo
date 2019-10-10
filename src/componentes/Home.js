import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
    return (
        <div className="Home">
            <header>
                <h1><span>A</span>turismo<span>s</span> está sempre pronta para te levar ao lugar dos seus <span>sonhos</span></h1>
            </header>
            <div>
                <Link to="/cadastro">
                    <button>Cadastre-se</button>
                </Link>
            </div>
        </div>
    )
}
export default Home; 