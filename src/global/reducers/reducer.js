import userReducer from "./userReducer";
import postsReducer from "./postsReducer";

export default function reducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action)
  }
}