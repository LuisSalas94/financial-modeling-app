import './App.css';
// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Details from './components/details/Details';
// Redux
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:idCompany" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
