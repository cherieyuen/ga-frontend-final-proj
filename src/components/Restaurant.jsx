import Type from './Type'

const Restaurant = (props) => {
  return (
    <div>
      <div className="eachTile">
        <div className="restaurantName">
          <h4>{props.restaurant.name}</h4>
        </div>
        <img src={props.restaurant.pic} alt="" className="restaurantImg" />
        <div className="">
          {props.restaurant.types.map((type, index) => (
            <Type key={type.id} type={type} />
          ))}
        </div>
        <p>
          <b>Address: </b>
          {props.restaurant.address}
        </p>
      </div>
    </div>
  )
}

export default Restaurant
