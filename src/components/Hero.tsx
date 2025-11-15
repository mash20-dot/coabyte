import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "233552148347";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20there%20from%20Coabyte%20Technologies`;
  const emailAddress = "sakyimustapha5@gmail.com";
  const emailUrl = `mailto:${emailAddress}`;

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i.imgur.com/NrfIvYA.jpg"
          alt="Modern software development workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/75 sm:bg-gradient-to-br sm:from-black/85 sm:via-black/75 md:from-black/80 md:via-black/70 md:to-black/60"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-20 relative z-10 w-full">
        <div className="flex items-center min-h-[calc(100svh-6rem)] sm:min-h-[calc(100svh-8rem)] md:min-h-0">
          <div className="space-y-6 sm:space-y-7 md:space-y-8 max-w-4xl w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] sm:leading-tight">
              Best Web and Mobile App Development
              <span className="block sm:inline text-primary"> Company in Ghana</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 sm:text-gray-200 leading-relaxed max-w-2xl">
              Ghana's leading software, web, and mobile app development company driving innovation and business growth worldwide.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 sm:h-14 md:h-16 px-3 sm:px-3 md:px-4 text-base sm:text-lg md:text-xl font-semibold group bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="mr-2 h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M12 0C5.383 0 0 5.383 0 12c0 2.135.528 4.16 1.547 5.954L0 24l6.261-1.904C9.831 23.427 10.893 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0zm0 21.6c-.987 0-1.947-.226-2.866-.67l-.205-.11-2.129.648.67-2.12-.11-.204C1.92 16.825 1.6 14.463 1.6 12 1.6 6.478 6.478 1.6 12 1.6s10.4 4.878 10.4 10.4-4.878 10.4-10.4 10.4zm5.721-7.77c-.313-.156-1.855-.915-2.14-1.02-.285-.107-.493-.156-.702.157-.208.313-.808 1.02-.99 1.233-.182.213-.364.237-.677.08-.313-.157-1.32-.486-2.514-1.552-.93-.851-1.56-1.902-1.742-2.215-.182-.313-.02-.482.137-.637.14-.14.313-.365.47-.546.156-.18.208-.314.313-.523.105-.21.053-.39-.026-.546-.078-.157-.703-1.694-.964-2.32-.253-.601-.51-.52-.703-.53-.182-.008-.39-.01-.598-.01-.208 0-.546.078-.83.39-.285.313-1.088 1.063-1.088 2.59 0 1.526 1.115 3.005 1.27 3.217.156.212 2.198 3.356 5.322 4.701.744.32 1.325.512 1.777.656.748.244 1.428.21 1.966.127.6-.09 1.842-.752 2.1-1.478.257-.725.257-1.347.182-1.478-.074-.13-.285-.208-.598-.366z" />
                  </svg>
                  <span className="whitespace-nowrap">WhatsApp</span>
                </Button>
              </a>
              <a href={emailUrl}>
                <Button
                  size="lg"
                  className="h-14 sm:h-14 md:h-16 px-3 sm:px-3 md:px-4 text-base sm:text-lg md:text-xl font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  <span className="whitespace-nowrap">Email</span>
                </Button>
              </a>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 sm:text-gray-300 pt-2">
              Ready to bring your vision to life in Ghana? Let's create something amazing together.
            </p>

            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 max-w-lg">
              <div className="text-left">
                <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-primary">123+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-200 sm:text-gray-300 mt-1 sm:mt-1.5 leading-tight">Projects Delivered</div>
              </div>
              <div className="text-left">
                <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-200 sm:text-gray-300 mt-1 sm:mt-1.5 leading-tight">Client Satisfaction</div>
              </div>
              <div className="text-left">
                <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-primary">5+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-200 sm:text-gray-300 mt-1 sm:mt-1.5 leading-tight">Tech Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;