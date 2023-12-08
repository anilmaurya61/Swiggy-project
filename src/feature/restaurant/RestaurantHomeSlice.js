import { createSlice } from '@reduxjs/toolkit';


const AddItems = createSlice({
  name: 'form',
  initialState: {
    itemName: '',
    price: '',
    description: '',
    isVegetarian: false,
    itemNameError: '',
    priceError: '',
    isLoading: false,
  },
  reducers: {
    setField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setCheckbox: (state, action) => {
      const { name, checked } = action.payload;
      state[name] = checked;
    },
    setError: (state, action) => {
      const { name, error } = action.payload;
      state[`${name}Error`] = error;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearForm: (state) => {
      state.itemName = '';
      state.price = '';
      state.description = '';
      state.isVegetarian = false;
      state.itemNameError = '';
      state.priceError = '';
      state.isLoading = false;
    },
  },
});

export const {
  setField,
  setCheckbox,
  setError,
  setLoading,
  clearForm,
} = AddItems.actions;

export const AddItemsReducer = AddItems.reducer;

// Second Slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    selectedStatus: '',
    selectedOrderId: null,
    currentPage: 1,
    pageSize: 5,
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    setSelectedOrderId: (state, action) => {
      state.selectedOrderId = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    handleStatusChange: (state, action) => {
      const { orderId, newStatus } = action.payload;
      state.selectedOrderId = orderId;
      state.selectedStatus = newStatus;
      state.orders = state.orders.map((order) =>
        order.orderId === orderId ? { ...order, orderStatus: newStatus } : order
      );
    },
  },
});

export const {
  setOrders,
  setSelectedStatus,
  setSelectedOrderId,
  setCurrentPage,
  handleStatusChange,
} = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;