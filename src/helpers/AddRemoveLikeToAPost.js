import postApi from '../apis/postApi';

export const addRemoveLikeToAPost = async (postId) => {
  const { data } = await postApi.post(`/like?id=${postId}`);

  return data;
};
