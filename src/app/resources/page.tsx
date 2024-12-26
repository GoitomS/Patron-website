
import PatronCallToAction from "@/components/PatronCallToAction";
import { Grid2, Typography } from "@mui/material";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import { listOfArticles } from "./components/listOfArticles";
import ArticleCard from "@/components/ArticleCard";
import ResourcesHeader from "./components/ResourcesHeader";

export default function Resources() {
  return (
    <div>
      <main>
        <ResourcesHeader/>
        <Grid2 container display={"flex"} justifyContent={"center"} py={10} bgcolor={"#f9f9f9"}>
          <Grid2
            display={"flex"}
            justifyContent={"center"}
            sx={{ maxWidth: "1050px" }}
            gap={2}
          >
            {listOfArticles?.map((article, index) => {
              return (
                <Grid2 key={index} size={{ xs: 4 }}>
                  <ArticleCard article={article} />
                </Grid2>
              );
            })}
          </Grid2>
        </Grid2>
        <PatronCallToAction
          background={"#A4DB08"}
          majorText={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Join forces with a{" "}
              <span style={{ color: "#081334" }}>leader</span> in Customer
              Experience
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
      </main>
    </div>
  );
}
