import ScrollReveal from "../../context/animationContext";

interface ServiceCardProps {
  title: string;
  body: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, img }) => {
  return (
    <ScrollReveal
      className="flex justify-center items-center mx-5 xs:mx-0"
      animation="fadeIn"
    >
      <div className="w-108 h-60 md:w-75 md:h-150 lg:w-90 lg:h-180 xl:w-102 xl:h-190 p-5 justify-items-center overflow-hidden rounded-2xl border-1 md:mt-20">
        <div className="">
          <img
            className="w-30 h-20 md:w-auto md:h-auto"
            src={img}
            alt="service"
          />
        </div>

        <div className="place-items-center text-center font-judson font-bold text-xl md:text-2xl lg:text-3xl md:py-7">
          {title}
        </div>

        <div className="place-items-center text-justify font-judson text-sm md:text-lg lg:text-xl xl:text-2xl">
          {body}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ServiceCard;
