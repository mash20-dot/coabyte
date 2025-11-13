import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappNumber = "233552148347";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20there%20from%20Coabyte%20Technologies`;
  const emailAddress = "sakyimustapha5@gmail.com";
  const emailUrl = `mailto:${emailAddress}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern software development workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/70 md:to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Custom Software for Businesses
              <span className="text-primary"> Ghana-Based Agency</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              We craft cutting-edge software solutions in Ghana that drive innovation and accelerate your business growth. From concept to deployment, we're your trusted technology partner for businesses across Ghana and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold group bg-[#25D366] hover:bg-[#20ba5a] text-white"
                >
                  <svg className="mr-2 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M12 0C5.383 0 0 5.383 0 12c0 2.135.528 4.16 1.547 5.954L0 24l6.261-1.904C9.831 23.427 10.893 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0zm0 21.6c-.987 0-1.947-.226-2.866-.67l-.205-.11-2.129.648.67-2.12-.11-.204C1.92 16.825 1.6 14.463 1.6 12 1.6 6.478 6.478 1.6 12 1.6s10.4 4.878 10.4 10.4-4.878 10.4-10.4 10.4zm5.721-7.77c-.313-.156-1.855-.915-2.14-1.02-.285-.107-.493-.156-.702.157-.208.313-.808 1.02-.99 1.233-.182.213-.364.237-.677.08-.313-.157-1.32-.486-2.514-1.552-.93-.851-1.56-1.902-1.742-2.215-.182-.313-.02-.482.137-.637.14-.14.313-.365.47-.546.156-.18.208-.314.313-.523.105-.21.053-.39-.026-.546-.078-.157-.703-1.694-.964-2.32-.253-.601-.51-.52-.703-.53-.182-.008-.39-.01-.598-.01-.208 0-.546.078-.83.39-.285.313-1.088 1.063-1.088 2.59 0 1.526 1.115 3.005 1.27 3.217.156.212 2.198 3.356 5.322 4.701.744.32 1.325.512 1.777.656.748.244 1.428.21 1.966.127.6-.09 1.842-.752 2.1-1.478.257-.725.257-1.347.182-1.478-.074-.13-.285-.208-.598-.366z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
              <a href={emailUrl} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold group"
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Email Us
                </Button>
              </a>
            </div>

            <p className="text-base sm:text-lg text-gray-300">
              Ready to bring your vision to life in Ghana? Let's create something amazing together.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-2 sm:pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">123+</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">Tech Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;