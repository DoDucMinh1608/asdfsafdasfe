import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App';
import Starblast from './pages/starblast/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<App />} />
        <Route path='starblast/*' element={<Starblast />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
