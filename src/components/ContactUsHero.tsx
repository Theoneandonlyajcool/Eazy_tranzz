import ContactHeroPics from "@/assets/Images/ContactHeroPics.jpg";
import { Button } from "@/components/ui/button";

const ContactUsHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={ContactHeroPics}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-center bg-no-repeat"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="z-30 flex flex-col  items-center justify-center text-white text-center absolute top-0 left-0 w-full h-screen px-4 sm:px-6">
        <Button className="w-[119px] h-[42px] rounded-full border-[2.18px] mt-10 border-[#AD46FF33] bg-linear-to-r from-[#AD46FF33] to-[#2B7FFF33] text-white flex items-center justify-center cursor-pointer">
          Get In Touch
        </Button>

        <div className="text-center mt-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            We're Here to Help
          </h1>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold 
                 bg-linear-to-r from-[#953E79] to-[#440830] 
                 text-transparent bg-clip-text mt-2"
          >
            24/7 Support
          </h1>
        </div>

        <div className="flex mt-6 justify-center">
          <h1 className="text-[18px] sm:text-[20px] md:text-[26px] lg:text-[28px] font-inter text-[#99A1AF] leading-snug sm:leading-relaxed">
            Have questions about our services? Need assistance with a
            transaction? Our <br className="hidden sm:block" />
            dedicated support team is always ready to help you.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
