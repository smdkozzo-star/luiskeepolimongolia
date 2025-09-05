export default function Header() {
  return (
    <div className="bg-gray-900 w-full flex justify-center gap-4 items-center 
                    h-[70px] sm:h-[80px] md:h-[90px] 
                    text-2xl sm:text-4xl md:text-6xl lg:text-7xl 
                    font-bold text-white">
                       <img
                               src="/logo.jpg"
                               alt="A"
                               width={80}
                               height={80}
                               className="rounded-full  max-w-full h-auto"
                             />
      Luis Keepoli Mongolia LLC
    </div>
  );
}
