import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import store from '../redux/configureStore';

const MockedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('Home Component', () => {
  it('renders succesfully', () => {
    render(<MockedHome />);
    const title = screen.getByText('Financial Data For Every Need');
    expect(title).toMatchSnapshot();
  });
});
