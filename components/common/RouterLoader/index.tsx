import { RouterLoaderWrapper } from "./style";
import LogoLoader from "../../../public/logoLoader.svg";
import { useState } from "react";
import Image from "next/image";
import loader from "../../../public/RhombusLoader.gif";

const RouterLoader = () => {
  const [transition, setTransition] = useState<boolean>(false);

  return (
    <RouterLoaderWrapper>
      <LogoLoader />
      <Image
        src={loader.src}
        width={loader.width}
        height={loader.height}
        alt="loader"
      />
    </RouterLoaderWrapper>
  );
};

export default RouterLoader;
