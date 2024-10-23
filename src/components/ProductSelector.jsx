import React, { useState } from 'react';


const productNames = ['Product A', 'Product B', 'Product C', 'Product D', ]
const productPrices = [10, 20, 30, 40]

const ProductSelector = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [quantity, setQuantity] = useState(0)

    //function to dropdown selection
    const handleProductChange = (event) => {
        setSelectedIndex(event.target.value)
        setQuantity(0) //reset quantity to zero when changing product
    }

    //function to increase quantity
    const increaseQuantity = () => {
        setQuantity((prev) => prev +1) 
    }

    //function to decrease quantity
    const decreaseQuantity = () => {
        setQuantity((prev)=> (prev > 0 ? prev -1 : 0))
    }


    // Calculate total price based on selected product and quantity
  const totalPrice = productPrices[selectedIndex] * quantity;

  return (
    <div>
      <h2>Product Selector</h2>

      <label>Select a Product:</label>
      <select value={selectedIndex} onChange={handleProductChange}>
        {productNames.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>

      <div>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      {/* Order Info Table */}
      <h3>Order Information</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productNames[selectedIndex]}</td>
            <td>${productPrices[selectedIndex]}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductSelector;