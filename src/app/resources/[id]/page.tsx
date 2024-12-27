"use client";

import { usePathname } from "next/navigation";

import React from "react";
import { listOfArticles } from "../components/listOfArticles";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const ArticlePage = () => {
  const pathname = usePathname();
  const article = listOfArticles.find(
    (article) => article.id === pathname.split("/")[2]
  );
  const recentArticles = listOfArticles.slice(0, 3);
  return (
    <div>
      <main>
        <Grid2 container display={"flex"} justifyContent={"center"} mt={5}>
          <Image
            src={article?.image_url || ""}
            alt={article?.alt_text || "image"}
            width={500}
            height={500}
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
              <Grid2 size={{ xs: 12, md: 8 }} px={3}>
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
                        <Image
                          src={section.imageUrl}
                          alt="image"
                          width={500}
                          height={500}
                        />
                      )}
                    </Grid2>
                  );
                })}
                <Typography></Typography>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }} sx={{ maxWidth: 350 }}>
                <Grid2
                  container
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                >
                  <Grid2
                    size={{ xs: 12 }}
                    bgcolor={"#f9f9f9"}
                    p={2}
                    pb={4}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Typography
                      fontSize={16}
                      fontFamily={"Noto Sans"}
                      fontWeight={800}
                      lineHeight={2}
                      sx={{
                        color: "#081334",
                        marginTop: "10px",
                      }}
                    >
                      Recently Added
                    </Typography>

                    {recentArticles.map((article, index) => {
                      return (
                        <Link
                          key={index}
                          className={styles.link}
                          style={{
                            marginTop: 20,
                            marginLeft: 20,
                            fontSize: 14,
                          }}
                          href={`/resources/${article.id}`}
                        >
                          {article.name}
                        </Link>
                      );
                    })}
                  </Grid2>
                  <Grid2 size={{ xs: 12 }} bgcolor={"#f9f9f9"} p={3}>
                    <Typography
                      fontSize={16}
                      fontFamily={"Noto Sans"}
                      fontWeight={800}
                      lineHeight={2}
                      sx={{
                        color: "#081334",
                        marginTop: "10px",
                      }}
                    >
                      Got questions?
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontFamily={"Noto Sans"}
                      fontWeight={300}
                      lineHeight={2}
                    >
                      Have any question on how{" "}
                      <span style={{ color: "#A4DB08" }}>Patron</span> can help
                      you improve your Customer Experience? <br />
                      <br />
                      {`Let's talk!`}
                    </Typography>
                    <Typography
                      fontSize={"16px"}
                      sx={{
                        color: "#081334",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "20px",
                        fontFamily: "Noto Sans",
                        fontWeight: 300
                      }}
                    >
                      <MailIcon
                        sx={{ color: "#A4DB08", marginRight: "10px" }}
                      />{" "}
                      help@patron-cx.com
                    </Typography>
                    <Typography
                      fontSize={"16px"}
                      sx={{
                        color: "#081334",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "20px",
                        fontFamily: "Noto Sans",
                        fontWeight: 300
                      }}
                    >
                      <LocalPhoneIcon
                        sx={{ color: "#A4DB08", marginRight: "10px" }}
                      />{" "}
                      +1 (888) 123-4567
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </main>
    </div>
  );
};

export default ArticlePage;
