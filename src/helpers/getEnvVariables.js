export const getEnvVariables = () => {
  return {
    VITE_API_AUTH_URL: import.meta.env.VITE_API_AUTH_URL,
  };
};
