import Background from "@/assets/Images/TestimonialBg.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AdeImage from "@/assets/Images/Ade.png";
import CalebImage from "@/assets/Images/Celeb_O_Image.jpeg";
import WisImage from "@/assets/Images/Wisdom_Monday_Image.jpeg";

const TestimonialsData = [
  {
    pic: AdeImage,
    name: "Adebola Joseph",
    feedback:
      "Working With Eazytranzz has been transformative. Their professionalism, efficiency, and commitment to satisfaction are unmatched.",
  },
  {
    pic: CalebImage,
    name: "Caleb O.",
    feedback:
      "i've been dealing with eazytranz for over 2 years now and i have never had a bad experience exchanging currencies with eazytranz. They go out of their line to make sure i get my exchange on time. for me Eazytranz is so trusted, thank you eazytranz.",
  },
  {
    pic: WisImage,
    name: "Wisdom Monday",
    feedback:
      "I've been using eazytranz since 2022, recieving funds from my friends over there in the US, and i haven't had any issues with my transactions, and so far i really appreciate using the service of a sure brand like eazytranz.",
  },
  {
    pic: AdeImage,
    name: "Adebola Joseph",
    feedback:
      "Working With Eazytranzz has been transformative. Their professionalism, efficiency, and commitment to satisfaction are unmatched.",
  },
  {
    pic: CalebImage,
    name: "Caleb O.",
    feedback:
      "i've been dealing with eazytranz for over 2 years now and i have never had a bad experience exchanging currencies with eazytranz. They go out of their line to make sure i get my exchange on time. for me Eazytranz is so trusted, thank you eazytranz.",
  },
  {
    pic: WisImage,
    name: "Alice Johnson",
    feedback:
      "I've been using eazytranz since 2022, recieving funds from my friends over there in the US, and i haven't had any issues with my transactions, and so far i really appreciate using the service of a sure brand like eazytranz.",
  },
];

const Testimonials = () => {
  return (
    <div
      className="h-screen flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[70%] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-7xl "
      >
        <CarouselContent>
          {TestimonialsData.map((ele, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-black/50 backdrop-blur-md text-white border-white/20 hover:scale-105 transition-transform">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <span className="font-bold text-5xl">“</span>
                    <img
                      src={ele.pic}
                      className="w-32 h-32 object-cover rounded-full object-center"
                      alt=""
                    />
                    <span className="text-2xl my-4 font-semibold">
                      {ele.name}
                    </span>
                    <p className={`text-center`}>{ele.feedback}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;

//

// export function CarouselSize() {
//   return (

//   );
// }
