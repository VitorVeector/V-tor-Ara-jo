import "./styles/scss/App.scss";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Animated } from "./components/Animated";
import { DataContextProvider } from "./Context/DataContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <DataContextProvider>
                <div className="App">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <Header />
                    <Animated />
                </div>
            </DataContextProvider>
        </BrowserRouter>
    );
}

export default App;
