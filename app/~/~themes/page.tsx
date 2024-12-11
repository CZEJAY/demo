import React from "react";
import { DashboardPage } from "../_components/dashboard-page";
import { Metadata } from "next";
import ThemesPage from "./_components/main-page";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Themes";
  const description = "Browse and use themes for your Patexa projects";

  return {
    title: `${title} - Patexa`,
    description,
    openGraph: {
      title: `${title} - Patexa`,
      description,
      type: "website",
      url: "https://patexa.com/dashboard/sites",
      siteName: "Patexa",
      images: [
        {
          url: "https://patexa.com/og-image-sites.jpg",
          width: 1200,
          height: 630,
          alt: "Patexa sites",
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

const Themes = () => {
  return (
    <DashboardPage title="Themes">
      <ThemesPage />
    </DashboardPage>
  );
};

export default Themes;
