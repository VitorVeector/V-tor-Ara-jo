import './styles/scss/App.scss';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NoPage } from './pages/NoPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;