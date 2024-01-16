/* eslint-disable no-unused-vars */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

interface mapState {
  // polution Object with male and female key
  population: Record<string, any> | null;
  loadingPopulation: boolean;
}

const initialState: mapState = {
  population: [
    {
      Male: 90,
      Female: 120,
    },
  ],
  loadingPopulation: false,
};

const getPopulationRequest: CaseReducer<
  mapState,
  PayloadAction<null>
> = state => ({
  ...state,
  loadingPopulation: true,
});

const getPopulationSuccess: CaseReducer<
  mapState,
  PayloadAction<Record<string, any>>
> = (state, action) => {
  return {
    ...state,
    population: action.payload,
    loadingPopulation: false,
  };
};

const getPopulationFailure: CaseReducer<
  mapState,
  PayloadAction<Record<string, any>>
> = (state, action) => ({
  ...state,
  loadingPopulation: false,
});

// eslint-disable-next-line no-unused-vars
const getPopulation: CaseReducer<
  mapState,
  PayloadAction<Record<string, any>>
> = (state, action) => {
  return {
    ...state,
    population: action.payload,
  };
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    getPopulation,
    getPopulationRequest,
    getPopulationSuccess,
    getPopulationFailure,
  },
});

export { mapSlice };

export default mapSlice.reducer;
