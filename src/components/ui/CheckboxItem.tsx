
interface CheckboxItemProps {
  id: string;
  label: string;
}

export default function CheckboxItem({ id, label }: CheckboxItemProps) {
  return (
    <div className="flex items-center gap-[8px]">
      <input
        className="w-[19px] h-[19px] accent-[#4070F4] cursor-pointer"
        type="checkbox"
        id={id}
      />
      <label
        className="text-[#0A2156] text-[13px] cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
