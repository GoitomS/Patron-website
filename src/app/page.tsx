import { Typography } from "@mui/material";

import HeaderWithPicture from "@/components/HeaderWithPicture";
import ProductTabsOnHomePage from "@/components/ProductTabsOnHomePage";
import PatronCallToAction from "@/components/PatronCallToAction";
import PictureAndDescriptionSection from "@/components/PictureAndDescriptionSection";
import ResourcesSection from "@/components/ResourcesSection";
import { articles } from "@/components/articles";


export default function Home() {
  
  return (
    <div >
      <main>
        <HeaderWithPicture/>
        <ProductTabsOnHomePage/>
        <PatronCallToAction background="#A4DB08" majorText={`Simplify the way you connect with ${<span style={{color: "#081334"}}>Customers</span>}`}  minorText="Optimize your agents&apos; productivity and customer experience, while increasing customer retention and satisfaction." buttonText="Request a Demo" buttonLink="/" />
        <PictureAndDescriptionSection/>
        <ResourcesSection articles={articles}/>
      </main>
      
    </div>
  );
}
