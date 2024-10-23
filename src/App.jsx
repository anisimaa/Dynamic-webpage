import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import header from './components/header'
import footer from './components/footer'

function App() {
  return (
      <div>
          <Header />   {/* Use the Header component */}
          <main>
              <h2>This is the content for the Component Assignment</h2>
              {/* Add more components as needed */}
          </main>
          <Footer />   {/* Use the Footer component */}
      </div>
  );
}

export default App;