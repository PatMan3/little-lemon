import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './bookingUtils';

// ─── Mock window API functions ────────────────────────────────

const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
  window.submitAPI = jest.fn(() => true);
});

// ─── Helpers ──────────────────────────────────────────────────

const mockDispatch = jest.fn();

function renderBookingForm() {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={jest.fn()}
    />
  );
}

// ─── Static text in BookingForm ───────────────────────────────

test('Renders the Choose date label in BookingForm', () => {
  renderBookingForm();
  expect(screen.getByText(/choose date/i)).toBeInTheDocument();
});

test('Renders the Choose time label in BookingForm', () => {
  renderBookingForm();
  expect(screen.getByText(/choose time/i)).toBeInTheDocument();
});

test('Renders the Number of guests label in BookingForm', () => {
  renderBookingForm();
  expect(screen.getByText(/number of guests/i)).toBeInTheDocument();
});

test('Renders the Occasion label in BookingForm', () => {
  renderBookingForm();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('Renders the submit button in BookingForm', () => {
  renderBookingForm();
  expect(screen.getByRole('button', { name: /on click/i })).toBeInTheDocument();
});

// ─── initializeTimes and updateTimes ─────────────────────────

test('initializeTimes calls fetchAPI with today\'s date and returns times', () => {
  const times = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(times).toEqual(mockTimes);
});

test('updateTimes returns updated times from fetchAPI for UPDATE_DATE action', () => {
  const action = { type: 'UPDATE_DATE', date: '2026-04-01' };
  const result = updateTimes([], action);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-04-01'));
  expect(result).toEqual(mockTimes);
});

test('updateTimes returns same state for unknown action', () => {
  const state = mockTimes;
  const result = updateTimes(state, { type: 'UNKNOWN' });
  expect(result).toEqual(state);
});

// ─── HTML5 validation attributes ─────────────────────────────

test('date input has required attribute', () => {
  renderBookingForm();
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
});

test('time select has required attribute', () => {
  renderBookingForm();
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeRequired();
});

test('guests input has min of 1 and max of 10', () => {
  renderBookingForm();
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

// ─── React validation — submit button state ───────────────────

test('submit button is disabled when form is empty', () => {
  renderBookingForm();
  const button = screen.getByRole('button', { name: /on click/i });
  expect(button).toBeDisabled();
});

test('submit button is enabled when date, time and guests are valid', () => {
  renderBookingForm();
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2026-04-01' },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: '17:00' },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '2' },
  });
  const button = screen.getByRole('button', { name: /on click/i });
  expect(button).toBeEnabled();
});