import "./styles/scss/App.scss";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Animated } from "./components/Animated";
import { DataContextProvider } from "./Context/DataContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function App() {
    console.log(process.env.ACCESS_MASTER)
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <BrowserRouter>
        <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#37373f",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onClick: {
                                        enable: true,
                                        mode: "push"
                                    },
                                    resize: true,
                                },
                                modes: {
                                    repulse: {
                                        distance: 200,
                                        duration: 5,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff"    
                                },
                                links: {
                                    color: "#00ccff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.4,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: .5,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1300,
                                    },
                                    value: 40,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "polygon",
                                },
                                size: {
                                    value: { min: .6, max: 2.5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
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
