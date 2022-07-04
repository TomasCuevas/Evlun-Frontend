import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues(initialState);
  };

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const checkOneOnly = ({ target }) => {
    const toggle = !formValues[target.name];
    setFormValues({
      [target.name]: toggle,
    });
  };

  return {
    ...formValues,
    formValues,
    onInputChange,
    reset,
    checkOneOnly,
  };
};
