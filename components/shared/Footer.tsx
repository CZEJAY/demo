import {
  addressLinks,
  companyLinks,
  contactLink,
  footerSocialIcons,
  productLinks,
} from "@/lib/data";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white p-4 max-md:px-4 lg:px-14 xl:px-28">
      <div className="mb-8 lg:hidden">
        <Logo />
      </div>

      <div className="max-content grid md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
        <div className="max-lg:hidden space-y-20 flex flex-col">
          <div className="flex-1">
            <Logo />
          </div>

          <div className="grid grid-cols-3 gap-y-4">
            {footerSocialIcons.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover-effects hover:text-silverGray"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <FooterLink name="products" content={productLinks} />
        <FooterLink name="company" content={companyLinks} />
        <FooterLink name="Address" content={addressLinks} />
        <FooterLink name="Contact Us" content={contactLink} />
      </div>

      <div className="lg:hidden mb-5">
        <div className="flex space-x-4 justify-center">
          {footerSocialIcons.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="hover-effects hover:text-deepTeal"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center max-lg:text-base lg:font-light mb-5">
        <span>
          © 2024 Patexa or its affiliate. All rights reserved.{" "}
          <span className="underline cursor-pointer">Privacy Policy</span> |{" "}
          <span className="underline cursor-pointer">Terms of Service</span>
        </span>
      </div>
    </footer>
  );
}

interface LinkItem {
  label: string;
  href: string;
}

function FooterLink({ name, content }: { name: string; content: LinkItem[] }) {
  return (
    <div className="text-sm space-y-3">
      <span className="text-deepTeal uppercase lg:font-medium tracking-wide">
        {name}
      </span>
      <ul className="space-y-3">
        {content.map((item, idx) => (
          <li
            key={idx}
            className={`max-lg:text-base lg:font-light ${
              name !== "Address" && name !== "Contact Us"
                ? "hover:text-deepTeal hover-effects "
                : null
            }`}
          >
            {name !== "Address" && name !== "Contact Us" ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
