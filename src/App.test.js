import { render, screen } from '@testing-library/react';
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