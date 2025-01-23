"use client";
import { useUserStore } from "@/store/user/userStore";
import Image from "next/image";
import { Sembrador} from "@/assets";
import Button from "@/components/ui/Button";
import Onbording from "@/components/modal/Onbording/onbording";

export default function Profile() {

    const user = useUserStore((state) => state.user);
    const  financialProfile = "Sembrador de oportunidades"
    const imgUser = user?.photoUrl || '/Avatar.png'


    return (
        <main className="px-4 pt-6 pb-24 space-y-4 w-full h-full bg-primary300">
        
        <section className="flex bg-white text-white900 h-[15vh] items-center rounded-lg">
            <div className="flex flex-row items-center gap-2 m-8">
                <Image src={imgUser} alt="photo" width={75} height={75}/>
                    <div className=" flex flex-col">
                        <h1 className="text-white900 text-p1-semibold pl-">Laura G. Lopez</h1>
                        <h1 className="text-white400 text-p2-regular p-1">laurag@gmail.com</h1>
                        <h1 className="text-white400 text-p2-regular p-1">+54 9 (11) 65652515 </h1>
                    </div>
            </div>

        </section>

        <section className="bg-white text-white900 h-[35vh] items-center rounded-lg">
            <h2 className="text-accent400 text-p1-semibold text-center p-2 pt-5">Tu perfil financiero</h2>
            <h1 className="text-white900 text-p1-bold p-1 text-center">{financialProfile}</h1>
            <div className="flex flex-row p-2 gap-5">
                <Image src={Sembrador} alt="photo" width={150} height={150}/>
                <div className="text-accent700 text-center text-p2-regular w-[60%] m-auto">
                Sueles priorizar la preservación del capital y tratar de minimizar el riesgo. Estos inversores prefieren inversiones estables y de baja volatilidad, como bonos o acciones de primera línea.
                </div>
            </div>

            <div className="flex items-center justify-center p-2 pt-5">
            <Button variant="solid" size="medium" >¿Quieres realizar nuevamente el test?</Button>
            </div>
            <Onbording />
        </section>

        <section className="bg-white text-white900 h-[20vh] text-center rounded-lg">
            <h1 className="text-accent400 text-p1-semibold text-center p-2">Recomendaciones para ti</h1>
            <h2 className="text-white400 text-p2-regular p-1">Basado en tu perfil</h2>
            <p className="p-2 text-white900 text-p2-regular ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus cum tenetur obcaecati veniam. Modi maxime debitis quas repellat corrupti voluptates a eaque perspiciatis enim, itaque tempore dolorum ab tempora totam!</p>
        </section>

        </main>
    )
}