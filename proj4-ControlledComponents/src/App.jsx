import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return (
    <div class="flex bg-gray-600 w-full h-screen justify-center items-center gap-40">
      <div class="flex bg-red-200 w-110 h-100 rounded-3xl">
        <form action="" method="post" class="flex flex-col gap-5 p-10">
          <label htmlFor="name">Name:</label>
          <input class="border p-1 w-80 rounded" type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="email">Email:</label>
          <input class="border p-1 w-80 rounded" type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="age">Age:</label>
          <input class="border p-1 w-80 rounded" type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </form>
      </div>

      <div class="flex flex-col bg-green-200 w-120 h-50 rounded-3xl p-10 gap-6">
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Age: {age}</h1>
      </div>
    </div>
  )
}

export default App
