import { Link } from 'react-router-dom'
// Write the component boilerplate and export the component in all the created files


// This demonstrates a function component: 
// The code starts with the declaration of a function named 'Header'. This function will serve as our react component. 
// Props: the function takes an argument named 'props'.  In React, props (short for properties) are a way to pass data from a parent component to a child component. 
// Inside the function body, you can see JSX syntax. JSX is an extension of JS that allows you to write HTML-like code in your JS files. 
// The return statement will simply return "component name".
// Export: allows other parts of the application to import and use this component.

function Header(prop) {
    // Think of "props" as a way to pass special instructions or info to your components.
    return (
        <nav className="nav">
            {/* creates a nag bar in your header */}
            <Link to="/">
                <div>People App </div>
            </Link>
            {/* This is a special way to create a link in your navigation. When someone clicks on this link, they will go to the main page (represented by the `/` symbol). It's like putting a signpost that says "Go to the main page!" */}

        </nav>
    )
}

export default Header;
