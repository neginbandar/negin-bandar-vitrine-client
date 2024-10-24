import StoreProfile from "../../components/StoreProfile/StoreProfile";
import ProductThumbnail from "../../components/ProductThumbnail/ProductThumbnail";

export default function StoreProfilePage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <StoreProfile />
      <ProductThumbnail />
    </>
  );
}
