import ResourcesSection from "@/components/ResourcesSection";
import PatronCallToAction from "@/components/PatronCallToAction";
import { Grid2, Typography } from "@mui/material";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import { listOfArticles } from "../resources/components/listOfArticles";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GlobalHeader from "@/components/GlobalHeader";
export default function AboutUs() {
  return (
    <div>
      <main>
        <GlobalHeader backgroundImage="/background-image.png" title={<Typography
                      fontSize={40}
                      fontFamily={"Noto Sans"}
                      fontWeight={200}
                      sx={{ color: "#081334", textAlign: {
                        xs: 'center',
                        md: 'left',
                      }}}
                    >
                      {`Discover Our`}
                      <br />
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: 800,
                          fontFamily: "Noto Sans",
                          color: "#A4DB08",
                        }}
                      >
                        Journey and Vision
                      </span>
                    </Typography>} 
                    description="Join us as we continue to push the boundaries and shape the future together."
                    sideImageUrl="/about-us-header.png"
                    altText="About Us Image"
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
              Beyond <span style={{ color: "#A4DB08" }}>Profits</span>{" "}
            </Typography>
          }
          minorText={
            "We're not just a business; we're a community of passionate individuals dedicated to making a positive impact on the world. Our journey is a testament to the power of collaboration, innovation, and the pursuit of excellence. \nJoin us on this exciting journey as we continue to shape the future of customer Experience solutions."
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
          description={`Our journey began with a simple vision: to build a call center communication platform that would streamline customer interactions. With a small, dedicated team, we poured our passion and expertise into creating a solution that met the needs of our clients. As we listened to feedback and observed the evolving landscape, we realized the potential to do more. Through intentional collaboration and a shared belief in our vision, we transformed our platform into a comprehensive customer experience hub. Today, our product not only facilitates seamless communication but also enhances customer engagement and satisfaction. Our story is a testament to the power of a small team working together with purpose and determination to create something truly remarkable. We continue to innovate and grow, driven by the same spirit that started it all.`}
          primaryButtonText=""
          primaryButtonLink=""
          secondaryButtonLink={""}
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
