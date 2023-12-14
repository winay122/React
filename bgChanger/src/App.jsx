import { useState } from "react"


function App() {

  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={() => setColor("green")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("yellow")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("olive")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button 
          onClick={() => setColor("grey")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>
          <button 
          onClick={() => setColor("blue")}
          className=" outline-none p-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div> 
    </div>
  )
}

export default App
