import './styles/scss/App.scss';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Animated } from './components/Animated';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Animated/>
            </div>
        </BrowserRouter>
    );
}

export default App;