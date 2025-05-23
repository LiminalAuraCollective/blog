import clsx from "clsx";

interface Props {
  containerClassName?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const spinSize = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-4",
  lg: "w-12 h-12 boreder-6",
};

export default function LoadingAnimation({
  containerClassName,
  className,
  size = "md",
}: Props) {
  return (
    <span
      className={clsx(
        "flex justify-center items-center h-full w-full bg-zinc-50 rounded-md",
        containerClassName
      )}
    >
      <span
        className={clsx(
          "animate-spin rounded-full border-zinc-100 border-t-transparent",
          spinSize[size],
          className
        )}
      />
    </span>
  );
}
