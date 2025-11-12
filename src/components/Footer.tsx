import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Coabyte <span className="text-primary">Technologies</span></h3>
            <p className="text-gray-300">
              Building the future with innovative software solutions — Proudly based in Ghana
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">API Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Visit our Facebook profile">
                <Facebook className="h-6 w-6" />
              </a>

              <a href="https://x.com/coabyte1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Visit our X (Twitter) profile">
                <Twitter className="h-6 w-6" />
              </a>

              <a href="https://www.linkedin.com/company/mhistack/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Visit our LinkedIn profile">
                <Linkedin className="h-6 w-6" />
              </a>

              <a href="https://github.com/mash20-dot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Visit our GitHub profile">
                <Github className="h-6 w-6" />
              </a>

              {/* Instagram - inline stroke-style icon to match lucide icons */}
              <a href="https://www.instagram.com/coabyte" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Visit our Instagram profile">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.75" />
                </svg>
              </a>

              {/* TikTok - single-color SVG using currentColor so it remains visible on dark backgrounds */}
              <a href="https://www.tiktok.com/@coabyte1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors p-1" aria-label="Visit our TikTok profile">
                <svg className="h-8 w-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                  <path d="M20.8 5.1c-.4 0-.8 0-1.2-.1v4.9c-.7-.2-1.5-.2-2.2 0-2.2.5-3.7 2.6-3.7 4.9 0 2.8 2.3 5.1 5.1 5.1 2.6 0 4.8-1.9 5.1-4.4v-7.5c.9.5 2 1 3 1.2V6.1c-1-.2-1.9-.4-2.6-.9-.5-.3-1-.6-1.5-.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Coabyte Technologies (Ghana). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
