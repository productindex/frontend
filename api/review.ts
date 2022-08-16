import { authAxios } from "./axios";

export const ReviewsApi = {
  getStoreReviews: async (storeId) => {
    return authAxios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`,
      params: {
        storeId: storeId || undefined,
      },
    })
      .then(({ data }) => {
        return { success: true, data: data };
      })
      .catch((err) => {
        return { error: err.response.data.error };
      });
  },
};
