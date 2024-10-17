import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AuthState {
  posts: IPost[] | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  posts: null,
  isLoading: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    clearPosts: (state) => {
      state.posts = null;
      state.isLoading = false;
    },
  },
});

export const { setPosts, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
