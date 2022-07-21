import { useDispatch, useSelector } from 'react-redux';
import { postApi } from '../apis';
import { onLoading, onSetErrorMessage, onSetPosts, onSetOpenPost } from '../store/posts/postsSlice';

export const usePostsStore = () => {
  const dispatch = useDispatch();
  const { errorMessage, isLoading, posts, openPost } = useSelector((state) => state.posts);

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

  return {
    // properties
    errorMessage,
    isLoading,
    openPost,
    posts,

    // methods
    startLoadingPosts,
    startLoadingOpenPost,
  };
};
