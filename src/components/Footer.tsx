import Instagram from "@/svgs/instagram";
import MailBox from "@/svgs/MAilBox";
import Phone from "@/svgs/Phone";
import SoundCloud from "@/svgs/SoundCloud";
import Spotify from "@/svgs/Spotify";
import TikTok from "@/svgs/tiktok";
import Twitter from "@/svgs/Twitter";
import YouTube from "@/svgs/Youtube";

const Footer = () => {
  return (
    <footer className="pt-20 bg-[#111111] pb-4 font-montserrat">
      <h1 className="font-bold lg:text-4xl text-2xl text-[#E0E0E0] lg:text-center pl-[10%] lg:pl-0 mb-6">
        Get in Touch
      </h1>
      <div className="flex items-center justify-start gap-20 lg:w-[80%] mx-auto">
        <div className="w-5/6 mx-auto lg:w-[544px] lg:mx-0">
          <label className="font-medium text-base text-[#E0E0E0]">
            Name
            <input
              type="text"
              className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4"
            />
          </label>
          <label className="font-medium text-base text-[#E0E0E0]">
            Email
            <input
              type="text"
              className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4"
            />
          </label>
          <label className="font-medium text-base text-[#E0E0E0]">
            Message
            <textarea className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[150px] w-full mb-4" />
          </label>
          <button className="bg-[#FF00FF] text-white text-base font-semibold text-center py-2 w-full rounded-lg mb-6">
            Send Message
          </button>
        </div>
        <div className="w-[544px] hidden lg:block self-start">
          <h3 className="font-semibold text-2xl text-[#E0E0E0]">
            Contact Information
          </h3>
          <p className="flex gap-2 items-center pt-4">
            <span>
              <MailBox />
            </span>
            <span className="font-normal text-base text-[#E0E0E0]">
              bookings@djpulse.com
            </span>
          </p>
          <p className="flex gap-2 items-center pt-4">
            <span>
              <Phone />
            </span>
            <span className="font-normal text-base text-[#E0E0E0]">
              +1 (555) 123-4567
            </span>
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-2xl text-[#E0E0E0]">Follow Me</h4>
            <div className="flex items-center justify-start gap-4 pb-6 mt-6">
              <Instagram />
              <SoundCloud />
              <Spotify />
              <TikTok />
              <Twitter />
              <YouTube />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6 lg:hidden">
        <Instagram />
        <SoundCloud />
        <Spotify />
        <TikTok />
        <Twitter />
        <YouTube />
      </div>
      <div className="w-full bg-[#111111] h-[40px] mt-6">
        <p className="text-center font-normal text-base text-[#9CA3AF]">
          © 2024 DJ PULSE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
