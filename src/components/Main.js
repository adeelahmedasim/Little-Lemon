import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import BookingConfirm from './BookingConfirm';

export default function Main() {
  const seedRandom = (seed) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
      return (s = (s * a) % m) / m;
    }
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date);
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      } else if (random() > 0.5) {
        result.push(i + ':30');
      }
    }

    return result;
  }

  const submitAPI = function(formData) {
    return true;
  }

  function updateTime(state, date) {
    return { availableTime: fetchAPI(new Date()) };

  }

  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/BookingConfirm');
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/booking' element={<Booking availableTime={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path='/BookingConfirm' element={<BookingConfirm />} />
      </Routes>
    </main>
  );
}
