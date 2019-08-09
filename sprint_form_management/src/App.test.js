import React from 'react';
import { render , fireEvent, getByTestId} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import App from './App';
import Cards from './components/UserCard'


describe('<App />', () => {
  it('renders w/out crashing', () => {
    render(<App />)
  })
  
})
