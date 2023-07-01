import NavBar from "../NavBar/NavBar";
import Bottom from "../NavBar/Bottom";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div className="bg-primary w-full">
      <div className="realtive flex flex-col justify-between w-full max-w-[1365px] h-screen mx-auto">
        <NavBar />

        <Hero />

        <Bottom />
      </div>
    </div>
  );
};

export default Layout;
