import { baseApi } from "../api/baseApi";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/products/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
