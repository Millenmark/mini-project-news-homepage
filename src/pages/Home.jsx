import desktopImage from "../assets/desktop_image.jpg";
import Article from "../container/Article";

const Home = () => {
  return (
    <div className=" container mx-auto grid grid-cols-3 grid-rows-3 w-full gap-6">
      <div className=" col-span-2 overflow-hidden">
        <img
          src={desktopImage}
          alt=""
          className=" object-cover object-center"
        />
      </div>
      <div className=" bg-neutral-very-dark-blue row-span-2">
        <Article />
      </div>
      <div className=" bg-yellow-400"></div>
      <div className=" bg-blue-400"></div>
      <div className=" bg-cyan-400"></div>
      <div className=" bg-red-400"></div>
      <div className=" bg-amber-600"></div>
    </div>
  );
};

export default Home;
