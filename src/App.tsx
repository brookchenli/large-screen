import "./App.css";
import MainScreen from "./components/main-screen";
import ViewManager from "./components/view-manager";
// import DiscreteProgressBar from "./components/discrete-progress-bar";

// import TestMain from "./components/test-main";
function App() {
  return (
    <ViewManager width={4800} height={2080}>
      <MainScreen />
    </ViewManager>
    // <div
    //   style={{
    //     width: "500px",
    //     height: "30px",
    //     margin: "100px",
    //     // backgroundColor: "lightblue",
    //   }}
    // >
    //   <DiscreteProgressBar
    //     total={50}
    //     current={30}
    //     completedGradient={["#00BABA", "#FFFFFF"]}
    //     pendingGradient={["#000000", "#FFFFFF"]}
    //   />
    // </div>
  );
}

export default App;
