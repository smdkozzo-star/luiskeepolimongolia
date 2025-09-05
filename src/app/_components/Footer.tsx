"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6  px-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Company Credit */}
        <p className="text-xl text-center 3xl:text-left">
          © {new Date().getFullYear()} Luis Keepoli Mongolia. All rights
          reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <a className="hover:text-white transition-colors duration-300">
            Location: Хан-Уул дүүргийн 22-р хороо, Ар зайсан гудамжны 92 тоот
          </a>
          <a className="hover:text-white flex flex-col transition-colors duration-300">
            Contacts: +976 91915176
                     ; luiskeepoli0510@gmail.com            
          </a>
        </div>
      </div>
    </footer>
  );
}
