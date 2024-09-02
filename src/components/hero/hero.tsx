
import { Canvas } from "@react-three/fiber";
import Crystal from "./components/Crystal";

export default function Hero() {
    return (
        <div className="w-[100%] m-auto h-[800px] flex flex-row justify-around gap-5">
  
        <Canvas camera={{ rotation:[70 ,-60 ,30] , position:[300 , 350 , 300]}}>
            <Crystal/>
        </Canvas>

        <div className="flex w-full h-[350px] opacity-[0.9] absolute bg-black top-[18rem] left-0 right-6 p-6 flex-col gap-6">

            <h1 className="text-[3rem]">We Are  <span className="text-crystal-accent opacity-[1] text-[3.5rem]"> Crystal.</span></h1>
            <p className="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis quod optio eaque rerum modi veniam suscipit adipisci, eveniet possimus quam temporibus recusandae saepe reiciendis enim animi, tempore maiores cupiditate.</p>
            <a href="#" className="underline text-crystal-accent">Learn More.</a>
        </div>
        
        </div>
    )
}