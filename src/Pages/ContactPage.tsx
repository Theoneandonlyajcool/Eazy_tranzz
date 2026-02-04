import ContactUsHero from "@/components/ContactUsHero";
import InfoTable from "@/components/InfoTable";
import OurOfficeLocation from "@/components/OurOfficeLocation";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Questions from "@/components/Questions";
import ContactContainer from "@/components/ContactContainer";

const ContactPage = () => {
  return (
    <div>
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
