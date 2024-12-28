import ResourcesSection from "@/components/ResourcesSection";
import PatronCallToAction from "@/components/PatronCallToAction";
import PictureAndFeatures from "@/components/PictureAndFeatures";
import { Typography } from "@mui/material";
import GlobalHeader from "@/components/GlobalHeader";
import { listOfArticles } from "@/app/resources/components/listOfArticles";
import FastLaunchSection from "@/components/FastLaunchSection";
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
        <GlobalHeader
          backgroundImage="/background-image.png"
          title={
            <>
              <Typography
                       fontSize={26}
                       fontFamily={"Noto Sans"}
                       fontWeight={900}
                       sx={{ color: "#081334", textAlign: {
                    xs: "center",
                    md: "left",
                  } }}
                       
                      >
                        patron<span style={{fontWeight: 400, color: "#A4DB08" }}>EX</span>
                      </Typography>
                      <Typography
                        fontSize={40}
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                        sx={{ color: "#081334", textAlign: {
                    xs: "center",
                    md: "left",
                  } }}
                        
                      >
                        Your trusted
                        <br />
                        <span
                          style={{
                            fontSize: 40,
                            fontWeight: 800,
                            fontFamily: "Noto Sans",
                            color: "#A4DB08",
                          }}
                        >
                          Business Phone
                        </span>
                        <br />
                        system
                      </Typography>

            </>
          }
          description="Stay connected with your clients and team members effortlessly. \nTrusted performance, unparalleled clarity and convenience in every call."
          sideImageUrl="/truck-driver-phone.png"
          altText="Truck driver on a call"
          primaryButton="Request a Demo"
          secondaryButton="Contact Sales"
          primaryLink="/request-demo"
          secondaryLink="/contact-sales"
        />
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
