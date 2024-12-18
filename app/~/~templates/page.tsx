import React from "react";
import { DashboardPage } from "../_components/dashboard-page";
import { Metadata } from "next";
import TemplatesPage from "./_components/main-page";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Templates";
  const description = "Browse and use templates for your Patexa projects";

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

const Templates = () => {
  return (
    <DashboardPage title="Templates">
      <TemplatesPage />
    </DashboardPage>
  );
};

export default Templates;
