import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PageRoutes from "./Pages/PageRoutes";
import {SetSelectedId} from "./store/SetSelectedId";
import {SelectedId} from "./store/SelectedId";

const App = () => {
    const [pid, setPid] = useState(0);
    return (
             <div>
                 <SetSelectedId.Provider value={setPid}>
                     <SelectedId.Provider value={pid}>
                        <PageRoutes />
                     </SelectedId.Provider>
                 </SetSelectedId.Provider>
             </div>
    );
};

export default App;