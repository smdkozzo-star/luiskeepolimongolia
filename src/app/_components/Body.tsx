"use client";

import Image from "next/image";

export default function Body() {
  const description1 = `Луис кееполи Монголиа ХХК нь БНХАУ-ын ӨМӨЗО-ы Бугат хотын Өвөрмонголын Луис кееполи туршилт, технологи ХХК-ий хөрөнгө оруулалтаар “Монгол Улсад нүүрсний сорилт, шинжилгээний лаборатори болон техник хяналтын нэгж байгуулах төсөл-ийг хэрэгжүүлэх зориулалтаар 2024 оны 5-р сард байгуулагдсан.
  Энэхүү төслийн хүрээнд тус компани нь 2024 оны 6-р сараас эхлэн Улаанбаатар хотын Хан-Уул дүүргийн 22-р хороо, Ар зайсан гудамжны 92 тоотод байрлах иргэн Д.Уранчимэгийн 510м2 талбай бүхий 3 давхар барилгад Монгол Улсын хобогдох хууль, дүрэм, журмын хүрээнд олон улсын стандартад нийцсэн жишиг лабораторийг байгуулсан.`;
  
  const description2 = `Техникийн хяналтын ажилтнууд нь СХЗГазар болон Монгол Улсын Шинжлэх ухаан, технологийн их сургуулиас 2019-2025 онуудад зохион байгуулагдсан сургалтуудад хамрагдаж мэргэшсэн бөгөөд 2024 оны 1-р сараас Дорноговь аймгийн нутагт үйл ажиллагаагаа явуулдаг “Айл баян” ХХК, “Түмэн айл” ХХК-ий уурхайн нүүрсний овоолгын талбайд дээж авах, ачилтын хяналт хийх ажлыг гүйцэтгэж байна.`;
  
  const description3 = `Тус компаний сорилтын лаборатори БНХАУ-ын ӨМӨЗО-ы Бугат хотын “Өвөрмонголын Луис кееполи туршилт, технологи” ХХК-ий 670,000 ам.долларийн хөрөнгө оруулалтаар Хятад Улсын “WILLSUI”, “SI-TIAN”, “WEPER” фирмийн 35 нэр төрлийн орчин үеийн дэвшилтэт тоног төхөөрөмжөөр тоноглогдсон. Өдөрт чулуун, хүрэн, коксжсон нүүрсний 50-60 дээжинд Монгол Улсын болон Хятад Улсын стандарт, арга аргачилалын дагуу хийж гүйцэтгэх чадвартай юм.`;

  return (
    <div className="flex flex-col gap-12 md:gap-20">
      {/* Section 1 */}
      <section className="text-black min-h-[300px]">
        <div className="container mx-auto px-4 py-6 text-center flex flex-col items-center">
          <Image
            src="/zurg4.jpg"
            alt="A"
            width={400}
            height={400}
            className="rounded-full mb-6 max-w-full h-auto"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Танилцуулга</h1>
          <p className="text-justify leading-relaxed">{description1}</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-black min-h-[300px]">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <Image
              src="/zurg1.jpg"
              alt="Sample System"
              width={200}
              height={150}
              className="rounded-full max-w-full h-auto"
            />
            <Image
              src="/zurg2.jpg"
              alt="Sample System"
              width={200}
              height={150}
              className="rounded-full max-w-full h-auto"
            />
            <Image
              src="/zurg3.jpg"
              alt="Sample System"
              width={200}
              height={150}
              className="rounded-full max-w-full h-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Нүүрсний сорилт, шинжилгээ
          </h1>
          <p className="text-justify leading-relaxed">{description3}</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-black min-h-[300px]">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <Image
              src="/zurg6.jpg"
              alt="Sample System"
              width={200}
              height={200}
              className="rounded-full max-w-full h-auto"
            />
            <Image
              src="/zurag7.JPG"
              alt="Sample System"
              width={200}
              height={200}
              className="rounded-full max-w-full h-auto"
            />
            <Image
              src="/zurag 8.jpg"
              alt="Sample System"
              width={200}
              height={200}
              className="rounded-full max-w-full h-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Техникийн хяналт</h1>
          <p className="text-justify leading-relaxed">{description2}</p>
        </div>
      </section>
    </div>
  );
}
