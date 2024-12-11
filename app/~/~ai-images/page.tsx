import React from "react";
import { DashboardPage } from "../_components/dashboard-page";
import { Metadata } from "next";
import AIImagesPage from "./_components/main-page";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "AI Image";
  const description = "Browse and use ai images for your Patexa projects";

  return {
    title: `${title} - Patexa`,
    description,
    openGraph: {
      title: `${title} - Patexa`,
      description,
      type: "website",
      url: "https://patexa.com/dashboard/templates",
      siteName: "Patexa",
      images: [
        {
          url: "https://patexa.com/og-image-templates.jpg",
          width: 1200,
          height: 630,
          alt: "Patexa Templates",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Patexa`,
      description,
      images: ["https://patexa.com/og-image-templates.jpg"],
    },
  };
};

const AiImagePage = () => {
  return (
    <DashboardPage title="Ai Images">
      <AIImagesPage />
    </DashboardPage>
  );
};

export default AiImagePage;
