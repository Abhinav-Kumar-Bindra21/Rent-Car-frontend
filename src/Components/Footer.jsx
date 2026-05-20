import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-start justify-between gap-8 pb-6 border-borderColor py-10 border-b border-gray-500/30 text-gray-500"
      >
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-8 md:h-9"
            src={assets.logo}
            alt="dummyLogoColored"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-4-80 mt-3 w-64"
          >
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mt-6"
          >
            <a href="#">
              <img src={assets.facebook_logo} alt="facebook" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.instagram_logo} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.twitter_logo} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.gmail_logo} alt="Gmail" className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-between w-1/2 gap-8"
        >
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Quick Links</h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Browse Cars </a>
              </li>
              <li>
                <a href="#">List Your Car</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Resources</h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service </a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              <li>
                <a href="#">Street :- 1234 Luxury Drive</a>
              </li>
              <li>
                <a href="#"> Country :- San Francisco , CA 94107 </a>
              </li>
              <li>
                <a href="#">Phone no :- +1 234567890</a>
              </li>
              <li>
                <a href="#">Email id :- info@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-2 items-center justify-between py-5"
      >
        <p>© {new Date().getFullYear()} All Right Reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>

          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Sitemap </a>
          </li>
          <li>|</li>
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
