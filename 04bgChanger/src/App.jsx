import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const bgChanger = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
            onClick={() => bgChanger("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
            onClick={() => bgChanger("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
            onClick={() => bgChanger("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "olive" }}
            onClick={() => bgChanger("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "gray" }}
            onClick={() => bgChanger("gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "yellow" }}
            onClick={() => bgChanger("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "pink" }}
            onClick={() => bgChanger("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "purple" }}
            onClick={() => bgChanger("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "lavender" }}
            onClick={() => bgChanger("lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "white" }}
            onClick={() => bgChanger("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "black" }}
            onClick={() => bgChanger("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
