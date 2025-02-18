const ContactUsForm: React.FC = () => {
  return (
    <div className="w-full h-full text-black p-10 rounded-lg">
      <h2 className="text-3xl font-judson font-bold mb-2">Contact Us</h2>
      <form className="flex flex-col space-y-3">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="Your Name"
          className="p-1 text-black text-xl font-judson rounded bg-white"
          required
        />
        <input
          type="email"
          name="email"
          value={""}
          placeholder="Your Email"
          className="p-1 text-black text-xl font-judson rounded bg-white"
          required
        />
        <input
          type="text"
          name="organisation"
          value={""}
          placeholder="Your Organisation or University"
          className="p-1 text-black text-xl font-judson rounded bg-white"
          required
        />
        <textarea
          name="message"
          value={""}
          placeholder="Your Message..."
          className="p-1 h-30 text-black text-xl font-judson rounded bg-white "
          required
        />
        <button
          type="submit"
          className="bg-green-500 w-50 font-judson text-2xl text-white py-1 rounded transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
