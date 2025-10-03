import Image from "next/image";
export default function Header() {
  return (
    <div
      className="bg-gray-900 w-full flex justify-center gap-4 items-center 
                    h-[60px] sm:h-[60px] md:h-[60px] 
                    text-2xl sm:text-4xl md:text-6xl lg:text-7xl 
                    font-bold text-white"
    >
      <div className="flex">
        <Image
          src="/logo.jpg"
          alt="A"
          width={70}
          height={50}
          className="rounded-full p-2"
        />
        <p className="text-6xl">Luis Keepoli Mongolia LLC</p>
      </div>
    </div>
  );
}
