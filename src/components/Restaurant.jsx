import Type from './Type'

const Restaurant = (props) => {
  return (
    <div>
      <h4>{props.restaurant.name}</h4>
      <img src={props.restaurant.pic} alt="" />
      <p>Address: {props.restaurant.address}</p>
      {props.restaurant.types.map((type, index) => (
        <Type key={type.id} type={type} />
      ))}
    </div>
  )
}

export default Restaurant
