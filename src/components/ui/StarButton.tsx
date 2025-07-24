import { FaStar } from "react-icons/fa";

interface StarButtonProps {
  stars: number;
  countText: string;
}

export default function StarButton({ stars, countText }: StarButtonProps) {
  return (
    <button className="flex justify-center items-center gap-[3px] border border-gray-300 text-[13px] text-[#ebebeb] p-[5px] rounded-[3px] cursor-pointer hover:bg-[#4070F4] hover:border-none transition-colors">
      {Array.from({ length: stars }).map((_, i) => (
        <FaStar key={i} className="text-[#FFA800] text-[1.2rem]" />
      ))}
      <span className="text-[12px] text-[#cacaca]">{countText}</span>
    </button>
  );
}
