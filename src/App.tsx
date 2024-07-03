import { useState } from "react";

import "./App.css";

import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

function App() {
  const [count, setCount] = useState(0);
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: "Hello, I am popup",
    });
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={handleClick}>Show Popup</button>
      <MainButton text="SHOW POPUP" onClick={handleClick} />
    </>
  );
}

export default App;
