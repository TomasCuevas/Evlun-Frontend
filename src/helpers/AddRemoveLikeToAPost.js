import postApi from '../apis/postApi';
import { usePostsStore } from '../hooks/usePostsStore';

export const addRemoveLikeToAPost = async (postId) => {
  const { data } = await postApi.post(`/like?id=${postId}`);

  return data;
};
