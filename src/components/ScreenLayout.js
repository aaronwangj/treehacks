export default function ScreenLayout({ children }) {
  return (
    <div className="w-screen min-h-screen h-full bg-gradient-to-r from-transparent to-[#72ecfc] flex">
      <div className="w-full h-full p-10">{children}</div>
    </div>
  );
}
