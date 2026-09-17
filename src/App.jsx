import Intro from "./components/Intro";
import Project from "./components/Project";
function App(){
  const projects=[
    {title:"Notes Gallery", description:"Study notes browsing website built with HTML, CSS & JavaScript"},
    {title:"EduVault", description:"Educational platform for managing and accessing study materials."},
    {title:"Birthday Surprise", description:"Interactive birthday animation created using Python Turtle"},
    {title:"Student Registration Form", description:"Simple and responsive student registration form using HTML & CSS."},
    {title:"Student Registration Form", description:"Collection of beginner-friendly JavaScript programs and exercises."}
  ]
  return <div >
    <h1>This is Noor portfoloio</h1>
    <h3>MERN Stack learner</h3> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWXSGcgoVNHnUMDhV-Pi_3ixGI4ZrgB_wMBhB86SlLw&s=10" width ="400" hight="500" />
    <Intro age={20} email="noor123@gmail.com" phone={1234567890} branch="BCA"/>
    

    
    {
      projects.map((project,index)=>(
        <Project key={index} title={project.title} description={project.description}/>
      ))
    }
  </div>
}
export default App;