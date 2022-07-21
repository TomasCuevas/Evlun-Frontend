import { useSelector, useDispatch } from 'react-redux';
import {
  onLoading,
  onSetErrorMessage,
  onSetPosts,
  onSetUser,
  onStopLoading,
} from '../store/profile/profileSlice';
import { postApi, userApi } from '../apis';

export const useProfileStore = () => {
  const { isLoading, user, errorMessage, posts } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const startLoading = async (username) => {
    try {
      const newLt = new Date().getTime();
      dispatch(onLoading(newLt));

      const { data: userData } = await userApi.get(`?username=${username}`);
      dispatch(onSetUser(userData.user));

      const { data: postData } = await postApi.get(`/user?id=${userData.user._id}&lt=${newLt}`);
      dispatch(onSetPosts(postData.posts));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
      dispatch(onStopLoading());
    }
  };

  return {
    // properties
    ...user,
    errorMessage,
    isLoading,
    posts,
    user,

    // methods
    startLoading,
  };
};
