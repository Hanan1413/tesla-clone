import { useGlobalContext } from "./Context";
import Submenu from "./components/Submenu";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main>
      <Submenu />
      <Sidebar />
      <HomePage />
    </main>
  );
};
export default App;
