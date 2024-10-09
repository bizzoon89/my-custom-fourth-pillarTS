import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postsLoadingStatus: 'idle'
}

export const postsAsync = createAsyncThunk(
  'posts/postsAsync',
  async () => {
    const { request } = useHttpTest();
    return await request("https://jsonplaceholder.typicode.com/posts?_limit=6");
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.postsLoadingStatus = 'loading';
    },
    fetchPostsSuccess: (state, action) => {
      state.postsLoadingStatus = 'succeeded';
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.postsLoadingStatus = 'failed';
      //state.error = action.payload;
    }
  }
    // },
    // extraReducers: {
    //   [fetchPosts.pending]: (state) => {
    //     state.postsLoadingStatus = 'loading';
    //   },
    //   [fetchPosts.fulfilled]: (state, action) => {
    //     state.postsLoadingStatus ='succeeded';
    //     state.posts = action.payload;
    //   },
    //   [fetchPosts.rejected]: (state, action) => {
    //     state.postsLoadingStatus = 'failed';
    //     state.error = action.error.message;
});

const { actions, reducer } = postsSlice;

export default reducer;
export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = actions;
