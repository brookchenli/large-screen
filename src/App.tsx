import "./App.css";
//import MainScreen1280x800 from "./components/main-screen"

// import ViewManager from "./components/view-manager";
import { DataProvider } from "./provider/dataProvider";
import MainScreenX from "./components/main-screen-x";
// import DiscreteProgressBar from "./components/discrete-progress-bar";

// import TestMain from "./components/test-main";
function App() {
    
  //const searchParams = new URLSearchParams(window.location.search);
  //const location = searchParams.get("location")
  //const isWuHan = (location && location === 'wh');
  return (
    <DataProvider>
      <MainScreenX />
  </DataProvider>
    
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
