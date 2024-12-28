"use client";

import { usePathname } from "next/navigation";

import React from "react";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { listOfServices } from "../components/listOfServices";
import ResourcesSection from "@/components/ResourcesSection";
import { listOfArticles } from "@/app/resources/components/listOfArticles";
import PatronCallToAction from "@/components/PatronCallToAction";
const Sercice = () => {
  const pathname = usePathname();
  const service = listOfServices.find(
    (serviceType) => serviceType.id === pathname.split("/")[2]
  );
  return (
    <div>
      <main>
        <Grid2 container display={"flex"} justifyContent={"center"} mt={5}>
          <Image
            src={service?.image_url || ""}
            alt={service?.alt_text || "image"}
            width={400}
            height={500}
            style={{
                objectFit: "contain",
                width: "auto",
                height: "500px",
            }}
          />
        </Grid2>
        <Grid2 container display={"flex"} justifyContent={"center"} mt={5}>
          <Grid2 size={{ xs: 12 }} sx={{ maxWidth: 950 }}>
            <Grid2
              container
              display={"flex"}
              mb={5}
              justifyContent={"center"}
              alignItems={"top"}
            >
              <Grid2 size={{ xs: 12 }} px={3}>
                <Typography
                  fontSize={30}
                  fontFamily={"Noto Sans"}
                  fontWeight={800}
                  sx={{
                    color: "#081334",
                  }}
                >
                  {service?.name}
                </Typography>
                {service?.content.map((section, index) => {
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
                        <Image
                          src={section.imageUrl}
                          alt="image"
                          width={300}
                          height={500}
                          placeholder="empty"
                          style={{
                            width: 'auto',
                            height: "500px",
                            objectFit: "contain"
                          }}
                          
                        />
                      )}
                    </Grid2>
                  );
                })}
              </Grid2>
            </Grid2>
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
              {`We'll set you up in`} <span style={{ color: "#081334" }}>Minutes</span>{" "}
            </Typography>
          }
          minorText={
            "We strive to provide you with the best solution for your business needs. Our team of experts is here to assist you every step of the way."
          }
          buttonText={"Contact Sales"}
          buttonLink={"/"}
        />
        <ResourcesSection articles={listOfArticles} />
      </main>
    </div>
  );
};

export default Sercice;
