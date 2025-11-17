// components
import TopHeader from "./TopHeader.jsx";
import MobailNavber from "./MobailNavber";
import Desktop from "./Desktop";

const Navbar = () => {
  return (
    <>
      {/* Top Header */}
      <TopHeader />

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">

          {/* Mobile Navbar */}
          <MobailNavber />

          {/* Desktop Navbar */}
          <Desktop />

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
