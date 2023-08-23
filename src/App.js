import './App.css';
// imports the styles from app.css file
import Header from "./components/Header"
import Main from "./components/Main"
// import the Header and Main components 



//The main component of our application called "App"
function App() {
  // To invoke or call its function means using the component's name (App) followed by empty parentheses - to make the component visible (or essentially creating a blueprint for UI element)
  // The return statement below defines what our component should display.
  // It's like saying "When someone uses this `App`component, show this content."
  return (
    <div className="App">
      
     <Header />
     <Main /> 

    </div>
  );
}

//This line exports the app component so other parts of the app can use it
export default App;
