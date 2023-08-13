import { Link } from 'react-router-dom'
// Write the component boilerplate and export the component in all the created files


// This demonstrates a function component: 
// The code starts with the declaration of a function named 'Component'. This function will server as our react component. 
// Propes: the function takes an argument named 'props'.  In React, props (short for properties) are a way to pass data from a parent component to a child component. 
// Inside the function body, you can see JSX syntax. JSX is an extension of JS that allows you to write HTML-like cdoe in your JS files. 
// The return statement will simply return "component name".
// Export: allows other parts of the application to import and use this component.

function Header(prop) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App </div>
            </Link>

        </nav>
    )
}

export default Header;
