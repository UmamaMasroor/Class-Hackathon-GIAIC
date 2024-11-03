import Image from "next/image"
import MacBook from "../images/MacBook Pro 14.png"
import Hphone from "../images/head-phones.png"
import PlayStation from "../images/PlayStation.png"
import VR from "../images/image 36.png"
export default function SmallBanner() {
  return (
    <>
    <div className="small-banner-container">
      {/* Left Column */}
      <div className="left-column">
        
        {/* First Section - Full Width */}
        <div className="full-width-section ">
          <Image src={PlayStation} alt={"playstation"}/>
          <div className="text-content">
            <h2>Playstation 5</h2>
            <p>Incredibly powerful CPU, GPU, and an SSD with integration allows you to redefine your PlayStation experience.</p>
          </div>
        </div>

        {/* Second Section - Two Columns */}
        <div className="two-column-section">
          <div className="column-item">
          <Image src={Hphone} alt={"head-phone"}/>
            <div className="text-content">
              <h3>Apple AirPods Max</h3>
              <p>Compound ear cups. Listen, it’s powerful.</p>
            </div>
          </div>
          <div className="column-item2 ">
          <Image src={VR} alt={"VR"}/>
            <div className="text-content">
              <h3>Apple Vision Pro</h3>
              <p>A new era of spatial computing is coming.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="text-content">
          <h2>MacBook Air</h2>
          <p>The 15-inch MacBook Air makes room for more of what you love with an expansive Liquid Retina display.</p>
        </div>
        <Image src={MacBook} alt={"macbok"}/>
      </div>
    </div>
        </>
  );
};


