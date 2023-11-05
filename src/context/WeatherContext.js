import { createContext, useContext, useReducer } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: [],
  inputSearch: "",
  isLoading: false,
  isError: false,
  showContent: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        inputSearch: action.payload,
        showContent: false,
      };

    case "resetInput":
      return {
        ...state,
        inputSearch: "",
        isLoading: false,
        error: "",
        isError: false,
      };

    case "dataLoaded":
      return {
        ...state,
        weather: action.payload,
        isLoading: true,
        inputSearch: "",
        error: "",
        isError: false,
      };

    case "dataError":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isError: true,
      };

    case "showAnimation":
      return {
        ...state,
        showContent: true,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function WeatherProvider({ children }) {
  const [
    { weather, inputSearch, isLoading, showContent, error, isError },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        inputSearch,
        isLoading,
        showContent,
        error,
        isError,
        dispatch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("WeatherContext was used outside of the WeatherProvider");
  return context;
}

export { WeatherProvider, useWeather };
