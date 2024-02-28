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
        <div className="homeBanner">
          <h1>Cherie.</h1>
          <p className="titleSlogan">An Foodie's Manifesto</p>
        </div>

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
