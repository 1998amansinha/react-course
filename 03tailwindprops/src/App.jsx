import "./App.css";
import Card from "./components/Card";

function App() {
  const myRole = {
    Name : "Aman Sinha",
    Age : 20,
    Position : "Sr. Software Developer"
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card  title="Hello" btnText="Visit Me "/>
      <Card  title="Hi" btnText="Click Me "/>
    </>
  );
}

export default App;
