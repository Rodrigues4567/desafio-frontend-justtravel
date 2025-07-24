
interface ReviewBarProps {
  label: string;
  count: number;
  percentage: number;
  color?: string;
}

export default function ReviewBar({ label, count, percentage, color = "#FFA800" }: ReviewBarProps) {
  return (
    <div className="flex items-center gap-[14px] w-full">
      {/* Barra */}
      <div className="flex items-center w-[180px] h-[26px] bg-[#E6E6E6] rounded-[2px] overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      {/* Label */}
      <span className="text-[#0A2156] text-[13px] whitespace-nowrap">
        {label} ({count})
      </span>
    </div>
  );
}
