import {
  companyLinks,
  compareLinks,
  footerSocialIcons,
  pricingLinks,
  productLinks,
  resourcesLinks,
} from "@/lib/data";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white py-10 p-4 max-md:px-4 lg:px-14 xl:px-28 lg:py-20">
      <div className="mb-8 lg:hidden flex justify-between items-center">
        <Logo />

        <div className="flex space-x-4">
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

      <div className="max-content grid md:grid-cols-5 lg:grid-cols-6 gap-10">
        <div className="max-lg:hidden flex flex-col">
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
        <FooterLink name="plans and pricing" content={pricingLinks} />
        <FooterLink name="company" content={companyLinks} />
        <FooterLink name="resources" content={resourcesLinks} />
        <FooterLink name="compare" content={compareLinks} />
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
            className="hover:text-deepTeal hover-effects max-lg:text-base lg:font-light"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
