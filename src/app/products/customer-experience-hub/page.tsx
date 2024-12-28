import ResourcesSection from "@/components/ResourcesSection";
import PatronCallToAction from "@/components/PatronCallToAction";
import PictureAndFeatures from "@/components/PictureAndFeatures";
import { Typography } from "@mui/material";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import GlobalHeader from "@/components/GlobalHeader";
import { listOfArticles } from "@/app/resources/components/listOfArticles";
import FastLaunchSection from "@/components/FastLaunchSection";
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

export default function CustomerExperience() {
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
                sx={{
                  color: "#081334",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                patron
                <span style={{ fontWeight: 400, color: "#A4DB08" }}>CC</span>
              </Typography>
              <Typography
                fontSize={40}
                fontFamily={"Noto Sans"}
                fontWeight={200}
                sx={{ color: "#081334", textAlign: { xs: "center", md: "left" } }}
              >
                Omnichannel Cloud
                <br />
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    fontFamily: "Noto Sans",
                    color: "#A4DB08",
                  }}
                >
                  Contact Center
                </span>
                <br />
                Solution
              </Typography>

            </>
          }
          description="Our innovative omnichannel contact center solution, ensures that your customers receive exceptional service, fostering loyalty and satisfaction. With seamless integrations and advanced features, we help you create a customer journey that stands out!"
          sideImageUrl="/customer-experience-header.png"
          altText="Customer Experience Header"
          primaryButton="View Prices and Plans"
          secondaryButton="Contact Sales"
          primaryLink="/prices-and-plans"
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
              Redefine <span style={{ color: "#081334" }}>Customer</span>{" "}
              connections for exceptional{" "}
              <span style={{ color: "#081334" }}>Experiences</span>
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
              Setup your{" "}
              <span style={{ color: "#A4DB08" }}>Contact Center</span> in
              minutes!
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
          imageSrc={"/agent-on-patron.svg"}
          altText={"desktop-mobile-screen"}
        />
        <PictureAndFeatures
          features={contactCenterFeatures}
          imageSrc={"/omnichannel-agent.svg"}
          altText={"Omnichannel agent character"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Advanced
              <br />
              <span style={{ color: "#A4DB08" }}>Contact Center</span> <br />
              features
            </Typography>
          }
          pictureSide="left"
        />
        <PictureAndFeatures
          features={manageContactCenterFeatures}
          imageSrc={"/contact-center-manager.svg"}
          altText={"Contact center manager"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Seamlessly
              <br />
              manage your
              <br />
              <span style={{ color: "#A4DB08" }}>Contact Center</span>
            </Typography>
          }
          pictureSide="right"
        />
        <PatronCallToAction
          background={"#081334"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              {`Managing a contact center shouldn't be a hassle.`}
              <br />
              <span style={{ color: "#A4DB08" }}>{`Let's talk!`}</span>
            </Typography>
          }
          minorText={""}
          buttonText={"Request a Demo"}
          buttonLink={"/"}
        />
        <PictureAndDescriptionSection
          imageSrc={"/360-degree-view.svg"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Get a<br />
              <span style={{ color: "#A4DB08" }}>360 degree view</span>
              <br />
              of Customers
            </Typography>
          }
          description={`Gain unparalleled insights into your customers with our platform. Centralize data from every touchpoint—purchase history, feedback, support interactions, and more. Our intuitive tools enable you to analyze customer behavior, personalize experiences, and anticipate needs with precision. Stay ahead of the competition by making data-driven decisions that build trust and loyalty. With a complete customer profile at your fingertips, you'll transform the way you engage, delight, and retain your customers, ensuring every interaction leaves a lasting impression. Start delivering exceptional experiences today!`}
          primaryButtonText="Contact Sales"
          primaryButtonLink="/"
          secondaryButtonLink={"/"}
          altText={"360 degree view"}
        />
        {/* <DedicatedSupport/> */}
        <PatronCallToAction
          background={"#A4DB08"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Our expert Support Team is here to assist you.
              <br />
              <span style={{ color: "#081334" }}>{`Let's talk!`}</span>
            </Typography>
          }
          minorText={""}
          buttonText={"Request a Demo"}
          buttonLink={"/"}
        />
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
}
