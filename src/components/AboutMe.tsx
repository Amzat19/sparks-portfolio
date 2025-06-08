import Image from "next/image";
import AboutSparks from "../../public/images/about-sparks.png";

const AboutMe = () => {
  return (
    <section className=" bg-[#111111]" id="bio">
      <div className="mx-auto w-4/5 xl:flex-row xl:justify-between flex flex-col justify-center items-center py-4 sm:py-20">
        <Image
          src={AboutSparks}
          alt="Head shot of DJ Msparks"
          className="hidden sm:block mb-16 xl:mb-0"
          width={400}
          height={400}
        />
        <div className="w-[90%] sm:w-[544px]">
          <h3 className="text-[#FF00FF] text-bold text-[30px] sm:text-[36px] my-8 font-bold">
            The Human: DJ Msparks
          </h3>
          <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#FF00FF]/60 scrollbar-track-transparent">
            <p className="text-[#E0E0E0] text-base sm:text-[18px] mb-4 font-normal">
              Today, we go into the world of Dj Msparks, a Nigerian-born talent
              whose journey from the streets of Ibadan to the clubs of
              Leicester, UK, has been nothing short of inspiring. Dj
              Msparks&apos; passion for music and his ability to connect with
              audiences through his beats make him a standout figure in the
              global DJing landscape.
            </p>
            <span className="text-[#FF00FF] text-bold text-[30px] sm:text-[36px] mt-8 mb-6 block font-bold">
              The Journey
            </span>
            <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal mb-4">
              Dj Msparks&apos; journey as a DJ began back in 2015, driven by a
              love for music that runs deep in his veins. From his early days
              experimenting with turntables in Ibadan to honing his skills on
              the stages of the UK and America, Dj Msparks&apos; evolution as an
              artist has been shaped by the diverse cultures and sounds that he
              has encountered along the way. Through every twist and turn, DJ
              Msparks has remained dedicated to his craft, using his music as a
              vehicle for self-expression and cultural celebration.
            </p>
            <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal mb-4">
              One of the defining moments in Dj Msparks&apos; career came early
              on when he was allowed to spin at his own Prom. The energy of the
              crowd, the electric atmosphere, and the positive feedback he
              received that night solidified his passion for DJing and set him
              on a path of exploration and discovery. It was a moment that
              sparked something inside him—a desire to share his music with the
              world and connect with people through the universal language of
              rhythm and melody.
            </p>
            <span className="text-[#FF00FF] text-bold text-[30px] sm:text-[36px] mt-8 mb-6 block font-bold">
              Staying Ahead of the Curve
            </span>
            <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal mb-4">
              In an industry that&apos;s constantly evolving, Dj Msparks
              understands the importance of staying ahead the curve. Whether
              it&apos;s embracing new technologies, experimenting with different
              sounds, or collaborating with other artists, he&apos;s always
              looking for ways to push the boundaries of his creativity, and
              keep his music fresh and relevant. But amidst the ever-changing
              landscape of the music industry, one thing remains constant: Dj
              Msparks&apos; commitment to staying true to himself and his roots.
            </p>
            <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal mb-4">
              For DJ Msparks, authenticity is everything. He believes that the
              key to connecting with audiences lies in staying true to oneself
              and sharing music that comes from the heart. But he also knows the
              importance of engaging with his audience and keeping them on their
              feet. Whether he&apos;s spinning tracks at a club in Leicester or
              a festival in Lagos, he&apos;s always attuned to the vibe of the
              crowd, crafting sets that speak to their souls while staying true
              to his unique style.
            </p>
            <p className="text-[#E0E0E0] text-base sm:text-[18px] font-normal mb-4">
              One thing is abundantly clear: his passion for music knows no
              bounds. From humble beginnings in Nigeria to international
              acclaim, Dj Msparks&apos; story is a testament to the power of
              following your dreams and staying true to yourself. As he
              continues to spread his message of unity and cultural celebration
              through his beats, we can&apos;t wait to see where his journey
              takes him next.
            </p>
          </div>
        </div>
        <Image
          src={AboutSparks}
          alt="Head shot of DJ Msparks"
          className="sm:hidden my-32"
        />
      </div>
    </section>
  );
};

export default AboutMe;
