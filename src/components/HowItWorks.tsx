import { ArrowRight } from "lucide-react";
import step1Image from "@/assets/Images/728d8f3ab2849cc4b6256e7a917a2572dda1c29f.png";
import step2Image from "@/assets/Images/4f8acdd57ad349f4d7dcbb5106607846c5ec3d24.jpg";
import step3Image from "@/assets/Images/3f4855266ee8811523c8a5f353e6c4676aaed5a0.jpg";

interface StepCardProps {
  image: string;
  title: string;
  description: string;
  isMiddle?: boolean;
  delay: number;
}

const StepCard = ({
  image,
  title,
  description,
}: //   isMiddle,
//   delay,
StepCardProps) => {
  return (
    <div className="flex flex-col justify-between w-[20rem] m-4 rounded-xl overflow-clip shadow-xl hover:shadow-2xl hover:scale-105 md:w-88 h-104 cursor-pointer transition-all ease-in-out duration-300">
      {/* image conatiner */}
      <div className="w-full h-[60%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="w-full bg-linear-to-tr from-[#0D0106] to-[#252525] text-white p-2">
        <h3 className="mb-3 text-lg font-bold leading-tight">{title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {/* Learn more link */}
        <p className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-gray-500 text-white">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </div>
    // <div
    //   className={`relative flex flex-col rounded-2xl bg-card  justify-between card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 shadow-2xl overflow-clip w-[20rem] h-[25rem] ${
    //     isMiddle ? "lg:-mt-6" : ""
    //   }`}
    //   style={{ animationDelay: `${delay}ms` }}
    // >
    //   {/* Image container */}
    //   <div
    //     className={`relative mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full ${
    //       isMiddle ? "bg-primary/10" : ""
    //     }`}
    //   >
    //     <img
    //       src={image}
    //       alt={title}
    //       className="h-full w-full object-contain"
    //       loading="lazy"
    //     />
    //   </div>

    //   {/* Content */}
    //   <div className="w-full border-2 border-red-600 bg-linear-to-tr from-[#0D0106] to-[#252525] text-white p-2">
    //     <h3 className="mb-3 text-lg font-bold leading-tight">{title}</h3>
    //     <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
    //       {description}
    //     </p>

    //     {/* Learn more link */}
    //     <a
    //       href="#"
    //       className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-gray-500 text-white"
    //     >
    //       Learn more
    //       <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    //     </a>
    //   </div>
    // </div>
  );
};

const ConnectorLine = () => {
  return (
    <svg
      className="absolute left-1/2 top-24 hidden h-16 w-full -translate-x-1/2 lg:block"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="64"
      viewBox="0 0 128 64"
      fill="none"
    >
      {/* <g clip-path="url(#clip0_260_416)">
        <path
          d="M0 32C42.6667 10.6667 85.3333 10.6667 128 32"
          stroke="#09090B"
          stroke-width="2"
          stroke-dasharray="4 4"
        />
      </g>
      <defs>
        <clipPath id="clip0_260_416">
          <rect width="128" height="64" fill="white" />
        </clipPath>
      </defs> */}
    </svg>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      image: step1Image,
      title: "Tell Us How You Want to Receive Your Money",
      description:
        "Choose from Cashapp, PayPal, Payoneer, Wise, Stripe, Zelle, etc.",
    },
    {
      image: step2Image,
      title: "We Provide the Best Option + Our Exchange Rate",
      description:
        "We automatically match you with the platform that accepts your client's payment method.",
      isMiddle: true,
    },
    {
      image: step3Image,
      title: "Your Client Pays, We Confirm, You Get Your Funds",
      description:
        "Fast delivery to your Nigerian bank account or mobile money.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            How EazyTranzz Works
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Get started in these simple steps and start receiving international
            payments today.
          </p>
        </div>

        {/* Steps grid with connector */}
        <div className="relative mx-auto max-w-6xl">
          <ConnectorLine />
          <div className="flex flex-col items-center justify-center lg:flex-row">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                image={step.image}
                title={step.title}
                description={step.description}
                isMiddle={step.isMiddle}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
