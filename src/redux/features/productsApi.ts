import { baseApi } from "../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => ({
        url: "/products",
        method: "GET",
        params: args,
      }),
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productsApi;
