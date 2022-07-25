import { useDispatch, useSelector } from 'react-redux';

import { postApi } from '../apis';
import {
  onAddNewPost,
  onCreating,
  onLoading,
  onSetErrorMessage,
  onSetOpenPost,
  onSetPosts,
} from '../store/posts/postsSlice';

export const usePostsStore = () => {
  const dispatch = useDispatch();
  const { errorMessage, isLoading, posts, openPost, isCreating } = useSelector(
    (state) => state.posts,
  );

  const startLoadingPosts = async () => {
    try {
      const newLt = new Date().getTime();
      dispatch(onLoading(newLt));

      const { data } = await postApi.get(`/all?lt=${newLt}`);
      dispatch(onSetPosts(data.posts));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
    }
  };

  const startLoadingOpenPost = async (id) => {
    try {
      dispatch(onLoading());

      const { data } = await postApi.get(`?id=${id}`);
      dispatch(onSetOpenPost(data.post));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
    }
  };

  const startLikeToAPost = async (postId) => {
    try {
      const { data } = await postApi.post(`/like?id=${postId}`);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const startCreateNewPosts = async (content) => {
    try {
      dispatch(onCreating());
      const { data } = await postApi.post('/create', { content });
      dispatch(onAddNewPost(data.post));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
    }
  };

  return {
    // properties
    errorMessage,
    isCreating,
    isLoading,
    openPost,
    posts,

    // methods
    startCreateNewPosts,
    startLikeToAPost,
    startLoadingOpenPost,
    startLoadingPosts,
  };
};
