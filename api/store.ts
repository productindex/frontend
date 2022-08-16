import { authAxios } from "./axios";

export const StoreApi = {
  getStoreInfo: async (storeId, storeName) => {
    return authAxios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores`,
      params: {
        storeId: storeId || undefined,
        storeName: storeName || undefined,
      },
    })
      .then(({ data }) => {
        return { success: true, data: data };
      })
      .catch((err) => {
        return { error: err?.response?.data?.error };
      });
  },
  getBusinessInfo: async (businessId) => {
    return authAxios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/business/${businessId}`,
    })
      .then(({ data }) => {
        return { success: true, data: data };
      })
      .catch((err) => {
        return { error: err?.response?.data?.error };
      });
  },
  getStoreInventory: async (storeId) => {
    return authAxios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/${storeId}/inventory`,
    })
      .then(({ data }) => {
        return { success: true, data: data };
      })
      .catch((err) => {
        return { error: err?.response?.data?.error };
      });
  },
  searchForStore: async (search, searchLocation, searchType) => {
    return authAxios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search`,
      params: {
        search: search,
        location: searchLocation,
        type: searchType
      }
    }).then(({ data }) => {
      return {success: true, data: data}
    })
    .catch((err) => {
      return {error: err?.response?.data?.error}
    })
  }
};
