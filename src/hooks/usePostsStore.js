import { useDispatch, useSelector } from 'react-redux';
import { postApi } from '../apis';
import { onLoading, onSetErrorMessage, onSetPosts } from '../store/posts/postsSlice';

export const usePostsStore = () => {
  const dispatch = useDispatch();
  const { errorMessage, isLoading, posts } = useSelector((state) => state.posts);

  const startLoading = async () => {
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

  return {
    // properties
    errorMessage,
    isLoading,
    posts,

    // methods
    startLoading,
  };
};
