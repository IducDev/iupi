"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { img1, img2, img3, img4, img5 } from "@/assets";
import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export const CarrouselRecommends = () => {

 const { financialProfile } = useFinancialProfileStore();
 const [isSkip, setIsSkip] = useState(false);

 useEffect(() => {
   if (financialProfile?.riskProfile === "SKIP") {
     setIsSkip(true);
   } else {
     setIsSkip(false);
   }
 }, [financialProfile]);


  return (
    <div className={`w-full max-w-4xl mx-auto ${isSkip ? 'opacity-50 pointer-events-none' : ''}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true} 
        autoplay={isSkip ? false : {
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className={`bg-primary200 p-3 flex flex-col gap-2 rounded-lg mx-auto justify-center`}
            style={{ width: "21.25em", height: "17em" }}
          >
            <Image src={img3} alt="Gastos hormiga" className="h-[9em] w-[19em] mx-auto rounded" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-8 ml-2 mt-1">
                <h2 className="text-white900 text-p3-bold">Dr. Javier Hernández</h2>
                <p className="text-white900 text-p3-regular">15 de Enero de 2025</p>
              </div>
              <h3 className="text-white900 text-p2-bold ml-2">¡Controla tus gastos hormiga!</h3>
              <p className="text-white900 text-p3-regular w-[95%] m-auto">
                Pequeños gastos diarios pueden sumarse rápidamente. ¡Hazlos desaparecer!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-primary200  mx-auto p-3 flex flex-col gap-2 rounded-lg justify-center" style={{ width: "21.25em", height: "17em" }}>
            <Image src={img2} alt="Presupuesto" className="h-[9em] w-[19em] mx-auto rounded" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-8 ml-2 mt-1">
                <h2 className="text-white900 text-p3-bold">Lic. Marta Gómez</h2>
                <p className="text-white900 text-p3-regular">5 de Enero de 2025</p>
              </div>
              <h3 className="text-white900 text-p2-bold ml-2">¡Haz un presupuesto y cúmplelo!</h3>
              <p className="text-white900 text-p3-regular w-[95%] m-auto">
                Tener un plan claro te ayuda a evitar sorpresas y ahorrar más.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-primary200  mx-auto p-3 flex flex-col gap-2 rounded-lg justify-center" style={{ width: "21.25em", height: "17em" }}>
            <Image src={img1} alt="Deudas" className="h-[9em] w-[19em] mx-auto rounded" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-8 ml-2 mt-1">
                <h2 className="text-white900 text-p3-bold">Dr. Luis Ramírez</h2>
                <p className="text-white900 text-p3-regular">20 de Diciembre de 2024</p>
              </div>
              <h3 className="text-white900 text-p2-bold ml-2">Prioriza tus deudas</h3>
              <p className="text-white900 text-p3-regular w-[95%] m-auto">
                Enfócate en pagar lo que más intereses genera. ¡Libérate del estrés financiero!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg-primary200  mx-auto p-3 flex flex-col gap-2 rounded-lg justify-center" style={{ width: "21.25em", height: "17em" }}>
            <Image src={img4} alt="Inversiones" className="h-[9em] w-[19em] mx-auto rounded" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-8 ml-2 mt-1">
                <h2 className="text-white900 text-p3-bold">Dr. Ana Pérez</h2>
                <p className="text-white900 text-p3-regular">10 de Diciembre de 2024</p>
              </div>
              <h3 className="text-white900 text-p2-bold ml-2">Haz que tu dinero trabaje para ti</h3>
              <p className="text-white900 text-p3-regular w-[95%] m-auto">
                No dejes que tu dinero se quede estancado, ¡hazlo crecer con inversiones inteligentes!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="bg-primary200 p-3  mx-auto flex flex-col gap-2 rounded-lg justify-center" style={{ width: "21.25em", height: "17em" }}>
            <Image src={img5} alt="Ahorro" className="h-[9em] w-[19em] mx-auto rounded" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-8 ml-2 mt-1">
                <h2 className="text-white900 text-p3-bold">Lic. Carlos Méndez</h2>
                <p className="text-white900 text-p3-regular">1 de Noviembre de 2024</p>
              </div>
              <h3 className="text-white900 text-p2-bold ml-2">Ahorra el 10% de tus ingresos</h3>
              <p className="text-white900 text-p3-regular w-[95%] m-auto">
                Un pequeño porcentaje puede hacer una gran diferencia a largo plazo.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
