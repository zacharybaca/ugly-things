/* eslint-disable no-unused-vars */
import {UglyThingsContextProvider} from "./context/uglyThingsContext";
import UglyThingsList from "./components/UglyThingsList/UglyThingsList";
import Form from "./components/Form/Form";
import './App.css'

function App(props) {
  

  return (
    <div id="app-container">
      <UglyThingsContextProvider>
        <Form />
        <UglyThingsList />
      </UglyThingsContextProvider>
    </div>
  )
}

export default App
