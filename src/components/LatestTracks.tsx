"use client";
import Image from "next/image";
import PlayButton from "../../public/images/play-button.png";
import Track1 from "../../public/images/mixtapes-img-5.jpg";
import Track2 from "../../public/images/mixtapes-img-6.jpg";
import Track3 from "../../public/images/mixtapes-img-7.jpg";
import Track4 from "../../public/images/mixtapes-img-8.png";

const LatestTracks = () => {
  return (
    <section className="bg-black pb-16" id="listen">
      <h3 className="font-bold sm:text-4xl text-xl text-[#E0E0E0] text-center pt-20 pb-8">
        Mixtapes & Playlists
      </h3>
      <div className="bg-[#111111] rounded-lg w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-start py-4">
        <div className="w-full lg:w-[80%] sm:max-w-[552px]">
          <p className="font-semibold text-2xl text-[#E0E0E0] pl-[10%] py-4">
            Playlists Arena
          </p>
          <div className="flex gap-4 items-center bg-[#1A1A1A] rounded-lg p-4 w-4/5 mx-auto">
            <Image
              src={PlayButton}
              alt="Play button"
              className="w-12 h-12 cursor-pointer"
              onClick={() =>
                window.open("https://linktr.ee/djmsparks", "_blank")
              }
            />
            <div className="flex flex-col">
              <span className="font-semibold text-base text-[#E0E0E0]">
                Msparks Vibezzz
              </span>
              <span className="font-normal text-sm text-[#9CA3AF]">
                Cick Play and Enter the realm
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0 px-4 lg:px-0">
          <Image
            src={Track1}
            alt="Track preview"
            className="w-[173px] h-[91px] lg:w-[268px] lg:h-[190px] rounded-md object-cover object-center"
          />
          <Image
            src={Track2}
            alt="Track preview"
            className="w-[173px] h-[91px] lg:w-[268px] lg:h-[190px] rounded-md object-cover object-center"
          />{" "}
          <Image
            src={Track3}
            alt="Track preview"
            className="w-[173px] h-[91px] lg:w-[268px] lg:h-[190px] rounded-md object-cover object-center"
          />{" "}
          <Image
            src={Track4}
            alt="Track preview"
            className="w-[173px] h-[91px] lg:w-[268px] lg:h-[190px] rounded-md object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestTracks;
