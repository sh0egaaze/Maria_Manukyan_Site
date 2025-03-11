
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Gallery from "@/components/home/Gallery";
import Achievements from "@/components/home/Achievements";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Gallery />
      <Achievements />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
