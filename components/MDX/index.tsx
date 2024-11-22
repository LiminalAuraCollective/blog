import { useMDXComponent } from "next-contentlayer2/hooks";
import { FC } from "react";
import Imagebox from "./Imagebox";

interface MDXProps {
  code: string;
}

const MDX: FC<MDXProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="prose max-w-full">
      <Component
        components={
          {
            img: Imagebox,
          }
        }
      />
    </div>
  );
};

export default MDX;
