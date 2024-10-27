import React from 'react'
import ApiList from './components/ApiList.jsx'
import './index.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
      <h1>Meal Finder</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ApiList searchTerm={searchTerm} />
    </div>
  );
}

export default App;