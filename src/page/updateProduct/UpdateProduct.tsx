import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Select, message } from "antd";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/productsApi";
import { useGetAllCategoriesQuery } from "../../redux/features/categoryApi";
import { FormValues, TCategory } from "../../types";

const { Option } = Select;

const UpdateProduct = () => {
  const { id } = useParams();

  const [form] = Form.useForm();
  const { data: product, isLoading: productLoading } =
    useGetSingleProductQuery(id);
  const { data: categories } = useGetAllCategoriesQuery({});
  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product, form]);

  const onFinish = async (values: FormValues) => {
    try {
      await updateProduct({ id, ...values }).unwrap();
      message.success("Product updated successfully");
    } catch (error) {
      message.error("Failed to update product");
    }
  };

  if (productLoading) return <p>Loading...</p>;

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={product}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select>
          {categories &&
            categories.map((category: TCategory) => (
              <Option key={category.slug} value={category.name}>
                {category.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} style={{ display: "flex", marginBottom: 8 }}>
                <Form.Item
                  {...restField}
                  name={[name, "review"]}
                  // fieldKey={[fieldKey, "review"]}
                  rules={[{ required: true, message: "Review is required" }]}
                >
                  <Input placeholder="Review" />
                </Form.Item>
                <Button
                  type="text"
                  onClick={() => remove(name)}
                  style={{ marginLeft: 8 }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block>
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={updating}>
          Update Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProduct;
