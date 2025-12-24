import "./App.css";
import MainScreen from "./components/main-screen";
import ViewManager from "./components/view-manager";
import TestMain from "./components/test-main";
function App() {
  return (
    <ViewManager width={4800} height={2080}>
      <MainScreen />
    </ViewManager>
  );
}

export default App;
