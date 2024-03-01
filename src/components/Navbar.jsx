const Navbar = () => {
  return (
    <div className="nav">
      <li className="grid1">
        <img
          src="https://cdn-icons-png.freepik.com/256/857/857681.png"
          alt=""
          className="grid1Image"
        />
      </li>
      <li className="grid2">
        <a href="https://www.google.com">Home</a>
      </li>
      <li className="grid3">
        <a href="https://www.google.com">About</a>
      </li>
      <li className="grid4">
        <a href="https://www.google.com">Food</a>
      </li>
      <li className="grid5">
        <button className="contactMe">
          <a href="https://www.google.com">Contact</a>
        </button>
      </li>
    </div>
  )
}

export default Navbar
