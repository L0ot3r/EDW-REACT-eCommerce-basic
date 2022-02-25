import React from 'react'
import "./ShoppingCart.css"
import { useSelector, useDispatch } from 'react-redux';

export default function ShoppingCart() {

    const storeState = useSelector(state => state)

    const dispatch = useDispatch()

    const handleQuantity = (event, id) => {

        const indexItem = storeState.cart.findIndex(obj => obj.id === id)

        const objUpdate = {
            ...storeState.cart[indexItem],
            quantity: Number(event.target.value)
        }
        dispatch({
            type: "UPDATEITEM",
            payload: objUpdate
        })

    }

    let totalPrice = 0;
    if(storeState.cart.length !== 0){
        for(const item of storeState.cart){
            const itemPrice = item.price * item.quantity;
            totalPrice += itemPrice;
        }
    }

    return (
        <div className="global-container">
            <p className="heading-cart">Votre panier:</p>
            <ul className="cart-list">
                {storeState.cart.map((item) => (
                    <li key={item.id}>
                        <img 
                        src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                        alt="produit selectionné" />
                        <div className="bloc-cart-infos">
                            <h4>{item.title}</h4>
                            <p>Prix: {item.price}€</p>
                        </div>
                        <div className="bloc-input">
                            <label htmlFor="quantityInput">Quantité</label>
                            <input 
                            id="quantityInput"
                            value={item.quantity}
                            type="number" 
                            onChange={e => handleQuantity(e, item.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <p className="total-price">Total : {totalPrice.toFixed(2)}€</p>
            <button className="btn-cart">Procéder au paiement</button>
        </div>
    )
}
