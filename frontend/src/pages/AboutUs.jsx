import React from "react";
import Banner from "../components/widgets/Banner";
import Story from "../components/common/Story";
import MissionAndVision from "../components/common/MissionAndVision";
import CoreValues from "../components/common/CoreValues";
import How from "../components/common/How";
import Team from "../components/common/Team";
import StartJourney from "../components/common/StartJourney";

const AboutUs = () => {
  const subTitle = "About WheelDeal";
  const title = "Your Trusted Vehicle Rental Partner in Nepal";
  const description =
    "Connecting travelers with verified vehicle owners since 2020. Making every journey safe, reliable, and memorable.";
  return (
    <div>
      {/* Banner Section */}
      <Banner subTitle={subTitle} title={title} description={description} />
      {/* My Story */}
      <Story />
      {/* Mission & Vision */}
      <MissionAndVision />
      {/* Core Values */}
      <CoreValues />
      {/* How It Works */}
      <How />

      {/* Team Section */}
      <Team />
      {/* Call to Action */}
      <StartJourney />
    </div>
  );
};

export default AboutUs;
