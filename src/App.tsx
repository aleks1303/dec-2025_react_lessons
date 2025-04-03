import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {


  return (
    <>
     <MyComponent text={'This is text from MyComponent1'}/>
     <MyComponent text={'This is text from MyComponent2'}/>
     <MyComponent text={'This is text from MyComponent3'}/>
    </>
  )
}

export default App
