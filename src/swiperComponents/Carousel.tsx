import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import React, { CSSProperties, ReactElement, useEffect, useState } from "react";
import "swiper/css";
import { eventEmmitter } from "./eventEmitter";

import { Autoplay } from "swiper/modules";

type NavButtonType = "previous" | "next";
type NavDisableOption = "opacity" | "hidden";
type AlignX = "start" | "center" | "end";
type AlignY = "top" | "bottom-inside" | "bottom-outside";

interface CarouselParameters {
  name: string;
  items: HTMLElement[] | string[];
  nexBtnConfig: CSSProperties | NavButtonOptions;
  prevBtnConfig: CSSProperties | NavButtonOptions;
  width: number | string | undefined;
  disableNavOption?: NavDisableOption;
  useNavButtons?: boolean;
  usePagination?: boolean;
  paginationConfig?: PaginationConfig;
  paginationStyle?: CSSProperties;
  autoPlay?: AutoPlayConfig;
}
interface NavButtonParameters {
  swiperName: string;
  buttonStyle?: CSSProperties | NavButtonOptions;
  type: NavButtonType;
  children: ReactElement;
  buttonSize?: string;
  disableOption?: NavDisableOption;
}
interface NavButtonOptions {
  style?: CSSProperties;
  btn?: ReactElement;
}
interface PaginationConfig {
  alignX: AlignX;
  alignY: AlignY;
  sctBullet?: string;
  dsbBullet?: string;
}
interface PaginationContainerParameters {
  style?: CSSProperties;
  swiperName: string;
  config?: PaginationConfig;
}
interface AutoPlayConfig {
  play?: boolean;
  delay?: number;
}

