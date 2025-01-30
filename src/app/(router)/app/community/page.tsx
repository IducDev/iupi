'use client';

import { ArrowLargeLeft } from "@/assets";
import Image from "next/image";
import { SliderCommunity } from '@/components/slider/community';

export default function community () {

    return(
        <main className="h-full w-full">
            <section className="p-2">
                <div className="flex flex-row gap-2 p-2">
                        <Image src={ArrowLargeLeft} alt=""/>
                        <h1 className="text-h6-bold text-white900">Comunidad</h1>
                </div>
                <p className="text-p2-regular text-white900 text-center p-3">Para aprender, compartir e informarnos</p>
            </section>

            <section>
                <SliderCommunity />
            </section>
        </main>
    )
}