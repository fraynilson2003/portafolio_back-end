import NavBar from "../NavBar/NavBar";
import Bottom from "../NavBar/Bottom";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div className="realtive flex flex-col justify-between w-full h-screen">
      <NavBar />

      <Hero />

      <Bottom />
    </div>
  );
};

export default Layout;
