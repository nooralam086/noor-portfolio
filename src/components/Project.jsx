const Project = (props) =>{
    return <div style = {{border:"3px solid red", margin:"10px"}}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}
export default Project;