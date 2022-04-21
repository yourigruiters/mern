import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const storageValue = localStorage.getItem('user');
const user = storageValue ? JSON.parse(storageValue) : '';

export interface AuthState {
  user: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  username: string;
  email: string;
  password: string;
}

const initialState: AuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: Register, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  },
);

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user: Login, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  },
);

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        register.rejected,
        (state, action: PayloadAction<any>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
          state.user = null;
        },
      )
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        login.rejected,
        (state, action: PayloadAction<any>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
          state.user = null;
        },
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
