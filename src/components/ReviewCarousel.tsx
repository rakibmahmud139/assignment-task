import { TReview } from "../types";

const ReviewCarousel = ({ item }: { item: TReview }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgb(176, 166, 149)",
          padding: "20px",
          borderRadius: "48px",
          boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1>{item?.reviewerName}</h1>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Reviewer Email : {item?.reviewerEmail}
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Rating : {item?.rating}
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Comment : {item?.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCarousel;
