"use client";

import { usePathname } from "next/navigation";

import React from "react";
import { listOfArticles } from "../components/listOfArticles";
import ResourcesHeader from "../components/ResourcesHeader";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";

const ArticlePage = () => {
  const pathname = usePathname();
  // const { id } = router.query
  console.log(pathname.split("/")[2]);
  const article = listOfArticles.find(
    (article) => article.id === pathname.split("/")[2]
  );
  return (
    <div>
      <main>
        <ResourcesHeader />
        <Grid2 container display={"flex"} justifyContent={"center"} mt={5}>
          <Grid2 size={{ xs: 12 }} sx={{ maxWidth: 950 }}>
            <Grid2 container display={"flex"} mb={5} justifyContent={"center"} alignItems={"top"}>
              <Grid2 size={{ xs: 8 }} px={3}>
                <Typography
                  fontSize={30}
                  fontFamily={"Noto Sans"}
                  fontWeight={800}
                  sx={{
                    color: "#081334",

                  }}
                >
                  {article?.name}
                </Typography>
                {article?.content.map((section, index) => {
                  return (
                    <Grid2 key={index} px={3}>

                    <Typography
                      fontSize={18}
                      fontFamily={"Noto Sans"}
                      fontWeight={700}
                      sx={{
                        color: "#081334",
                        marginTop: "10px",
                      }}
                    >
                      {section.name}
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontFamily={"Noto Sans"}
                      fontWeight={300}
                      lineHeight={2}
                      sx={{
                        color: "#081334",
                        marginTop: "10px",
                      }}
                    >
                      {section.content}
                    </Typography>
                    {section.imageUrl && (
                        <Image src={section.imageUrl} alt="image" width={500} height={500} />
                    )}
                    </Grid2>
                  );
                })}
                <Typography>
                </Typography>
              </Grid2>
              <Grid2 size={{ xs: 4 }} bgcolor={"red"}>

              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </main>
    </div>
  );
};

export default ArticlePage;
