import Image from "next/image";
import AboutSparks from "../../public/images/about-sparks.png";

const AboutMe = () => {
  return (
    <section className=" bg-[#111111] ">
      <div className="mx-auto w-4/5 xl:flex-row xl:justify-between flex flex-col justify-center items-center py-4 sm:py-20">
        <Image
          src={AboutSparks}
          alt="Head shot of DJ Msparks"
          className="hidden sm:block mb-16 xl:mb-0"
          width={400}
          height={400}
        />
        <div className="w-[90%] sm:w-[544px]">
          <h3 className="text-[#FF00FF] text-bold text-[30px] sm:text-[36px] mb-8 font-bold">
            About Me
          </h3>
          <p className="text-[#E0E0E0] text-base sm:text-[18px] mb-4 font-normal">
            With over a decade of experience in the electronic music scene, DJ
            PULSE has become synonymous with cutting-edge sound and electrifying
            performances. Specializing in house, techno, and electronic fusion,
            each set is crafted to create an immersive journey through sound.
          </p>
          <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal">
            From intimate club venues to major festivals, DJ PULSE brings
            technical precision and creative innovation to every performance,
            ensuring unforgettable experiences for audiences worldwide.
          </p>
        </div>
        <Image
          src={AboutSparks}
          alt="Head shot of DJ Msparks"
          className="sm:hidden mt-32"
        />
      </div>
    </section>
  );
};

export default AboutMe;
