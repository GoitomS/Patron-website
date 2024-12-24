import { Typography } from "@mui/material";

import HeaderWithPicture from "@/components/HeaderWithPicture";
import ProductTabsOnHomePage from "@/components/ProductTabsOnHomePage";
import PatronCallToAction from "@/components/PatronCallToAction";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import ResourcesSection from "@/components/ResourcesSection";
import { articles } from "@/components/articles";

export default function Home() {
  return (
    <div>
      <main>
        <HeaderWithPicture />
        <ProductTabsOnHomePage />
        <PatronCallToAction
          background="#A4DB08"
          majorText={`Simplify the way you connect with Customers`}
          minorText="Optimize your agents' productivity and customer experience, while increasing customer retention and satisfaction."
          buttonText="Request a Demo"
          buttonLink="/"
        />
        <PictureAndDescriptionSection
          imageSrc={"/woman-on-phone.svg"}
          title={
            <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              Customized <span style={{ color: "#A4DB08" }}>solutions</span> for
              every sector
            </Typography>
          }
          description={`We are committed to providing tailored solutions that meet the unique needs of various industries. Whether you're in healthcare, finance, retail, or any other sector, our technology is designed to adapt and deliver exceptional results. We understand that each industry has its own set of challenges and requirements, and our solutions are crafted to address these specific needs. By leveraging our expertise and innovative approach, we ensure that your business can thrive and achieve its goals with the right tools and support. Experience the difference with our customized solutions for every sector.`}
          primaryButtonText="Contact Sales"
          primaryButtonLink="/"
          secondaryButtonLink={"/"}
          altText={"Woman holding a phone"}
        />
        <ResourcesSection articles={articles} />
      </main>
    </div>
  );
}
