import "./App.css";

//component (function component)
// with props and how to use the props props.var
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};
const App = () => {
  //create variables
  //const var = value;

  return (
    <div className="App">
      <Person name="Kyle" lastname="Mendoza" age={25} />
      <Person name={"Isaac"} lastname="brain" age={25 + 5} />

      {/* to use component */}
    </div>
  );
};

export default App;
