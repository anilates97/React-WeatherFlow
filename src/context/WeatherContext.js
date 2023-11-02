import { createContext, useContext, useReducer } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: [],
  inputSearch: "",
  status: "loading",
  showContent: false,
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
  const [{ weather, inputSearch, status, showContent }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <WeatherContext.Provider
      value={{ weather, inputSearch, status, showContent, dispatch }}
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
