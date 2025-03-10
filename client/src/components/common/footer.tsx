import { motion } from "motion/react";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import logo from '../../assets/logo.png';

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Works", href: "/works" },
  { name: "Career", href: "/career" }
];

const helpLinks = [
  { name: "Customer Support", href: "/support" },
  { name: "Pickup Details", href: "/pickup" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" }
];

const socialLinks = [
  { icon: <FaSquareXTwitter />, href: "https://twitter.com/sustaindev", label: "Twitter" },
  { icon: <FaSquareGithub />, href: "https://github.com/sustaindev", label: "GitHub" },
  { icon: <FaInstagramSquare />, href: "https://instagram.com/sustaindev", label: "Instagram" },
  { icon: <FaSquareEnvelope />, href: "mailto:contact@sustaindev.com", label: "Email" }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-green-300">
      <div className="container mx-auto px-4 pt-6 py-2">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Social Section */}
          <div className="max-w-xs">
            <div className="cursor-pointer mb-4">
              <img className="w-32 md:w-40" src={logo} alt="SustainDev Logo" />
            </div>

            <div className="font-judson text-lg md:text-xl lg:text-2xl mb-4 ml-2">
              Get paid to recycle!
            </div>

            <div className="flex gap-8 items-center ml-2 mt-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-xl md:text-2xl text-gray-800 hover:text-green-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 md:gap-16">
            {/* Company Links */}
            <div>
              <h3 className="font-judson text-lg md:text-xl font-bold mb-3">
                Company
              </h3>
              
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.05 }}>
                    <a
                      href={link.href}
                      className="font-judson text-sm md:text-lg hover:text-green-700 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="font-judson text-lg md:text-xl font-bold mb-3">
                Help
              </h3>
              
              <ul className="space-y-2">
                {helpLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.05 }}>
                    <a
                      href={link.href}
                      className="font-judson text-sm md:text-lg hover:text-green-700 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center my-2">
          <div className="h-px w-full max-w-4xl bg-gray-400"></div>
        </div>

        <div className="text-center text-sm py-2">
          © Copyright {currentYear}, All Rights Reserved by SustainDev
        </div>
      </div>
    </footer>
  );
};

export default Footer;