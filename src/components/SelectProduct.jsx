import React, { useState } from 'react';

const productNames = ['Product A', 'Product B', 'Product C', 'Product D', ]
const productPrices = [10, 20, 30, 40]

const SelectProduct = () => {
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


    //calculate total price
  const totalPrice = productPrices[selectedIndex] * quantity;

  return (
    <div>
      <h2>Select Product</h2>

      {/*dropdown menu part*/}
      <label>Product:</label>
      <select value={selectedIndex} onChange={handleProductChange}>
        {productNames.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>

      {/*quantity counter*/}
      <div>
      <label>Quantity:</label>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      {/*order info*/}
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

export default SelectProduct;