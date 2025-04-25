import { parseISO, format } from "date-fns";
import { AlbumProps } from "@/lib/types";
import ViewImgBox from "../ViewImgBox";

interface Props extends AlbumProps {
    category?:string;
}

export default function PhotoGraphyCard({ link, date, description }: Props) {
  const _date = parseISO(date);
  // 获取月份名称（简写）
  const month = format(_date, "MMM"); // 'april'
  // 获取星期几（全名）
  const dayOfWeek = format(_date, "EEEE"); // 输出取决于时区，例如 'Tuesday' 或 'Wednesday'
  // 获取当月天数
  const daysInMonth = format(_date, "dd"); // 指定月份的指定天数

  return (
    <div className="relative bg-white p-6 shadow-sm md:w-xs h-auto">
      <h1 className="mb-2 text-sm capitalize">{month}</h1>
      <div className="flex mb-2 justify-between items-end">
        <span className="text-4xl leading-none font-bold">{daysInMonth}</span>
        <span className="text-sm capitalize">{dayOfWeek}</span>
      </div>
      <ViewImgBox src={link} />
      <div className="text-xs line-clamp-2 mt-2 min-h-[32px]">{description}</div>
    </div>
  );
}
