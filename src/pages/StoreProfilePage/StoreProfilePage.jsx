import StoreProfile from "../../components/StoreProfile/StoreProfile";
import ProductThumbnail from "../../components/ProductThumbnail/ProductThumbnail";
import { useParams } from "react-router-dom";

export default function StoreProfilePage() {
  return (
    <>
      <StoreProfile />
      <ProductThumbnail />
    </>
  );
}
