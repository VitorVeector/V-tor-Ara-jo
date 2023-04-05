import './styles/scss/App.scss';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Animated } from './components/Animated';

import { theme } from './styles/mui/theme'
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Header/>
                    <Animated/>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;