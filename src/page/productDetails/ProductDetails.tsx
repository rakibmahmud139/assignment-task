import { Carousel, Image, Tag } from "antd";
import { useParams } from "react-router-dom";
import ReviewCarousel from "../../components/ReviewCarousel";
import { useGetSingleProductQuery } from "../../redux/features/productsApi";
import { TReview } from "../../types";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(id);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "24px",
        }}
      >
        <div>
          <Image src={product?.thumbnail} />
        </div>
        <div>
          <h1>{product?.title}</h1>

          <p style={{ fontSize: "24px", color: "#8c8c8c" }}>
            Brand : {product?.brand}
          </p>

          <p style={{ fontSize: "24px", color: "#8c8c8c" }}>
            Category : {product?.category}
          </p>

          <div>
            <p style={{ fontSize: "24px", color: "#8c8c8c" }}>Tags </p>
            {product?.tags?.map((tag: string) => {
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
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
              flexDirection: "row",
            }}
          >
            <p
              style={{
                background: "#9254de",
                paddingRight: "16px",
                paddingLeft: "16px",
                paddingTop: "8px",
                paddingBottom: "8px",
                color: "white",
                borderRadius: "48px",
              }}
            >
              Stock : {product?.stock}
            </p>
            <p style={{ fontSize: "36px", color: "#8c8c8c" }}>
              ${product?.price}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "120px",
        }}
      >
        <p style={{ width: "600px", fontSize: "20px", color: "#8c8c8c" }}>
          {product?.description}
        </p>
      </div>
      <div>
        <h1
          style={{
            borderBottom: "6px solid #f759ab",
            width: "48px",
          }}
        >
          Reviews
        </h1>
        <Carousel autoplay>
          {product?.reviews?.map((review: TReview, index: number) => (
            <ReviewCarousel key={index} item={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetails;
