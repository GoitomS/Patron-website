import ResourcesSection from "@/components/ResourcesSection";
import PatronCallToAction from "@/components/PatronCallToAction";
import { Grid2, Typography } from "@mui/material";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import { listOfArticles } from "../resources/components/listOfArticles";
import AboutUsHeader from "./components/AboutUsHeader";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
export default function AboutUs() {
  return (
    <div>
      <main>
        <AboutUsHeader />
        <PatronCallToAction
          background={"#081334"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Beyond <span style={{ color: "#A4DB08" }}>Profits</span>{" "}
            </Typography>
          }
          minorText={
            "We're not just a business; we're a community of passionate individuals dedicated to making a positive impact on the world. Our journey is a testament to the power of collaboration, innovation, and the pursuit of excellence. Join us on this exciting journey as we continue to shape the future of contact center solutions."
          }
          buttonText={""}
          buttonLink={"/"}
        />
        <PictureAndDescriptionSection
          imageSrc={"/building-puzzles.svg"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              {`Our story`}
            </Typography>
          }
          description={`Become a Partner and combine the power of our contact center solutions with the resources, support and expertise of our team to win more business, expand your offerings, provide outsized value to clients and drive business growth.

From the beginning, we set you up for success and our entire team (and fellow partners) are rooting for you every step of the way. \n- Training for your team to help you sell to prospective clients \n- Continuous support for your organization to ensure your clients receive seamless service \n- Guidance for onboarding new clients, adopting new features, and optimizing performance`}
          primaryButtonText="Contact us"
          primaryButtonLink="/"
          secondaryButtonLink={"/"}
          altText={"characters building a puzzle"}
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
              Our <span style={{ color: "#A4DB08" }}>Core Values</span>{" "}
            </Typography>
          }
          minorText={
            "Our core values are the foundation of everything we do."
          }
          buttonText={""}
          buttonLink={"/"}
          additionalFeatures={
            <Grid2
              container
              spacing={2}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Grid2
                size={{ xs: 4 }}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                px={2}
              >
                <TipsAndUpdatesOutlinedIcon
                  sx={{ fontSize: 50, color: "#A4DB08" }}
                />
                <Typography
                  fontSize={24}
                  fontFamily={"Noto Sans"}
                  fontWeight={800}
                  sx={{ color: "white" }}
                >
                  Innovation
                </Typography>
                <Typography
                  fontSize={14}
                  fontFamily={"Noto Sans"}
                  fontWeight={300}
                  sx={{ color: "white", textAlign: "center" }}
                >{`Innovation drives us forward. We're continually creating new solutions and refining our offerings.`}</Typography>
              </Grid2>
              <Grid2
                size={{ xs: 4 }}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                px={2}
              >
                <HandshakeOutlinedIcon
                  sx={{ fontSize: 50, color: "#A4DB08" }}
                />
                <Typography
                  fontSize={24}
                  fontFamily={"Noto Sans"}
                  fontWeight={800}
                  sx={{ color: "white" }}
                >
                  Collaboration
                </Typography>
                <Typography
                  fontSize={14}
                  fontFamily={"Noto Sans"}
                  fontWeight={300}
                  sx={{ color: "white", textAlign: "center" }}
                >{`We win as a team! We work closely to make sure that our clients and our team all move towards success.`}</Typography>
              </Grid2>
              <Grid2
                size={{ xs: 4 }}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                px={2}
              >
                <EmojiEventsOutlinedIcon
                  sx={{ fontSize: 50, color: "#A4DB08" }}
                />
                <Typography
                  fontSize={24}
                  fontFamily={"Noto Sans"}
                  fontWeight={800}
                  sx={{ color: "white" }}
                >
                  Excellence
                </Typography>
                <Typography
                  fontSize={14}
                  fontFamily={"Noto Sans"}
                  fontWeight={300}
                  sx={{ color: "white", textAlign: "center" }}
                >{`Great quality is a constant in all our operations. We all strive to deliver the highest quality and value for impact.`}</Typography>
              </Grid2>
            </Grid2>
          }
        />
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
}
