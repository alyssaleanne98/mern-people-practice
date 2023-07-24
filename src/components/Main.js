// Component boilerplate
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"; 
import Show from "../pages/Show"; 



function Main(props) {
    return 
    <main>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/people/:id" element={<Show />} />

        </Routes>
    </main>
}

export default Main;

//Notes:

// Imports: the code imports the necessary components from the 'react-router-dom' library and two other components named Index and Show. These components are likely defined in separate files and are used as the content for specific routes

// Main function component: the code defines a function component named 'Main'. This component are likely defined in separate files and are used as teh content for specific routes. 

// Return statement: the "Main" component's return statement starts on the line immediately after the 'return' keyword. However, this can cause a common issue in JS called called "ASI". To fix this issue, its important to either use parentheses around the JSX or move the opening tag to the same line as the 'return' keyword. 

// Routes and Route components: 
// The 'react-router-dom' library provides two components: 'Routes' and 'Route'. The "Routes" component is used as a container for individual 'Route' components, which define the mappings between specific URL paths and the components that should be rendered when those paths are matched. 

// Route Definitions: 
//
