
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-[1600px] mx-auto">
      {children}
    </div>
  );
}
