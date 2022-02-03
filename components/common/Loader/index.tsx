import { LoaderWrapper } from "./style";
import loader from "../../../public/RhombusLoader.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Image
        src={loader.src}
        width={loader.width}
        height={loader.height}
        alt="loader"
      />
    </LoaderWrapper>
  );
};

export default Loader;
