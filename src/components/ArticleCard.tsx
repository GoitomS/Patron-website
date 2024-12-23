import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid2,
} from "@mui/material";
import Link from "next/link";

export interface Article {
  name: string;
  article: string;
  date_created: string; // Use ISO string format
  image_url?: string; // Optional, in case an image URL is available
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { name, article: description, date_created, image_url } = article;

  return (
    <Card sx={{ maxWidth: 345, height: "500px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image_url || "/placeholder.jpg"}
        alt={name}
      />
      <CardContent>
        <Grid2 container display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"flex-start"} height={"330px"}>
          <Grid2 size={{ xs: 12 }}>
            <Typography gutterBottom fontWeight={"bold"} textAlign={"left"}>
              {name}
            </Typography>
            <Typography textAlign={"left"} color="text.secondary">
              {description.length > 220 ? `${description.slice(0, 220)}...` : description}
            </Typography>
            <Typography
              variant="caption"
              textAlign={"left"}
              sx={{ marginTop: "10px" }}
              color="text.secondary"
              display="block"
              gutterBottom
            >
              {new Date(date_created).toLocaleDateString()}
            </Typography>
          </Grid2>
          <Grid2 >
            <Link
              href={"/blogs/article/" + name}
              style={{ textDecoration: "none", color: "#A4DB08" }}
            >
              Read More
            </Link>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
