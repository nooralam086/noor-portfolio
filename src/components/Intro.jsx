const Intro =(props) =>{
    return <div>
        <h4>{props.age}</h4>
        <h4>{props.email}</h4>
        <h5>{props.phone}</h5>
        <h5>{props.branch}</h5>
        <p>I am a BCA  student learning MERN Stack and 
           developing modern, responsive and 
           user-friendly wrb application using JavaScript techonologies.
        </p>
    </div>
}
export default Intro;