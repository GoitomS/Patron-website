'use client'
import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArticleCard, { Article } from "./ArticleCard";
import { Navigation, Pagination } from "swiper/modules";
import { listOfArticles } from "@/app/resources/components/listOfArticles";


interface ResourcesProps {
  articles: Article[];
}

const ResourcesSection: React.FC<ResourcesProps> = ({ articles }) => {
  return (
    <Box sx={{ padding: "20px", textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Typography fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334", marginBottom: "30px" }} gutterBottom>
        Resources
      </Typography>
      <Grid2 sx={{maxWidth: "850px"}} >
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: "20px" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {listOfArticles?.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
      </Grid2>
      
    </Box>
  );
};

export default ResourcesSection;
