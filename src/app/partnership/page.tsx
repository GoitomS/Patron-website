import ResourcesSection from "@/components/ResourcesSection";
import PatronCallToAction from "@/components/PatronCallToAction";
import { Typography } from "@mui/material";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import { listOfArticles } from "../resources/components/listOfArticles";
import GlobalHeader from "@/components/GlobalHeader";


export default function Partnership() {
  return (
    <div>
      <main>
      <GlobalHeader
          backgroundImage="/background-image.png"
          title={
            <>
              <Typography
                        fontSize={40}
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                        sx={{ color: "#081334", textAlign: {
                          xs: 'center',
                          md: 'left',
                        }}}
                        
                      >
                        {`Let's build`}
          <br />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "Noto Sans",
              color: "#A4DB08",
            }}
          >
            Success
          </span>
          <br />
          together
                      </Typography>

            </>
          }
          description=" Partner with us, gain access to cutting-edge solutions, innovative tools, and a shared vision for delivering exceptional value to customers. \nLet's grow together!"
          sideImageUrl="/partnership.png"
          altText="Partnership"
          primaryButton=""
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
              Join forces with a <span style={{ color: "#081334" }}>leader</span>{" "}
              in Customer Experience
            </Typography>
          }
          minorText={
            "Together, we can transform interactions, drive engagement, and achieve mutual success."
          }
          buttonText={"Learn More"}
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
              {`Let's team up!`}
            </Typography>
          }
          description={`Become a Partner and combine the power of our contact center solutions with the resources, support and expertise of our team to win more business, expand your offerings, provide outsized value to clients and drive business growth.

From the beginning, we set you up for success and our entire team (and fellow partners) are rooting for you every step of the way. \n- Training for your team to help you sell to prospective clients \n- Continuous support for your organization to ensure your clients receive seamless service \n- Guidance for onboarding new clients, adopting new features, and optimizing performance`}
          primaryButtonText="Contact us"
          primaryButtonLink="/"
          secondaryButtonLink={"/"}
          altText={"characters building a puzzle"}
        />
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
}
