import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { RiSpaceShipLine } from "react-icons/ri";
import Pepe2 from "../assets/logo1.jpeg";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-pr">
      <div className="container text-center ">
        <h1 className=" text-5xl md:text-6xl capitalize font-Japanese_3017">
          roadmap
        </h1>

        <VerticalTimeline className="mt-10 text-start" lineColor="#FF0000">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "red", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "#FF0000", color: "#fff" }}
            icon={<MdOutlineRocketLaunch />}
          >
            <h3 className="vertical-timeline-element-title font-Audiowide text-3xl capitalize">
              BEGINNING
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize ">Create Website & Social Media</li>
              <li className="capitalize">Fair Launch</li>
              <li className="capitalize">Memes</li>
              <li className="capitalize">Community Building Initiatives</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "#F34A07", color: "#fff" }} // icon={<WorkIcon />}
            icon={<AiOutlineSafety />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              PHASE 2
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize">500+ wallet holders</li>
              <li className="capitalize">Dextools Trending</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ backgroundColor: "#1d1f2a" }}
            iconStyle={{ background: "#FFE083", color: "#000" }}
            icon={<RiSpaceShipLine />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              PHASE 3
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize"> Coin gecko listing</li>
              <li className="capitalize">CMC listing</li>
              <li className="capitalize">Dextool trending</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <img src={Pepe2} alt="" className="md:w-[15rem] mx-auto" />
      </div>
    </section>
  );
};

export default Map;
