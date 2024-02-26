import React from 'react'

function CartWidget() {
    return (
        <div className='cart-container'>
            <i className={"fa-solid fa-cart-shopping cartWidget"}></i>
            <span className='notification'>2</span>
        </div>
    )
}

export default CartWidget
