"use client"
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function FooterComponent({ className }: { className?: string }) {
  const navigate = useRouter();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div
      className={clsx(
        " bg-black06 md:pt-[100px] pt-[50px] md:pb-[50px] pb-[20px]",
        className
      )}
    >
      <div className="flex flex-col gap-[50px] md:gap-24 ">
        <style>
          {`
                    #foot ul li:first-child {
                    color:#fff;
                    font-size:20px;
                    font-weight:500;
                    margin-bottom:8px;
                    }
                    #foot ul li{
                    cursor:pointer}
                    `}
        </style>
        <div
          className="grid grid-cols-2 md:grid-cols-6 gap-7 text-subtitle"
          id="foot"
        >
          <ul>
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li onClick={() => navigate.push("/#categories")}>Categories</li>
            <li onClick={() => navigate.push("/#devices")}>Devices </li>
            <li onClick={() => navigate.push("/#pricing")}>Pricing </li>
            <li onClick={() => navigate.push("/#faq")}>FAQ </li>
          </ul>
          <ul>
            <li> <Link href="/movies"> Movies </Link> </li>
            <li onClick={() => navigate.push("/movies#movies_genres")}>
              Genres
            </li>
            <li onClick={() => navigate.push("/movies#movies_popular")}>
              Popular
            </li>
            <li onClick={() => navigate.push("/movies#movies_playing")}>
              Playing Now
            </li>
            <li onClick={() => navigate.push("/movies#movies_release")}>
              Upcoming movies
            </li>
            <li onClick={() => navigate.push("/movies#movies_watch")}>
              Must Watch
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/shows"> Shows </Link>
            </li>
            <li onClick={() => navigate.push("/shows#series_genres")}>
              Genres
            </li>
            <li onClick={() => navigate.push("/shows#series_popular")}>
              Popular
            </li>
            <li onClick={() => navigate.push("/shows#series_trending")}>
              Trending
            </li>
            <li onClick={() => navigate.push("/shows#series_release")}>
              New Release
            </li>
            <li onClick={() => navigate.push("/shows#series_watch")}>
              Must Watch
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/support"> Support </Link>
            </li>
            <li onClick={() => navigate.push("/support#contact")}>Contact Us </li>
          </ul>
          <ul>
            <li>
              <Link href="/subscriptions"> Subscription </Link>
            </li>
            <li onClick={() => navigate.push("/subscriptions#plan")}>Plans </li>
            <li onClick={() => navigate.push("/subscriptions#features")}>
              Features
            </li>
          </ul>
          <ul>
            <li>Connect With Us </li>
            <div className="flex gap-2.5">
              <a
                target="_blank"
                className="p-4 rounded-lg bg-black10 border border-border"
                href="https://www.facebook.com/eprahum.aposalem"
              >
                <img src="/svg/facebook.svg" width={24} alt="" />
              </a>
              <a
                target="_blank"
                className="p-4 rounded-lg bg-black10 border border-border"
                href="https://github.com/himafr"
              >
                <img src="/svg/github.svg" width={24} alt="" />
              </a>
              <a
                target="_blank"
                className="p-4 rounded-lg bg-black10 border border-border"
                href="https://www.linkedin.com/in/hema-with-015685328"
              >
                <img src="/svg/linkedin.svg" width={24} alt="" />
              </a>
            </div>
          </ul>
        </div>
      <div className="flex flex-col gap-5 md:flex-row justify-between py-6 text-subtitle border-t  border-t-border"> 
        <div>&copy; {new Date().getFullYear()} Mofie, All Rights Reserved</div>
        <div className="flex ">
            <div className="px-3 ">Terms of Use</div>
            <div className="px-3 border-x border-border "> Privacy Policy</div>
            <div className="px-3 ">Cookie Policy</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FooterComponent;
