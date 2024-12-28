import { Typography } from "@mui/material";
import { ReactElement } from "react";

interface sectionsType {
  id: number;
  name: string;
  content: ReactElement<typeof Typography> | string;
  imageUrl?: string;
}
interface ServicesType {
  id: number | string;
  name: string;
  content: sectionsType[];
  image_url: string;
  alt_text?: string;
  category?: string;
}
interface listOfServicesProps {
  services: ServicesType[];
}
export const listOfServices: listOfServicesProps["services"] = [
  {
    id: `it-support`,
    name: "IT Support",
    content: [
      {
        id: 0,
        name: "",
        content:
        `In today's IT support industry, having a comprehensive customer experience platform is essential. Our solution integrates omnichannel contact center features, a built-in case management system, CRM, workflow management, workforce management, and quality assurance modules, making it the perfect fit for your business.`,
        imageUrl: "/24-7-support.svg"    
    },
      {
        id: 1,
        name: "",
        content:
        `With our omnichannel contact center, customers can reach out through their preferred communication channels, enhancing convenience and satisfaction. The built-in case management system ensures efficient ticketing and tracking, so no issue is overlooked. Our integrated CRM provides a 360-degree view of customer interactions, enabling personalized service and faster issue resolution.`, 
    },
      {
        id: 2,
        name: "",
        content:
          "Our workflow management system optimizes internal processes by automating routine tasks and reducing manual errors. The workforce management system ensures the right resources are available at the right time. Lastly, our quality assurance module helps maintain high service standards by monitoring and evaluating agent performance.",
      },
      {
        id: 3,
        name: "",
        content:
          "In summary, our customer experience platform enhances customer satisfaction, streamlines operations, and ensures consistent, high-quality service delivery, making it the ideal solution for your IT support business.",
      },
    ],
    image_url: "/call-center-agent.svg",
  },
  {
    id: `healthcare`,
    name: "Healthcare",
    content: [
      {
        id: 0,
        name: "",
        content:
        `In the healthcare industry, the need for a comprehensive customer experience platform is paramount. Our solution, which integrates omnichannel contact center features, a built-in case management system, CRM, workflow management, workforce management, and quality assurance modules, is the perfect fit for healthcare businesses.`,
        imageUrl: "/Telehealth-call-center.jpeg"    
    },
      {
        id: 1,
        name: "",
        content:
        `Healthcare providers must ensure that patients can reach out through their preferred communication channels, whether it's phone, email, chat, or social media. This flexibility enhances patient convenience and satisfaction, leading to better patient retention and trust. The built-in case management system ensures that no patient issue is overlooked, allowing healthcare providers to efficiently manage and resolve cases, improving response times and overall care quality.`, 
    },
      {
        id: 2,
        name: "",
        content:
          "Our integrated CRM provides a 360-degree view of patient interactions, enabling healthcare teams to personalize their service and build stronger relationships with patients. By having all patient information in one place, healthcare providers can quickly access relevant data, leading to faster issue resolution and a more personalized patient experience.",
      },
      {
        id: 3,
        name: "",
        content:
          "Our customer experience platform enhances patient satisfaction, streamlines operations, and ensures consistent, high-quality care delivery, making it the ideal solution for your healthcare business..",
      },
    ],
    image_url: "/telehealth-call.png",
  },
  {
    id: `it-support`,
    name: "IT Support",
    content: [
      {
        id: 0,
        name: "",
        content:
        `In today's IT support industry, having a comprehensive customer experience platform is essential. Our solution integrates omnichannel contact center features, a built-in case management system, CRM, workflow management, workforce management, and quality assurance modules, making it the perfect fit for your business.`,
        imageUrl: "/24-7-support.svg"    
    },
      {
        id: 1,
        name: "",
        content:
        `With our omnichannel contact center, customers can reach out through their preferred communication channels, enhancing convenience and satisfaction. The built-in case management system ensures efficient ticketing and tracking, so no issue is overlooked. Our integrated CRM provides a 360-degree view of customer interactions, enabling personalized service and faster issue resolution.`, 
    },
      {
        id: 2,
        name: "",
        content:
          "Our workflow management system optimizes internal processes by automating routine tasks and reducing manual errors. The workforce management system ensures the right resources are available at the right time. Lastly, our quality assurance module helps maintain high service standards by monitoring and evaluating agent performance.",
      },
      {
        id: 3,
        name: "",
        content:
          "In summary, our customer experience platform enhances customer satisfaction, streamlines operations, and ensures consistent, high-quality service delivery, making it the ideal solution for your IT support business.",
      },
    ],
    image_url: "/call-center-agent.svg",
  },
];
