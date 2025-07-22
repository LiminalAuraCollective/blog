import { metaConfig } from "@/lib/metadata";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1 className="text-xl font-bold">
        <Link href="/">{metaConfig.title}</Link>
      </h1>
      <p className="my-4">
        视频适合娱乐消遣与信息传播，文字利于深度学习和独立思考
      </p>
    </>
  );
}
