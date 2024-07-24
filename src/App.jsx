import {UglyThingsContextProvider} from "./context/uglyThingsContext";
import UglyThingsList from "./components/UglyThingsList/UglyThingsList";
import Form from "./components/Form/Form";
import './App.css'

function App() {
  

  return (
    <div id="app-container">
      <Form />
      <UglyThingsContextProvider>
        <UglyThingsList />
      </UglyThingsContextProvider>
    </div>
  )
}

export default App
