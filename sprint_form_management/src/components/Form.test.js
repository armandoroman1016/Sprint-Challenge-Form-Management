import React from 'react';
import { render , fireEvent, getByTestId} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import FormikForm from './Form.js';

describe('<Form />', () => {
    it('renders w/out crashing', () => {
        render(<FormikForm />) 
    })
    it('doesnt submit empty form', () => {
        const click = jest.fn();
        const { getByText } = render(<FormikForm />)
        const submitButton = getByText(/submit/i)
        fireEvent.click(submitButton)
        expect(click).not.toHaveBeenCalled()
      })
      it('submits', () => {
        const click = jest.fn()
        const { getAllByTestId , getByTestId, getByText} = render(<FormikForm />)
        const fields = getAllByTestId(/field/i)
        fields.forEach(field => field.defaultValue = 'jdcbjisdbi@gmkosdnoa.com')
        const checkbox = getByTestId(/checkbox/i)
        checkbox.defaultValue = true
        const submitButton = getByText(/submit/i)
      })
})