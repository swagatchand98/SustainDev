interface ServiceCardProps {
  title: string;
  body: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, img }) => {
  return (
    <div className="w-102 h-194 p-5 justify-items-center overflow-hidden rounded-2xl border-1 mt-20">
      <div className="">
        <img className="" src={img} alt="service" />
      </div>

      <div className="place-items-center text-center font-judson font-bold text-3xl py-7">
        {title}
      </div>

      <div className="place-items-center text-justify font-judson text-2xl">
        {body}
      </div>
    </div>
  );
};

export default ServiceCard;
