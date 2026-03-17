import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { DataContext } from '../../Context/DataContext'
import removeicon from '../Assets/removeicon.png'

const CartItems = () => {
  const { all_products, cartItems, removeFromCart,getTotal } = useContext(ShopContext)
  const { data } = useContext(DataContext)

  const products = [...all_products, ...data]

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        const qty = cartItems[e.id] || 0
        if (qty > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{qty}</button>
                <p>${e.new_price * qty}</p>
                <img src={removeicon} onClick={() => removeFromCart(e.id)} alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotal}</p>
                </div>
                <hr />
               <div className="cartitems-total-item">
                <p>Delivery</p>
                <p>Free</p>

               </div>
               <hr />
               <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotal}</h3>
               </div>
               <button>Buy</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems