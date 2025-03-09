import { memo } from "react";
import ScrollReveal from "../../context/animationContext";

interface ServiceCardProps {
  title: string;
  body: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ title, body, img }) => {
  return (
    <ScrollReveal
      className="flex justify-center items-center transition-transform duration-300 mx-5 xs:mx-0 hover:scale-102"
      animation="fadeIn"
    >
      <div className="w-70 h-150 s:w-100 md:w-80 lg:w-96 xl:w-102 p-5 flex flex-col items-center overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white/90 backdrop-blur-sm mx-5">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            className="w-full h-auto object-cover transition-transform hover:scale-105"
            src={img}
            alt={`${title} service`}
            loading="lazy"
          />
        </div>

        <h3 className="text-center font-judson font-bold text-lg text-green-900 s:text-xl md:text-2xl lg:text-3xl pb-4">
          {title}
        </h3>

        <p className="text-justify font-judson text-xs s:text-sm md:text-lg lg:text-xl">
          {body} <span className="text-green-900 mx-2 cursor-pointer hover:text-green-950">Learn More ➞</span>
        </p>
      </div>
    </ScrollReveal>
  );
});
ServiceCard.displayName = "ServiceCard";

export default ServiceCard;