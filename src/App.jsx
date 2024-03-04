import './App.css'
import Restaurant from './components/Restaurant'
import restaurants from './restaurants.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import DateTime from './components/DateTime.jsx'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <div className="homeBanner">
        <h1>Welcome!</h1>
        <p className="titleSlogan">This is my Eating Manifesto</p>
      </div>
      <p className="centerText">Scroll for more ↓</p>
      <div className="margin">
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
