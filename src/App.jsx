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

      <h1>My Food Blog</h1>

      <div>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.address} restaurant={restaurant} />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
