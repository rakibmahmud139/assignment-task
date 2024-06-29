import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/productsApi";
import { Image } from "antd";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(id);

  return (
    <div>
      <div>
        <div>
          <Image />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
