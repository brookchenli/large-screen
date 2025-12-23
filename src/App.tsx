import "./App.css";
import MainScreen from "./components/main-screen";
import ViewManager from "./components/view-manager";

function App() {
  return (
    <ViewManager width={3784} height={1376}>
      <MainScreen />
    </ViewManager>
  );
}

export default App;
