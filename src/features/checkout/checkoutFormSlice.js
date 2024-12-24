import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  },
  errors: {},
};

const checkoutFormSlice = createSlice({
  name: 'checkoutForm',
  initialState,
  reducers: {
    updateFormData(state, action) {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    validateForm(state) {
      const errors = {};
      const { name, email, address, cardNumber, expiration, cvv } = state.formData;

      if (!name) errors.name = 'Name is required';
      if (!email) errors.email = 'Email is required';
      if (!address) errors.address = 'Address is required';
      if (!cardNumber) errors.cardNumber = 'Card Number is required';
      if (!expiration) errors.expiration = 'Expiration date is required';
      if (!cvv) errors.cvv = 'CVV is required';

      state.errors = errors;
    },
    clearErrors(state) {
      state.errors = {};
    },
    clearForm(state) {
      state.formData = initialState.formData;
      state.errors = {};
    },
  },
});

export const { updateFormData, validateForm, clearErrors, clearForm } = checkoutFormSlice.actions;

export default checkoutFormSlice.reducer;
