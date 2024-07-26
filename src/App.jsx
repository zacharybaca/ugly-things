/* eslint-disable no-unused-vars */
import {UglyThingsContextProvider} from "./context/uglyThingsContext";
import UglyThingsList from "./components/UglyThingsList/UglyThingsList";
import Form from "./components/Form/Form";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import './App.css'

function App(props) {
  

  return (
    <div id="app-container">
      <UglyThingsContextProvider>
        <UpdateForm />
        <Form />
        <UglyThingsList />
      </UglyThingsContextProvider>
    </div>
  )
}

export default App
