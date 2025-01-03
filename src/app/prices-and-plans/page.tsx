import ResourcesSection from "@/components/ResourcesSection";

import PatronCallToAction from "@/components/PatronCallToAction";
import { Typography } from "@mui/material";
import PricesAndPlansSection from "./components/PricesAndPlansSection";
import { listOfArticles } from "../resources/components/listOfArticles";

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
        
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
}
