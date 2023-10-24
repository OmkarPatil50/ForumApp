import { useContext } from "react";
import { AppContext } from "..";

export function SortBar() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="sort-bar">
      <h3 className="sort-bar-heading">Sort By</h3>
      <select
        name="sort"
        onChange={(event) =>
          dispatch({
            type:
              event.target.value === "Latest"
                ? "SORT_BY_TIME"
                : "SORT_BY_TRENDING"
          })
        }
      >
        <option>Latest</option>
        <option>Trending</option>
      </select>
    </div>
  );
}
