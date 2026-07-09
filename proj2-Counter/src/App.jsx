import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }

  const Decrement = () => {
    if (count === 0) {
      return;
    }
    if (count < 0) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  }

  const Reset = () => {
    setCount(0);
  }

  return (
    <div class="justify-center items-center w-full h-screen flex flex-col">
      <div class="flex flex-col justify-center items-center bg-gray-800 pl-10 pr-10 pt-20 pb-20 rounded-xl">
        <h1 class="bg-gray-500 text-white text-3xl font-bold p-3 rounded-md">Count : {count}</h1>
        <div class="flex gap-10 mt-10">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={Increment}>Increment</button>
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={Decrement}>Decrement</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
