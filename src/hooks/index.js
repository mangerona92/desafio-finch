export const useQuery = () => new URLSearchParams(new URL(window.location).search);

export default {
  useQuery,
};
