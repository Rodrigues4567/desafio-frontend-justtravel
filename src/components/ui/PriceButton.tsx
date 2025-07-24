
interface PriceButtonProps {
  label: string;
}

export default function PriceButton({ label }: PriceButtonProps) {
  return (
    <button
      className="border-[1px] text-[13px] text-[#cacaca] p-[5px] rounded-[3px] cursor-pointer hover:bg-[#4070F4] hover:border-none hover:text-[#eeeeee] transition-colors"
    >
      {label}
    </button>
  );
}
