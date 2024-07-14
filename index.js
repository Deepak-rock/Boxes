const Box = props => {
  const {sizeName, boxContainer} = props
  return(
    <div className = {boxContainer}>
      <p className = "text">{sizeName}</p>
    </div>
  )
}

const element = (
  <div className = "bg-container">
    <h1 className = "heading">Boxes</h1>
    <div className = "box-container">
      <Box boxContainer = "small" sizeName = "Small"/>
      <Box boxContainer = "medium" sizeName = "Medium"/>
      <Box boxContainer = "large" sizeName = "Large"/>
    </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
