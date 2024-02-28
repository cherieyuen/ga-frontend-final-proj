const Type = (props) => {
  return (
    <div>
      <button class={props.type.cuisine}> {props.type.cuisine} </button>
    </div>
  )
}

export default Type
