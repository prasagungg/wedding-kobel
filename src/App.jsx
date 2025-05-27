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
        <title>Raden & Maulidia</title>
        <meta name="title" content="Pernikahan Raden & Maulidia" />
        <meta
          name="description"
          content="Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Pernikahan Raden & Maulidia" />
        <meta
          property="og:description"
          content="Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini."
        />
        <meta
          property="og:image"
          content={`${window.location.origin}/thumbnail.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" type="image/x-icon" href={config.data.favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FDA4AF" />
      </Helmet>

      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <LandingPage
            key="landing"
            onOpenInvitation={() => setIsInvitationOpen(true)}
            guestName={guestName}
          />
        ) : (
          <Layout key="main">
            <MainContent />
          </Layout>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
