import { motion } from "motion/react";

const ContactUsForm: React.FC = () => {
  return (
    <motion.div className="w-full h-full text-black p-2 md:p-4 lg:p-10 rounded-lg"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-judson font-bold mb-2">Contact Us</h2>
      <form className="flex flex-col space-y-3">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="Your Name"
          className="p-1 text-black text-sm font-judson rounded bg-white"
          required
        />
        <input
          type="email"
          name="email"
          value={""}
          placeholder="Your Email"
          className="p-1 text-black text-sm font-judson rounded bg-white"
          required
        />
        <input
          type="text"
          name="organisation"
          value={""}
          placeholder="Your Organisation or University"
          className="p-1 text-black text-sm font-judson rounded bg-white"
          required
        />
        <textarea
          name="message"
          value={""}
          placeholder="Your Message..."
          className="p-1 h-20 md:h-30 text-black text-sm font-judson rounded bg-white "
          required
        />
        <motion.button
          type="submit"
          className="bg-green-500 w-15 md:w-50 font-judson text-lg md:text-2xl text-white py-1 rounded transition cursor-pointer"
          whileHover={{scale: 1.05}}
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactUsForm;
