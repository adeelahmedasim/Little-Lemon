import { render,fireEvent, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Main from './components/Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now!');
  expect(headingElement).toBeInTheDocument();
});

test('updateTimes reducer', () => {
  render(<Main/>)
  const initialState = { availableTime: ['10:00', '10:30', '11:00'] };
  const newDate = new Date('2023-11-01');
  const newState = updateTime(initialState, newDate);
  expect(newState.availableTime).toEqual(expect.arrayContaining(['10:00', '10:30', '11:00']));
});

test('initializeTimes reducer', () => {
  render(<Main/>)
  const initialState =  { availableTime: [] };
  const newState = fetchAPI(initialState);
  expect(newState.availableTime).toEqual(expect.any(Array));
});



test('disables submit button when fields are not filled', () => {
  render(<BookingForm />);

  const submitButton = screen.getByText(/Make Your reservation/i);
  expect(submitButton).toBeDisabled();

  // Fill in some fields
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2023-10-31' } });

  // Now, submit button should still be disabled
  expect(submitButton).toBeDisabled();

  // Fill in other fields
  const timeSelect = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeSelect, { target: { value: '12:00' } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '5' } });

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Now, submit button should be enabled
  expect(submitButton).toBeEnabled();
});

test('enables submit button when all fields are filled', () => {
  render(<BookingForm />);

  const submitButton = screen.getByText(/Make Your reservation/i);
  expect(submitButton).toBeDisabled();

  // Fill in all fields
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2023-10-31' } });

  const timeSelect = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeSelect, { target: { value: '12:00' } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '5' } });

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Now, submit button should be enabled
  expect(submitButton).toBeEnabled();
});
