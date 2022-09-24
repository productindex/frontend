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
  reportStoreReview : async (reviewId, reason) => {
    return authAxios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/${reviewId}`,
      data: {
        reported_reason: reason,
      }

    })
    .then(({data}) => {
      return {success : true, data: data}
    })
    .catch(err => {
      return {errror: err.response?.data && err.response.data.error}
    })
  }
};
