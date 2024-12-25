import ResourcesSection from "@/components/ResourcesSection";
import { articles } from "@/components/articles";
import PatronCallToAction from "@/components/PatronCallToAction";
import PictureAndFeatures from "@/components/PictureAndFeatures";
import { Typography } from "@mui/material";
import FastLaunchSection from "../employee-experience/components/FastLaunchSection";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import PricesAndPlansSection from "./components/PricesAndPlansSection";
const contactCenterFeatures = [
  "Setup and launch in minutes",
  "Automatic Call Distribution (ACD)",
  "Call Detail Records (CDR)",
  "Interactive Voice Response (IVR)",
  "Call Recording",
  "Call Whispering",
  "Call Barging",
  "Call spying",
  "Built-in dynamic dialer",
  "Inbound/Outbound",
];
const manageContactCenterFeatures = [
  "Workforce management",
  "Built-in CRM",
  "Integrated Case Management",
  "Outbound campaigns",
  "Agent and Admin portals",
  "Dynamic role & access configuration",
  "User management",
  "Dynamic queue management",
  "Dashboards and Reports",
  "Surveys",
];

export default function PricesAndPlans() {
  return (
    <div>
      <main>
      <PricesAndPlansSection/>
      <PatronCallToAction
          background={"#A4DB08"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Flexible <span style={{ color: "#081334" }}>Pricing Options:</span>{" "}
              Contact us for a custom quote
            </Typography>
          }
          minorText={
            "If our standard plans don't meet your needs, we're here to help. Contact our sales team for a customized price tailored to your specific requirements. We're committed to providing flexible options that work for you."
          }
          buttonText={"Contact Sales"}
          buttonLink={"/"}
        />
        
        {/* <DedicatedSupport/> */}
        
        <ResourcesSection articles={articles} />
      </main>
    </div>
  );
}
