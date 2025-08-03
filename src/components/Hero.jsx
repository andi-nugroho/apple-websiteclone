import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { heroVideo, smallHeroVideo } from "./../utils/index"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet)
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet)
    }
  }, [])
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.0, duration: 2 })
    gsap.to("#cta", { opacity: 1, delay: 2.0, y: -50, duration: 1 })
  }, [])
  return (
    <section className=" w-full nav-height bg-black relative ">
      <div className=" h-5/6 w-full flex-center flex-col ">
        <p id="hero" className=" hero-title font-SFproBold ">
          iPhone 15 Pro
        </p>
        <div className=" md:w-9/12 w-9/12 ">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0">
        <a
          href="https://www.apple.com/in/shop/buy-iphone/iphone-15"
          className="btn"
        >
          Buy
        </a>
        <p className="font-normal text-gray text-lg">
          From $999 or $41.62/mo. for 24 mo.
        </p>
      </div>
    </section>
  )
}

export default Hero
