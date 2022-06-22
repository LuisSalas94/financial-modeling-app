import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Header from '../components/header/Header';

const MockedHeader = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);

describe('Header component', () => {
  it('renders succesfully', () => {
    render(<MockedHeader />);
    const listedItem = screen.getByText('Financial Modeling Prep');
    expect(listedItem).toMatchSnapshot();
  });
});
