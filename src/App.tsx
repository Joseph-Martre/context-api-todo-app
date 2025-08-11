import { TaskApp } from "./components/TaskApp";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div id="app">
      <Toaster position="bottom-center" />
      <TaskApp />
    </div>
  );
}

export default App;
