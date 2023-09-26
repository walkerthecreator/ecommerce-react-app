import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import  { StoreProvider } from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreProvider >
            <App />
        </StoreProvider>
    </BrowserRouter>
)
