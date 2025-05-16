import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import MainContent from "@/pages/MainContent";
import LandingPage from "@/pages/LandingPage";
import { Helmet, HelmetProvider } from "react-helmet-async";
import config from "@/config/config";

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");

    if (!guestParam) {
      setGuestName("");

      return;
    }

    setGuestName(decodeURIComponent(guestParam));
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{config.data.title}</title>
        <meta name="title" content={config.data.title} />
        <meta name="description" content={config.data.description} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={config.data.title} />
        <meta property="og:description" content={config.data.description} />
        <meta property="og:image" content={config.data.ogImage} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={config.data.title} />
        <meta
          property="twitter:description"
          content={config.data.description}
        />
        <meta property="twitter:image" content={config.data.ogImage} />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href={config.data.favicon} />
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FDA4AF" /> {/* Rose-300 color */}
      </Helmet>

      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <LandingPage
            onOpenInvitation={() => setIsInvitationOpen(true)}
            guestName={guestName}
          />
        ) : (
          <Layout>
            <MainContent />
          </Layout>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
