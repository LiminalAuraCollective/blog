import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  size?: "large" | "small" | "default";
  color?: string;
}

const styleSize = {
  default: "2.4em",
  large: "3em",
  small: "1.5em",
};

function Loading({ className, size = "default", color }: Props) {
  const fillColor = color || "#333";
  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center",
        className
      )}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        style={{
          width: styleSize[size],
          height: styleSize[size],
          display: "block",
        }}
        viewBox="0 0 24 30"
        xmlSpace="preserve"
      >
        <rect x="0" y="13" width="4" height="5" fill={fillColor}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
        </rect>
        <rect x="10" y="13" width="4" height="5" fill={fillColor}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
        </rect>
        <rect x="20" y="13" width="4" height="5" fill={fillColor}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </svg>
    </div>
  );
}

export default Loading;
