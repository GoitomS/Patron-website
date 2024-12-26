import ResourcesSection from "@/components/ResourcesSection";
import EmployeeExperienceHeader from "./components/EmployeeExperienceHeader";
import PatronCallToAction from "@/components/PatronCallToAction";
import FastLaunchSection from "./components/FastLaunchSection";
import PictureAndFeatures from "@/components/PictureAndFeatures";
import { Typography } from "@mui/material";
import { listOfArticles } from "../resources/components/listOfArticles";
const phoneSystemFeatures = [
  "New local or toll-free numbers",
  "Instant Number Porting",
  "SMS/MMS",
  "Dynamic IVRs",
  "Call transfers",
  "Intelligent call routing",
  "Call detail records",
  "Dynamic queue management",
  "Dashboards and Reports",
  "Manage global teams",
];

export default function EmployeeExperience() {
  return (
    <div>
      <main>
        <EmployeeExperienceHeader />
        <PatronCallToAction
          background={"#A4DB08"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Empower your <span style={{ color: "#081334" }}>employees,</span>{" "}
              boost performance
            </Typography>
          }
          minorText={
            "Enhance your team's efficiency and elevate customer interactions, all while boosting loyalty and satisfaction"
          }
          buttonText={"Request a Demo"}
          buttonLink={"/"}
        />
        <FastLaunchSection
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Launch in a <span style={{ color: "#A4DB08" }}>flash!</span>
            </Typography>
          }
          description={
            <Typography
              fontSize={14}
              fontFamily={"Noto Sans"}
              fontWeight={300}
              sx={{ color: "grey", maxWidth: "800px" }}
              textAlign={"center"}
              lineHeight={2}
            >
              {`With our intuitive design and user-friendly interface, you'll be up and running in no time, enjoying seamless connectivity and top-notch performance.`}
              <br />
              {`Say goodbye to long installation processes and hello to instant productivity!!`}
            </Typography>
          }
          imageSrc={"/desktop-mobile-screens.svg"}
          altText={"desktop-mobile-screen"}
        />

        <PictureAndFeatures
          features={phoneSystemFeatures}
          imageSrc={"/man-on-phone.svg"}
          altText={"man on a phone"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Beyond a <br />
              Phone System, <br />A{" "}
              <span style={{ color: "#A4DB08" }}>Communication</span> Hub
            </Typography>
          }
          pictureSide="left"
        />
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
}
