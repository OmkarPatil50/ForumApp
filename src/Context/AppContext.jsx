import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { forumData } from "../Data/Data";

export function AppContextProvider({ children }) {
  const appReducer = (state, action) => {
    switch (action.type) {
      case "UPVOTE": {
        return {
          ...state,
          forumData: {
            ...state.forumData,
            posts: state.forumData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, upvotes: curr.upvotes + 1 }]
                : [...acc, curr];
            }, [])
          },
          filteredData: {
            ...state.filteredData,
            posts: state.filteredData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, upvotes: curr.upvotes + 1 }]
                : [...acc, curr];
            }, [])
          }
        };
      }

      case "DOWNVOTE": {
        return {
          ...state,
          forumData: {
            ...state.forumData,
            posts: state.forumData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, downvotes: curr.downvotes + 1 }]
                : [...acc, curr];
            }, [])
          },
          filteredData: {
            ...state.filteredData,
            posts: state.filteredData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, downvotes: curr.downvotes + 1 }]
                : [...acc, curr];
            }, [])
          }
        };
      }

      case "BOOKMARK_POST": {
        return {
          ...state,
          forumData: {
            ...state.forumData,
            posts: state.forumData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, isBookmarked: !curr.isBookmarked }]
                : [...acc, curr];
            }, [])
          },
          filteredData: {
            ...state.filteredData,
            posts: state.filteredData.posts.reduce((acc, curr) => {
              return curr.postId === action.payload
                ? [...acc, { ...curr, isBookmarked: !curr.isBookmarked }]
                : [...acc, curr];
            }, [])
          }
        };
      }

      case "SORT_BY_TIME": {
        return { ...state, sortByTime: true, sortByTrending: false };
      }

      case "SORT_BY_TRENDING": {
        return { ...state, sortByTime: false, sortByTrending: true };
      }

      case "UPDATE_FILTERED_LIST": {
        return {
          ...state,
          filteredData: { ...state.filteredData, posts: action.payload }
        };
      }

      default:
        return state;
    }
  };

  const initialValue = {
    forumData: forumData,
    filteredData: forumData,
    sortByTime: true,
    sortByTrending: false
  };

  const [state, dispatch] = useReducer(appReducer, initialValue);

  useEffect(() => {
    let data = state.forumData.posts;
    if (state.sortByTime) {
      data = data.sort((a, b) => {
        const timeA = new Date(a.createdAt);
        const timeB = new Date(b.createdAt);
        return timeB - timeA;
      });
    }

    if (state.sortByTrending) {
      data = data.sort((a, b) => {
        const differenceA = a.upvotes - a.downvotes;
        const differenceB = b.upvotes - b.downvotes;
        return differenceB - differenceA;
      });
    }

    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [state.sortByTime, state.sortByTrending]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
