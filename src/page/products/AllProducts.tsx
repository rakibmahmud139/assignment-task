import { Table, TableColumnsType, Space, Tag } from "antd";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/productsApi";
import { TProduct } from "../../types";

export type TTableData = Pick<
  TProduct,
  | "title"
  | "category"
  | "brand"
  | "description"
  | "price"
  | "rating"
  | "id"
  | "tags"
>;

const AllProducts = () => {
  const { data: products, isFetching } = useGetAllProductsQuery({});

  const tableData = products?.products?.map(
    ({
      id,
      title,
      description,
      brand,
      category,
      price,
      rating,
      tags,
    }: TProduct) => ({
      key: id,
      title,
      description,
      category,
      price,
      rating,
      brand,
      tags,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "beauty") {
              color = "volcano";
            }
            if (tag === "perfumes") {
              color = "#13c2c2";
            }
            if (tag === "fragrances") {
              color = "#f759ab";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <NavLink to={`/products/${item.key}`}>Details</NavLink>
            <NavLink to={`/products/update/${item.key}`}>Update</NavLink>
          </Space>
        );
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AllProducts;
