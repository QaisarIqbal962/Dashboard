import "./App.css";
import Main from "./sections/Main";
import Sidebar from "./sections/Sidebar";

function App() {
  return (
    <main className="w-full bg-slate-200 h-screen flex justify-between items-start">
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
