import React, { Component } from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./src/reducers";
import AppNavigation from "./src/appNavigation/router"
// import Home from "./screens/Home";
// import RNBootSplash from "react-native-bootsplash";


let store = createStore(allReducers);

const App =()=> {
  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await RNBootSplash.hide({ fade: true });
  //     console.log("Bootsplash has been hidden successfully");
  //   });
  // }, []);
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
}
export default App;