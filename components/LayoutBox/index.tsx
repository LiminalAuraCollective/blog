// import BackToTop from "./BackToTop";

export default function LayoutBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white max-w-3xl mx-auto min-h-screen md:border-solid md:border-[#ccc] md:border-[1px] md:shadow-[2px_2px_8px_#aaa] md:mt-[1.5em] md:mb-[.5em] py-[1.5em] px-[1em]">
      {children}
      {/* <BackToTop /> */}
    </div>
  );
}
