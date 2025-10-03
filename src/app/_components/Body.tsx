"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Globe2Icon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Body() {
  const [lang, setLang] = useState<"mn" | "cn">("mn");

  const description1 = `Луис кееполи Монголиа ХХК нь БНХАУ-ын ӨМӨЗО-ы Бугат хотын Өвөрмонголын Луис кееполи туршилт, технологи ХХК-ий хөрөнгө оруулалтаар "Монгол Улсад нүүрсний сорилт, шинжилгээний лаборатори болон техник хяналтын нэгж байгуулах төсөл-ийг хэрэгжүүлэх зориулалтаар 2024 оны 5-р сард байгуулагдсан.
  Энэхүү төслийн хүрээнд тус компани нь 2024 оны 6-р сараас эхлэн Улаанбаатар хотын Хан-Уул дүүргийн 22-р хороо, Ар зайсан гудамжны 92 тоотод байрлах иргэн Д.Уранчимэгийн 510м2 талбай бүхий 3 давхар барилгад Монгол Улсын хобогдох хууль, дүрэм, журмын хүрээнд олон улсын стандартад нийцсэн жишиг лабораторийг байгуулсан.`;

  const description2 = `Техникийн хяналтын ажилтнууд нь СХЗГазар болон Монгол Улсын Шинжлэх ухаан, технологийн их сургуулиас 2019-2025 онуудад зохион байгуулагдсан сургалтуудад хамрагдаж мэргэшсэн бөгөөд 2024 оны 1-р сараас Дорноговь аймгийн нутагт үйл ажиллагаагаа явуулдаг "Айл баян" ХХК, "Түмэн айл" ХХК-ий уурхайн нүүрсний овоолгын талбайд дээж авах, ачилтын хяналт хийх ажлыг гүйцэтгэж байна.`;

  const description3 = `Тус компаний сорилтын лаборатори БНХАУ-ын ӨМӨЗО-ы Бугат хотын "Өвөрмонголын Луис кееполи туршилт, технологи" ХХК-ий 670,000 ам.долларийн хөрөнгө оруулалтаар Хятад Улсын "WILLSUI", "SI-TIAN", "WEPER" фирмийн 35 нэр төрлийн орчин үеийн дэвшилтэт тоног төхөөрөмжөөр тоноглогдсон. Өдөрт чулуун, хүрэн, коксжсон нүүрсний 50-60 дээжинд Монгол Улсын болон Хятад Улсын стандарт, арга аргачилалын дагуу хийж гүйцэтгэх чадвартай юм.`;

  const cndescription1 = `Luis Keepoli Mongolia LLC was established in May 2024 with the investment of Luis Keepoli Testing Technology Co., Ltd. in Bugat City, Inner Mongolia, China, to implement the project of "Establishing a coal sampling and testing laboratory and technical control unit in Mongolia."
  As part of this project, the company established a model laboratory that meets international standards in accordance with the laws, regulations, and rules applicable to Mongolia in a 3-story building with an area of 510m2 located at 92 Ar Zaisan Street, Khan-Uul District, Ulaanbaatar City, starting from June 2024.`;

  const cndescription2 = `The technical control staff have been trained and certified in training organized by the SCZG and the Mongolian University of Science and Technology from 2019 to 2025. Since January 2024, they have been carrying out sampling and loading control work at the coal stockpile sites of "Ail Bayan" LLC and "Tumen Ail" LLC operating in Dornogovi province.`;

  const cndescription3 = `The company's testing laboratory is equipped with 35 types of advanced equipment from Chinese companies "WILLSUI", "SI-TIAN", and "WEPER" with an investment of 670,000 USD from "Inner Mongolia Luis Keepoli Testing Technology" Co., Ltd. in Bugat City, Inner Mongolia, China. It has the capacity to perform tests on 50-60 samples of stone, brown, and coking coal per day according to Mongolian and Chinese standards and methods.`;

  const texts = {
    mn: [description1, description2, description3],
    cn: [cndescription1, cndescription2, cndescription3],
  };

  return (
    <div className="min-h-screen  bg-background">
      <div className="fixed flex gap-2 top-3 right-8 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <Globe2Icon className="h-5 w-5 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="end"
            className="w-auto p-2 bg-white/95 backdrop-blur-sm border-border"
          >
            <div className="flex gap-2">
              <Button
                onClick={() => setLang("mn")}
                variant={lang === "mn" ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300"
              >
                <Image
                  src="/mongolia.png"
                  alt="Mongolia"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                MN
              </Button>
              <Button
                onClick={() => setLang("cn")}
                variant={lang === "cn" ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300"
              >
                <Image
                  src="/china.png"
                  alt="China"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                CN
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <MenuIcon className="h-5 w-5 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => console.log("Home")}>
              Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("About")}>
              About
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Services")}>
              Services
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Contact")}>
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                    Танилцуулга
                  </h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {texts[lang][0]}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/zurg4.jpg"
                  alt="Company Introduction"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Нүүрсний сорилт, шинжилгээ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {texts[lang][2]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {["/zurg1.jpg", "/zurg2.jpg", "/zurg3.jpg"].map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Laboratory ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl col-span-2"
                >
                  <Image
                    src="/zurg6.jpg"
                    alt="Technical Control 1"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/zurag7.JPG"
                    alt="Technical Control 2"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/zurag 8.jpg"
                    alt="Technical Control 3"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Техникийн хяналт
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {texts[lang][1]}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
