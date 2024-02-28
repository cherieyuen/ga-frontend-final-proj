import './App.css'
import Restaurant from './components/Restaurant'
import restaurants from './restaurants.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="margin">
        <h1>My Food Blog</h1>
        <p>Welcome to my food blog~ eat lots~</p>

        <div className="restaurantTile">
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.address} restaurant={restaurant} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