export function Carousel({
  name,
  items,
  nexBtnConfig,
  prevBtnConfig,
  width,
  disableNavOption,
  useNavButtons = true,
  usePagination = false,
  paginationConfig,
  paginationStyle,
  autoPlay = { play: false, delay: 0 },
}: CarouselParameters) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={(evt) =>
        eventEmmitter.emit("update_nav_button_" + name, evt?.activeIndex)
      }
      style={{
        width: width,
        paddingBottom: "30px",
        overflowY: "auto",
        height: "auto",
      }}
      autoplay={
        autoPlay
          ? autoPlay.play === false
            ? false
            : {
                delay: autoPlay?.delay ?? 0,
              }
          : false
      }
      modules={[Autoplay]}
    >
      {useNavButtons && (
        <NavButton
          buttonStyle={prevBtnConfig}
          type="previous"
          buttonSize="50px"
          swiperName={name}
          disableOption={disableNavOption}
        >
          <PreviousSVG />
        </NavButton>
      )}
      {items.map((item: HTMLElement | string, index: number) => (
        //@ts-ignore
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      {useNavButtons && (
        <NavButton
          buttonStyle={nexBtnConfig}
          type="next"
          buttonSize="50px"
          swiperName={name}
          disableOption={disableNavOption}
        >
          <NextSVG />
        </NavButton>
      )}
      {usePagination && (
        <PaginationContainer
          style={paginationStyle}
          swiperName={name}
          config={paginationConfig}
        />
      )}
    </Swiper>
  );
}

const NavButton = ({
  buttonStyle,
  type,
  children,
  buttonSize = "50px",
  swiperName,
  disableOption = "opacity",
}: NavButtonParameters) => {
  const [change, setChage] = useState(false);
  const [disable, setDisable] = useState(type === "previous");
  const swiperAction = useSwiper();

  const handleAction = () => {
    switch (type) {
      case "previous":
        swiperAction.slidePrev();
        if (swiperAction.isBeginning) {
          setDisable(true);
        }
        break;
      case "next":
        swiperAction.slideNext();
        if (swiperAction.isEnd) {
          setDisable(true);
        }
        break;
    }
    setChage(!change);
  };
  useEffect(() => {
    const handleUpdateButton = (index: number) => {
      switch (type) {
        case "previous":
          if (!swiperAction.isBeginning || index === 0) {
            setDisable(false);
          }
          break;
        case "next":
          if (!swiperAction.isEnd) {
            setDisable(false);
          }
          break;
      }
    };
    eventEmmitter.on("update_nav_button_" + swiperName, handleUpdateButton);
    return () => {
      eventEmmitter.removeListener(
        "update_nav_button_" + swiperName,
        handleUpdateButton
      );
    };
  }, []);
  var style = {
    "--swiper-navigation-button-size": buttonSize,
    position: "absolute",
    top: " var(--swiper-navigation-top-offset, 50%)",
    width: "calc(var(--swiper-navigation-button-size) / 44 * 27)",
    height: "var(--swiper-navigation-button-size)",
    marginTop: "calc(0px - (var(--swiper-navigation-button-size) / 2))",
    zIndex: 99999,
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: type === "next" && 0,
    left: type === "previous" && 0,
    opacity: disable ? (disableOption === "hidden" ? "0" : "0.5") : "1",
  };
  let tempStyle =
    //@ts-ignore
    buttonStyle?.style !== undefined ? buttonStyle?.style : buttonStyle;
  style = Object.assign({}, style, tempStyle);

  return (
    <div
      //@ts-ignore
      style={style}
      onClick={() => handleAction()}
      //@ts-ignore
      onMouseOver={(evt) => (evt.target.style.backgroundColor = "#3b3b3929")}
      //@ts-ignore
      onMouseLeave={(evt) => (evt.target.style.backgroundColor = "transparent")}
    >
      <div
        style={{
          width: "calc(var(--swiper-navigation-button-size) / 44 * 27)",
          height: "var(--swiper-navigation-button-size)",
          position: "absolute",
        }}
      ></div>
      {
        //@ts-ignore
        buttonStyle?.btn !== undefined ? buttonStyle?.btn : children
      }
    </div>
  );
};
const PaginationContainer = ({
  style,
  swiperName,
  config = {
    alignX: "center",
    alignY: "bottom-outside",
    sctBullet: "#000000",
    dsbBullet: "#C7C7C7",
  },
}: PaginationContainerParameters) => {
  const swiperAction = useSwiper();
  const handleChangeSlide = (index: number) => {
    swiperAction.slideTo(index);
    setSelectedIndex(index);
  };
  const [selectedIndex, setSelectedIndex] = useState(swiperAction.activeIndex);

  useEffect(() => {
    const handleUpdateButton = (index: number) => {
      setSelectedIndex(index);
    };
    eventEmmitter.on("update_nav_button_" + swiperName, handleUpdateButton);
    return () => {
      eventEmmitter.removeListener(
        "update_nav_button_" + swiperName,
        handleUpdateButton
      );
    };
  }, []);

  let topBullets = "0%";

  switch (config.alignY) {
    case "bottom-inside":
      topBullets = "85%";
      break;
    case "bottom-outside":
      topBullets = "93%";
      break;
    case "top":
      topBullets = "3%";
      break;
    default:
      topBullets = "93%";
      break;
  }

  var tempStyle = {
    position: "absolute",
    top: topBullets,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: config.alignX,
    zIndex: 9999999,
    gap: "0.5rem",
  };
  tempStyle = Object.assign({}, tempStyle, style);

  return (
    //@ts-ignore
    <div style={tempStyle} className="custom-pagination-container">
      {Array.from({ length: swiperAction.slides.length - 2 }).map(
        (_, index) => {
          return (
            <div
              key={index}
              onClick={() => handleChangeSlide(index)}
              style={{
                backgroundColor:
                  index === selectedIndex
                    ? config?.sctBullet ?? "#000000"
                    : config?.dsbBullet ?? "#C7C7C7",
                display: "block",
                width: "10px",
                height: "10px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            ></div>
          );
        }
      )}
    </div>
  );
};

const NextSVG = () => {
  return (
    <svg
      fill="#000000"
      height="100px"
      width="100px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-47.72 -47.72 572.62 572.62"
      xmlSpace="preserve"
      stroke="#000000"
      strokeWidth="19.087"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="3.8174"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
const PreviousSVG = () => {
  return (
    <svg
      fill="#000000"
      height="100px"
      width="100px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-47.72 -47.72 572.62 572.62"
      xmlSpace="preserve"
      stroke="#000000"
      strokeWidth="19.087"
      transform="rotate(180)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="3.8174"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
