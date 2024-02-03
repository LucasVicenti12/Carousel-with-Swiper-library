import { Carousel } from "./swiperComponents/Carousel";

export default () => {
  const style = {
    display: "block",
    height: "300px",
    border: "1px solid black",
  };

  const options = [
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
    <div style={style}>opaaaa</div>,
  ];

  return (
    <div>
      <Carousel
        name={"opa"}
        items={options}
        nexBtnConfig={{ color: "red", borderRadius: "10px" }}
        prevBtnConfig={{ color: "red", borderRadius: "10px" }}
      />
      <Carousel
        name={"opa1"}
        items={options}
        disableNavOption="hidden"
        nexBtnConfig={{
          style: { backgroundColor: "blue", color: "red" },
          btn: <div>aaaa</div>,
        }}
        prevBtnConfig={{
          style: { backgroundColor: "green", color: "red" },
          btn: <div>aaaa</div>,
        }}
      />
      <Carousel
        name={"opa2"}
        items={options}
        disableNavOption="hidden"
        useNavButtons={false}
        nexBtnConfig={{
          style: { backgroundColor: "blue", color: "red" },
          btn: <div>aaaa</div>,
        }}
        prevBtnConfig={{
          style: { backgroundColor: "green", color: "red" },
          btn: <div>aaaa</div>,
        }}
      />
      <Carousel
        name={"opa3"}
        items={options}
        nexBtnConfig={{ color: "red", borderRadius: "10px" }}
        prevBtnConfig={{ color: "red", borderRadius: "10px" }}
        usePagination={true}
        paginationConfig={{
          alignX: "center",
          alignY: "top",
          sctBullet: "red",
          dsbBullet: "green",
        }}
      />
      <Carousel
        name={"opa4"}
        items={options}
        nexBtnConfig={{ borderRadius: "10px" }}
        prevBtnConfig={{ borderRadius: "10px" }}
        usePagination={true}
      />
      <Carousel
        name={"opa5"}
        items={options}
        nexBtnConfig={{ borderRadius: "10px" }}
        prevBtnConfig={{ borderRadius: "10px" }}
        usePagination={true}
        autoPlay={{ play: true, delay: 2200 }}
      />
    </div>
  );
};
