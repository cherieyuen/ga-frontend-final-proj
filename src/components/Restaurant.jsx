import Type from './Type'

const Restaurant = (props) => {
  return (
    <div>
      <div className="eachTile">
        <h4>{props.restaurant.name}</h4>
        <img src={props.restaurant.pic} alt="" />
        <div>
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
