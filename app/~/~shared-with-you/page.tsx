import React from "react";
import { DashboardPage } from "../_components/dashboard-page";
import { Metadata } from "next";
import SharedPageMain from "./_components/shared-main";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Shared with you";
  const description = "View and manage items shared with you on Patexa";

  return {
    title: `${title} - Patexa`,
    description,
    openGraph: {
      title: `${title} - Patexa`,
      description,
      type: "website",
      url: "https://patexa.com/dashboard/shared",
      siteName: "Patexa",
      images: [
        {
          url: "https://patexa.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Patexa Dashboard",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Patexa`,
      description,
      images: ["https://patexa.com/og-image.jpg"],
    },
  };
};

const SharedPage = () => {
  return <SharedPageMain />;
};

export default SharedPage;
