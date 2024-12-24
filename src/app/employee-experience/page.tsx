
import ResourcesSection from "@/components/ResourcesSection";
import { articles } from "@/components/articles";
import EmployeeExperienceHeader from "./components/EmployeeExperienceHeader";
import PatronCallToAction from "@/components/PatronCallToAction";
import FastLaunchSection from "./components/FastLaunchSection";
import PictureAndFeatures from "@/components/PictureAndFeatures";
import { Typography } from "@mui/material";
const phoneSystemFeatures = ["New local or toll-free numbers", "Instant Number Porting", "SMS/MMS", "Dynamic IVRs", "Call transfers", "Intelligent call routing", "Call detail records", "Dynamic queue management", "Dashboards and Reports", "Manage global teams"]

export default function EmployeeExperience() {
  
  return (
    <div >
      <main>
        <EmployeeExperienceHeader/>
        <PatronCallToAction background={'#A4DB08'} majorText={"Empower your employees, boost performance"} minorText={"Enhance your team's efficiency and elevate customer interactions, all while boosting loyalty and satisfaction"} buttonText={"Request a Demo"} buttonLink={"/"}/>
        <FastLaunchSection/>

        <PictureAndFeatures features={phoneSystemFeatures} imageSrc={"/man-on-phone.svg"} altText={"man on a phone"} title={<Typography
            fontSize={30}
            fontFamily={"Noto Sans"}
            fontWeight={800}
            sx={{ color: "#081334" }}
          >
            Beyond a <br/>Phone System, <br/>A <span style={{color:"#A4DB08"}}>Communication</span> Hub
          </Typography>}/>
          <ResourcesSection articles={articles}/>
      </main>
      
    </div>
  );
}
