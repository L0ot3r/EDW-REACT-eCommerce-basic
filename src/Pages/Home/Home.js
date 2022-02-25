import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">
                Bienvenue au <span>Shop</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora rerum. Cupiditate sed dolorum ut itaque excepturi sapiente quia sunt, nostrum temporibus maiores consectetur culpa consequuntur ratione nisi ullam. Totam.</p>
            <img src={imgHomeShop} alt="acceuil shop" />
        </div>
    )
}
