import { useDispatch, useSelector } from 'react-redux';

import { commentApi } from '../apis';
import {
  onAddNewComment,
  onCreating,
  onLoading,
  onSetComments,
  onSetErrorMessage,
} from '../store/comments/commentsSlice';

export const useCommentsStore = () => {
  const { comments, errorMessage, isCreating, isLoading } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const startLoadingComments = async (postId) => {
    try {
      const newLt = new Date().getTime();
      dispatch(onLoading(newLt));

      const { data } = await commentApi.get(`?id=${postId}&lt=${newLt}`);
      dispatch(onSetComments(data.comments));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
    }
  };

  const startCreateNewComment = async (content, postId) => {
    try {
      dispatch(onCreating());
      const { data } = await commentApi.post(`/create?id=${postId}`, { content });
      dispatch(onAddNewComment(data.comment));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response.data.msg));
    }
  };

  const startLikeToAComment = async (commentId) => {
    try {
      const { data } = await commentApi.post(`/like?id=${commentId}`);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // properties
    comments,
    errorMessage,
    isCreating,
    isLoading,

    // methods
    startCreateNewComment,
    startLikeToAComment,
    startLoadingComments,
  };
};
