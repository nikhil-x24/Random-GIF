// import React from 'react'
//
// const App = () => {
//   return (
//     <div>App</div>
//   )
// }
//
// export default App

import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(

    <div className="w-full h-screen items-center overflow-x-hidden flex flex-col relative background">
      <h1 className="bg-white w-11/12 text-center mt-[25px] 
        px-10 py-1 text-3xl font-bold rounded-lg ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[15px]">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}

