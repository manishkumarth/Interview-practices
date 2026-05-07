import { use, useState } from "react";

// real API call
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  return res.json();
}

const userPromise = fetchUser();

export function Profile() {
  const user = use(userPromise);
  console.log(
    "user",user
  )
  const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <h1>{user[0].name}</h1>
      <p>{user[0].email}</p>
      <p>{user[0].company.name}</p>
    </div>
  );
}

import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback={<h2>Loading user...</h2>}>
      <Profile />
    </Suspense>
  );
}