import React, { useState, useEffect } from 'react'

function ApiList({ searchTerm }) {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(null)
  
    useEffect(() => {
      if (searchTerm) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            setMeals(data.meals || [])
            setError(null)
          })
          .catch((err) => setError('Failed to fetch data'))
      }
    }, [searchTerm])
  
    return (
      <div className="meal-list">
        {error ? (
          <p>{error}</p>
        ) : (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-item">
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p><strong>Category:</strong> {meal.strCategory}</p>
              <p><strong>Area:</strong> {meal.strArea}</p>
              <p><strong>Instructions:</strong> {meal.strInstructions}</p>
            </div>
          ))
        )}
      </div>
    )
  }

export default ApiList