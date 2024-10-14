"use client";

import {
  addressLinks,
  companyLinks,
  contactLink,
  footerSocialIcons,
  productLinks,
} from "@/lib/data";
import Link from "next/link";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LanguageDropdown from "./LanguageDropdown";

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16"
    >
      <div className="mb-8 lg:hidden text-center">
        <Logo />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-lg:hidden space-y-10 flex flex-col"
        >
          <div className="flex-1">
            <Logo />
          </div>

          <div className="flex space-x-4">
            {footerSocialIcons.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-primary">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-2xl transition duration-300"
                >
                  {item.icon}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        <FooterLink name="products" content={productLinks} inView={inView} />
        <FooterLink name="company" content={companyLinks} inView={inView} />
        <FooterLink name="Address" content={addressLinks} inView={inView} />
        <FooterLink name="Contact Us" content={contactLink} inView={inView} />
        <div className="w-40 -ml-3">
          <LanguageDropdown className="" isTop={true} />
        </div>
      </div>

      <div className="lg:hidden mb-5">
        <div className="flex space-x-4 justify-center">
          {footerSocialIcons.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:text-primary">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-md transition duration-300"
              >
                {item.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center text-sm font-light">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          © 2024 Patexa or its affiliate. All rights reserved.{" "}
          <Link href="#" className="underline text-primary">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" className="underline text-primary">
            Terms of Service
          </Link>
        </motion.span>
      </div>
    </footer>
  );
}

interface LinkItem {
  label: string;
  href: string;
}

function FooterLink({
  name,
  content,
  inView,
}: {
  name: string;
  content: LinkItem[];
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="text-sm space-y-4"
    >
      <span className="gradient-text text-xl uppercase font-medium tracking-wide">
        {name}
      </span>
      <ul className="space-y-2">
        {content.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-primary transition-colors duration-300"
          >
            {name !== "Address" && name !== "Contact Us" ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
