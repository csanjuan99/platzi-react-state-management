import './App.css'
import {UseState} from "./components/UseState.tsx";
import {ClassState} from "./components/ClassState.tsx";

function App() {

  return (
    <>
        <UseState name="useState"/>
        <hr/>
        <ClassState name="classState"/>
    </>
  )
}

export default App
