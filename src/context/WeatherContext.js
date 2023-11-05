import { createContext, useContext, useReducer } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: [],
  inputSearch: "",
  status: "loading",
  showContent: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        inputSearch: action.payload,
        showContent: false,
      };

    case "dataLoaded":
      return {
        ...state,
        weather: action.payload,
        status: "loaded",
        inputSearch: "",
        error: false,
      };

    case "dataError":
      return {
        ...state,
        error: true,
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
  const [{ weather, inputSearch, status, showContent, error }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        inputSearch,
        status,
        showContent,
        error,

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
