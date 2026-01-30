import Header from "@/components/Header";
import ContactUsHero from "@/components/ui/ContactUsHero";
import ContactContainer from "@/components/ui/ContactContainer";
import InfoTable from "@/components/InfoTable";
import OurOfficeLocation from "@/components/OurOfficeLocation";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Questions from "@/components/Questions";
const ContactPage = () => {
  return (
    <div className=" bg-black">
      <Header />
      <ContactUsHero />
      <ContactContainer />
      <InfoTable />
      <OurOfficeLocation />
      <FrequentlyAsked />
      <Questions />
    </div>
  );
};

export default ContactPage;
