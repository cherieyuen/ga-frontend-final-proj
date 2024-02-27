import './App.css'
import Restaurant from './components/Restaurant'
import restaurants from './restaurants.js'

const App = () => {
  return (
    <div>
      <h2>Title</h2>

      <div>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.address} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default App
