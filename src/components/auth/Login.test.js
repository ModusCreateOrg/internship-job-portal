import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

test('allows the user to login successfully', async () => {
  render(<Login />);

  // fill out the form
  fireEvent.change(screen.getByLabelText('Username'), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByRole('button', {name: 'Login'}))

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  // const alert = await screen.findByRole('alert')
})
