import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

// Arrow-function React component
// Usage: <Footer />
// TailwindCSS must be available in your app.

const LinkItem = ({ href = '#', children }) => (
  <li>
    <a href={href} className="hover:text-white transition text-sm">
      {children}
    </a>
  </li>
);

const IconButton = ({ href = '#', label, children }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition inline-flex"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="max-w-[1230px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Smart<span className="text-sky-400">Deals</span>
            </h2>
            <p className="mt-3 text-sm leading-6">
              Your trusted marketplace for authentic local products. Discover the best deals from
              across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="quicklinks-title">
            <h3 id="quicklinks-title" className="text-white font-semibold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <LinkItem href="#">All Products</LinkItem>
              <LinkItem href="#">Dashboard</LinkItem>
              <LinkItem href="#">Login</LinkItem>
              <LinkItem href="#">Register</LinkItem>
            </ul>
          </nav>

          {/* Categories */}
          <nav aria-labelledby="categories-title">
            <h3 id="categories-title" className="text-white font-semibold">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              <LinkItem href="#">Electronics</LinkItem>
              <LinkItem href="#">Fashion</LinkItem>
              <LinkItem href="#">Home &amp; Living</LinkItem>
              <LinkItem href="#">Groceries</LinkItem>
            </ul>
          </nav>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold">Contact &amp; Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MdEmail className="w-5 h-5 mt-0.5" />
                <a className="hover:text-white transition" href="mailto:support@smartdeals.com">
                  support@smartdeals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5" />
                <a className="hover:text-white transition" href="tel:+880123456789">
                  +880 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5" />
                <address className="not-italic">123 Commerce Street, Dhaka, Bangladesh</address>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-white font-semibold">Social Links</p>
            <div className="mt-3 flex items-center gap-4">
              <IconButton href="#" label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </IconButton>
              <IconButton href="#" label="X">
                <FaXTwitter className="w-5 h-5" />
              </IconButton>
              <IconButton href="#" label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Copyright Row */}
        <div className="flex flex-col md:flex-row items-center justify-center text-xs text-slate-400">
          <p className="text-center">© 2025 SmartDeals. All rights reserved.</p>
          {/* <p className="mt-2 md:mt-0">Made with ❤ in Bangladesh.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
