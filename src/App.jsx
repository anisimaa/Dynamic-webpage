import React from 'react';
import Header from './components/Header.jsx'
import ProductSelector from './components/ProductSelector.jsx'
import Footer from './components/Footer.jsx'
import headerlogo from './assets/headerlogo.png'

const App = () => {
  return (
    <div>
      <Header image={headerlogo} title="Welcome to product page!"></Header>
    <ProductSelector/>
    <Footer />
    </div>
  )
}

export default App;