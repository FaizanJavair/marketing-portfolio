import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import dp from "../assets/dp.jpeg"
// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute m-auto left-0 right-0 lg:top-[180px] top-[190px] p-0 sm:top-[190px] xxs:top-[100px] se:top-[70px] max-w-10xl mx-auto flex lg:flex-row sm:flex-col xs:flex-col xxs:flex-col items-start gap-5 m-10",
        )}
      >
        <div className="flex flex-row gap-5 lg:w-[40rem]">
          {/* Title */}
          <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-fun-blue" />
          <div className="w-1 sm:h-80 md:h-30 h-40 blue-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-fun-blue">Javair</span>
          </h1>
          <span className="text-muted">Director Sales - CubeXS Weatherly</span>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 font-bold")}>
            I am a leader in Marketing and sales with <br className="sm:block hidden" />
            25+ Years of Experience.
          </p>
        </div>
        </div>
        
        <div className="flex justify-center max-w-8xl mx-auto">
          <div className="flex justify-between sm:w-[20rem] xs:w-[17rem] xxs:w-[15rem] xxs:pb-10 md:w-[15rem] lg:w-[21rem]">
            <img alt="name" src={dp} className="max-w-full h-auto rounded-full shrink-0 grow-0 " />
          </div>
        </div>
      </div>
      
      

      {/* Computer Model */}
      {/* <ComputersCanvas /> */}

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-5 xxs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-fun-blue flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-fun-blue mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
