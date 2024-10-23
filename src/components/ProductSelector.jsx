import React, { useState } from 'react';

const productNames = ['Product A', 'Product B', 'Product C', 'Product D', ]
const productPrices = [10, 20, 30, 40]

const ProductSelector = () => {
    const [selectIndex, setSelectedIndex] = useState(0)
    const [quantity, setQuantity] = useState(0)

    //function to dropdown selection
    const handleProductChange = (event) => {
        setSelectedIndex(event.target.value)
        setQuantity(0) //reset quantity to zero when changing product
    }

    //function to increase and decrease quantity
    const increaseQuantity = () => {
        setQuantity((prev) => prev +1) 
    }

    const decreaseQuantity = () => {
        setQuantity((prev)=> (prev > 0 ? prev -1 : 0))
    }


}