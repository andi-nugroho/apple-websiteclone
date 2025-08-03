import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"
import { animateWithGsap } from "../utils/animations"

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { y: 0, opacity: 1 })
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
    })
  }, [])
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding  bg-zinc"
    >
      <div className=" screen-max-width">
        <div className=" mb-12 w-full md:flex items-end  justify-between">
          <h1 id="title" className=" section-heading">
            Get the highlights.
          </h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link">
              watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
