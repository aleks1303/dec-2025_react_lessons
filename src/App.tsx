import './App.css'
import {coursesArray} from "./data/CourseArray.ts";
import CourseArrayComponent from "./components/CourseArrayComponent.tsx";

function App() {


  return (
    <>
        {
            coursesArray.map((course) => (
               <CourseArrayComponent course={course}/>
            ))
        }
    </>
  )
}

export default App
