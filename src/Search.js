import { useReducer } from "react";

const initialState = {
  weather: [],
  inputSearch: "",
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        inputSearch: action.payload,
      };

    case "searchCity":
      return {
        ...state,
        weather: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function Search() {
  const [{ weather, inputSearch }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleSearch(city) {}

  return (
    <form onSubmit={handleSearch}>
      <input
        className="searchInput"
        type="text"
        placeholder="Type city..."
        value={inputSearch}
        onChange={(e) =>
          dispatch({ type: "inputChange", payload: e.target.value })
        }
      />
    </form>
  );
}

export default Search;
