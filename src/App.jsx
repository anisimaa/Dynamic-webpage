import React from 'react';
import Header from './components/Header.jsx'
import SelectProduct from './components/SelectProduct.jsx'
import headerlogo from './assets/headerlogo.png'

const App = () => {
  return (
    <div>
      <Header image={headerlogo} title="Welcome to product page!"></Header>
    <SelectProduct/>
    </div>
  )
}

export default App;