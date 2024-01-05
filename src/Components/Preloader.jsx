import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/TukayLogo.png";

const Preloader = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          comp.current.style.display = "none";
        },
      });
      t1.from("#introSlider", {
        opacity: 0,
        duration: -2,
      })
        .from(["#tittle1", "#tittle2", "#tittle3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#tittle1", "#tittle2", "#tittle3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .from(["#welcome"], {
          opacity: 0,
          x: "+=1000",
          duration: 1,
          stagger: 0.5,
        })
        .to("#introSlider", {
          opacity: 0,
          duration: 1.3,
          delay: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex" ref={comp}>
      <div
        id="introSlider"
        className="h-screen justify-center logo font-spaceGrotesk w-full flex  absolute top-0 left-0"
      >
        <div className="flex flex-col h-screen justify-center p-0 gap-10 tracking-tight absolute top-0 left-0 text-[white]">
          <h1 id="tittle1" className="text-9xl">
            Seamless,
          </h1>
          <h1 id="tittle2" className="text-9xl">
            Instant,
          </h1>
          <h1 id="tittle3" className="text-9xl">
            Zero Charges
          </h1>
        </div>
        <div className="h-screen flex justify-center place-items-center w-[100%]">
          <img src={logo} className="w-[25%]" id="welcome" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
