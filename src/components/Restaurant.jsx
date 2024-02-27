const Restaurant = (props) => {
  return (
    <div>
      <h4>{props.restaurant.name}</h4>
      <img src={props.restaurant.pic} alt="" />
      <p>Address: {props.restaurant.address}</p>
      <button> {props.restaurant.types.cuisine}</button>
    </div>
  )
}

export default Restaurant
