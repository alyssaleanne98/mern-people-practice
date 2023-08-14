// Component boilerplate
import { useEffect, useState } from "react"
// Image this as a toolkit. We are taking out two specific tools that make it easier to manage certain aspects of the website or app: useEffect and useState. `useEffect` is a tool that helps you manage when certain actions happen. `useState` is a tool that helps you keep track of information that can change over time. 
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index";
import Show from "../pages/Show";



function Main(props) {
    const [people, setPeople] = useState(null)
  
    const URL = "http://localhost:3001/people/"
  
    const getPeople = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setPeople(data)
    }
  
    const createPeople = async (person) => {
      // make post request to create people
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(person),
      })
      // update list of people
      getPeople()
    }
  
    useEffect(() => getPeople(), [])
    return (
        <main>

            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
}

export default Main;

//Notes:

// Imports: the code imports the necessary components from the 'react-router-dom' library and two other components named Index and Show. These components are likely defined in separate files and are used as the content for specific routes

// Main function component: the code defines a function component named 'Main'. This component are likely defined in separate files and are used as teh content for specific routes. 

// Return statement: the "Main" component's return statement starts on the line immediately after the 'return' keyword. However, this can cause a common issue in JS called called "ASI". To fix this issue, its important to either use parentheses around the JSX or move the opening tag to the same line as the 'return' keyword. 

// Routes and Route components: 
// The 'react-router-dom' library provides two components: 'Routes' and 'Route'. The "Routes" component is used as a container for individual 'Route' components, which define the mappings between specific URL paths and the components that should be rendered when those paths are matched. 

// Route Definitions: 


// Updated Main to have: 
    // State to hold our list of people
    // function to make the api call for people
    // function to create a new person
    // useEffect to make initial call for people list
    // pass the people state and the create function to index 

        // Functionc component declaration
            //`function Main (props)` declares a function component called 'Main' that can accept `properties` as its input. Props are used to pass data into components. 
        // state and useState 
            // `const [people, setPeople] = useState(null)` uses the `useState` hook to declare a piece of state called `people` and a function called `setPeople` to update that state. The initial value of `people` is set to null. WHY? 
                // asynchronous data fetching: when your component is fetching data from an external source (like an API), there is a period of time during which the data is being fetched. Until its available, you might not want to display anything specific on the UI related to the data. 
                // conditional rendering: to control what gets displayed based on the state of the data. for example, you might want to show a loading spinner while the data is being fetched, and then display the actual data once it's available. 