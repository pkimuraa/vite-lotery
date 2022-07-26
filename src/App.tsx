import { useState } from "react";
import NavigationMenu from "./components/navigation/curvedNav";

function App() {
  const [loteryObj, setLotery] = useState({ color: "#6BEFA3" });

  return (
    <div className="App">
      <NavigationMenu bg={loteryObj.color} />
    </div>
  );
}

export default App;
