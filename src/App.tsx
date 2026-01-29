import "./App.css";
import MainScreen4800x2080 from "./components/main-screen-4800";
//import MainScreen1280x800 from "./components/main-screen"

import ViewManager from "./components/view-manager";
import { DataProvider } from "./provider/dataProvider";
// import DiscreteProgressBar from "./components/discrete-progress-bar";

// import TestMain from "./components/test-main";
function App() {
    
  //const searchParams = new URLSearchParams(window.location.search);
  //const location = searchParams.get("location")
  //const isWuHan = (location && location === 'wh');
  return (
    <DataProvider>
      <ViewManager width={4800} height={2080}>
        <MainScreen4800x2080 />
    </ViewManager>
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
