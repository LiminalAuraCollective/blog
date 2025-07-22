import { listMinds } from "@/lib/posts";
import AnchorLink from "../anchor-link";
import { MindType } from "@/lib/types";

interface Props {
  count?: number;
}

export default function MindsList({ count }: Props) {
  const mindCount = count ? listMinds.slice(0, count) : listMinds;
  return (
    <ul className="latest-post-list">
      {mindCount.map((mind: MindType) => {
        return (
          <li key={mind.title}>
            <AnchorLink href="#">{mind.title}</AnchorLink>
            <ul className="list-[circle] pl-0">
              {mind?.minds?.map((m) => {
                return (
                  <li key={m}>
                    <p className="inline my-2">
                      <b>橘子</b>：<span>{m}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
