import { useState } from "react";
export default function App() {
  const [price, setPrice] = useState(100);
  return (
    <div>
      <h1>${price}</h1>
      <button onClick={() => setPrice(69)}>apply discount</button>
    </div>
  );
}
