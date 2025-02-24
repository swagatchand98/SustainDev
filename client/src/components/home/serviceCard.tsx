import ScrollReveal from "../../context/animationContext";

interface ServiceCardProps {
  title: string;
  body: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, img }) => {
  return (
    <ScrollReveal
      className="flex justify-center items-center transition-transform mx-5 xs:mx-0 hover:scale-105"
      animation="fadeIn"
    >
      <div className="w-85 h-55 s:h-60 s:w-100 md:w-75 md:h-150 lg:w-90 lg:h-180 xl:w-102 xl:h-190 p-5 justify-items-center overflow-hidden rounded-2xl border-1 md:mt-20">
        <div className="">
          <img
            className="w-30 h-20 md:w-auto md:h-auto"
            src={img}
            alt="service"
          />
        </div>

        <div className="place-items-center text-center font-judson font-bold text-lg s:text-xl md:text-2xl lg:text-3xl md:py-7">
          {title}
        </div>

        <div className="place-items-center text-justify font-judson text-xs s:text-sm md:text-lg lg:text-xl xl:text-2xl">
          {body}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ServiceCard;
