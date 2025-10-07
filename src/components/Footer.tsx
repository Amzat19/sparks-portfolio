"use client";
import Instagram from "@/svgs/instagram";
import MailBox from "@/svgs/MAilBox";
import Phone from "@/svgs/Phone";
import SnapChat from "@/svgs/Snapchat";
import SoundCloud from "@/svgs/SoundCloud";
// import Spotify from "@/svgs/Spotify";
import TikTok from "@/svgs/tiktok";
import Twitter from "@/svgs/Twitter";
import YouTube from "@/svgs/Youtube";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_zdjzzfd",
        "template_fh199pq",
        formRef.current!,
        "AezRE4hl2eZXfUJJ4"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message.");
        }
      );
  };
  return (
    <footer className="pt-10 bg-[#111111] pb-4 font-montserrat" id="contact">
      <h1 className="font-bold lg:text-4xl text-2xl text-[#E0E0E0] lg:text-center pl-[10%] lg:pl-0 mb-6">
        Get in Touch
      </h1>
      <div className="flex items-center justify-start gap-20 lg:w-[80%] mx-auto">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-5/6 mx-auto lg:w-[544px] lg:mx-0"
        >
          <label className="font-medium text-base text-[#E0E0E0]">
            Full Name
            <input
              type="text"
              name="name"
              className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
            />
          </label>

          <div className="flex flex-col lg:flex-row gap-4">
            <label className="font-medium text-base text-[#E0E0E0]">
              Phone Number
              <input
                type="tel"
                name="tel_number"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
            <label className="font-medium text-base text-[#E0E0E0]">
              Email
              <input
                type="text"
                name="email"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <label className="font-medium text-base text-[#E0E0E0]">
              Event Type
              <input
                type="text"
                name="event_type"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
            <label className="font-medium text-base text-[#E0E0E0]">
              Event Address
              <input
                type="text"
                name="event_address"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <label className="font-medium text-base text-[#E0E0E0]">
              Date of Event(Type your date)
              <input
                type="text"
                name="event_date"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
            <label className="font-medium text-base text-[#E0E0E0]">
              Delivery/Pick Up
              <input
                type="text"
                name="delivery_type"
                className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[50px] w-full mb-4 px-2"
              />
            </label>
          </div>

          <label className="font-medium text-base text-[#E0E0E0]">
            Message
            <textarea
              name="message"
              className="border border-[#222222] bg-[#1A1A1A] rounded-md h-[150px] w-full mb-4 px-2"
            />
          </label>
          <button className="bg-[#FF00FF] text-white text-base font-semibold text-center py-2 w-full rounded-lg mb-6">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
        </form>
        {/* <button
          className="bg-[#FF00FF] text-white text-base font-semibold text-center py-2 rounded-lg mb-6 h-20 w-3/5 mx-auto cursor-pointer"
          onClick={() => window.open("https://wa.me/17048310677", "_blank")}
        >
          Send Message to DJ Msparks
        </button> */}
        <div className="w-[544px] hidden lg:block self-start">
          <h3 className="font-semibold text-2xl text-[#E0E0E0]">
            Contact Information
          </h3>
          <p className="flex gap-2 items-center pt-4">
            <span>
              <MailBox />
            </span>
            <span className="font-normal text-base text-[#E0E0E0]">
              bookdjmsparks@gmail.com
            </span>
          </p>
          <p className="flex gap-2 items-center pt-4">
            <span>
              <Phone />
            </span>
            <span className="font-normal text-base text-[#E0E0E0]">
              +1 (704) 831-0677
            </span>
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-2xl text-[#E0E0E0]">Follow Me</h4>
            <div className="flex items-center justify-start gap-4 pb-6 mt-6">
              <span
                className="cursor-pointer"
                onClick={() =>
                  window.open("http://www.instagram.com/dj_msparks_", "_blank")
                }
              >
                <Instagram />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@msparks__?_t=ZN-8whDg87VoBi&_r=1",
                    "_blank"
                  )
                }
                className="cursor-pointer"
              >
                <TikTok />
              </span>

              <span
                onClick={() =>
                  window.open("https://snapchat.com/t/MTYyGy1q", "_blank")
                }
                className="cursor-pointer h-8 w-8"
              >
                <SnapChat />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => window.open("https://x.com/djmsparks", "_blank")}
              >
                <Twitter />
              </span>
              <span
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://soundcloud.com/olujide-muyiwa", "_blank")
                }
              >
                <SoundCloud />
              </span>

              <span
                className="cursor-pointer"
                onClick={() =>
                  window.open("http://youtube.com/@dj-msparks", "_blank")
                }
              >
                <YouTube />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6 lg:hidden mt-4">
        <span
          className="cursor-pointer"
          onClick={() =>
            window.open("http://www.instagram.com/dj_msparks_", "_blank")
          }
        >
          <Instagram />
        </span>
        <span
          onClick={() =>
            window.open(
              "https://www.tiktok.com/@msparks__?_t=ZN-8whDg87VoBi&_r=1",
              "_blank"
            )
          }
          className="cursor-pointer"
        >
          <TikTok />
        </span>
        <span
          onClick={() =>
            window.open("https://snapchat.com/t/MTYyGy1q", "_blank")
          }
          className="cursor-pointer h-8 w-8"
        >
          <SnapChat />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => window.open("https://x.com/djmsparks", "_blank")}
        >
          <Twitter />
        </span>
        <span
          className="cursor-pointer"
          onClick={() =>
            window.open("https://soundcloud.com/olujide-muyiwa", "_blank")
          }
        >
          <SoundCloud />
        </span>

        <span
          className="cursor-pointer"
          onClick={() =>
            window.open("http://youtube.com/@dj-msparks", "_blank")
          }
        >
          <YouTube />
        </span>
      </div>
      <div className="w-full bg-[#111111] h-[40px] mt-6">
        <p className="text-center font-normal text-base text-[#9CA3AF]">
          © 2025 DJ MSPARKS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
