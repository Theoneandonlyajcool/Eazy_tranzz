import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/Images/newLogo.png";
import footerlogo from "@/assets/Images/FooterLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111116] text-white py-16 px-6 md:px-12 lg:px-24 border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 bg-linear-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                <div className="w-7 h-7 border-2 border-white/80 rounded-sm transform rotate-45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>

              </div> */}

              <img src={logo} alt="EasyTranzz Logo" className="w-12 h-12" />

              <span className="text-2xl font-black tracking-tighter">
                Eazy Tranz
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              Making currency exchange simple, fast, and secure for the global
              gig economy.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-[#16161b] border border-gray-500 p-2 rounded-md transition-colors hover:bg-[#16161b]/20 group flex items-center justify-center"
                >
                  <Icon size={20} className="text-white hover:text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FooterColumn
              title="Features"
              links={[
                "Exchange Rates",
                "API Access",
                "Referral Program",
                "Mobile App",
              ]}
            />
            <FooterColumn
              title="Support"
              links={["Help Center", "Contact Us", "FAQs", "System Status"]}
            />
            <FooterColumn
              title="Company"
              links={["About Us", "Careers", "Blog"]}
            />
          </div>

          {/* Trust Badge */}
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-start pt-4 lg:pt-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={footerlogo}
                alt="100% Customer Satisfaction Guaranteed"
                className="relative w-40 md:w-48 transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p className="font-medium tracking-tight">
            © {currentYear ? currentYear : ""} Eazy Tranz Inc. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-primary transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-[#621c4b] transition-all flex items-center group"
          >
            <span className="w-0 group-hover:w-2 h-px bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
