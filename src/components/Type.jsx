const Type = (props) => {
  return (
    <div className="typeButtons">
      <button className={props.type.cuisine}> {props.type.cuisine} </button>
    </div>
  )
}

export default Type
