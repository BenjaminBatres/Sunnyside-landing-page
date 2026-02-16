"use client";
import Image from "next/image";
import { useRef } from "react";
// components
import Navbar from "./components/Navbar";
import BottemSectionInfo from "./components/ui/BottemSectionInfo";
import SectionInfo from "./components/ui/SectionInfo";
import Footer from "./components/Footer";
// Images
import ArrowDown from "./assets/icon-arrow-down.svg";
import TransformImage from "./assets/desktop/image-transform.jpg";
import Standout from "./assets/desktop/image-stand-out.jpg";
import MobileStandout from "./assets/mobile/image-stand-out.jpg";
import GraphicDesign from "./assets/desktop/image-graphic-design.jpg";
import Photography from "./assets/desktop/image-photography.jpg";
import GraphicDesignMobile from "./assets/mobile/image-graphic-design.jpg";
import PhotographyMobile from "./assets/mobile/image-photography.jpg";
import Testimonials from "./components/ui/Testimonials";
import MilkBottle from "./assets/desktop/image-gallery-milkbottles.jpg";
import Orange from "./assets/desktop/image-gallery-orange.jpg";
import Cone from "./assets/desktop/image-gallery-cone.jpg";
import SugarCubes from "./assets/desktop/image-gallery-sugarcubes.jpg";
import MobileTransformImage from "./assets/mobile/image-transform.jpg";
import MobileMilkBottle from "./assets/mobile/image-gallery-milkbottles.jpg";
import MobileOrange from "./assets/mobile/image-gallery-orange.jpg";
import MobileCone from "./assets/mobile/image-gallery-cone.jpg";
import MobileSugarCubes from "./assets/mobile/image-gallery-sugar-cubes.jpg";
// testimonials
import EmilyImage from "./assets/image-emily.jpg";
import ThomasImage from "./assets/image-thomas.jpg";
import JennieImage from "./assets/image-jennie.jpg";

export default function Home() {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const bottomSectionInfo = [
    {
      title: "Graphic Design",
      backgroundImage: GraphicDesign.src,
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    {
      title: "Photography",
      backgroundImage: Photography.src,
      description:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];
  const bottomSectionInfoMobile = [
    {
      title: "Graphic Design",
      backgroundImage: GraphicDesignMobile.src,
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    {
      title: "Photography",
      backgroundImage: PhotographyMobile.src,
      description:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      role: "Market Director",
      testimonial:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      pfp: EmilyImage.src,
    },
    {
      name: "Thomas S.",
      role: "Chief Operating Officer",
      testimonial:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      pfp: ThomasImage.src,
    },
    {
      name: "Jennie F.",
      role: "Business Owner",
      testimonial:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      pfp: JennieImage.src,
    },
  ];

  const galleryImages = [
    {
      src: MilkBottle.src,
      alt: "Milk Bottles",
    },
    {
      src: Orange.src,
      alt: "Oranges",
    },
    {
      src: Cone.src,
      alt: "Cone",
    },
    {
      src: SugarCubes.src,
      alt: "Sugar Cubes",
    },
  ];

  const galleryImagesMobile = [
    {
      src: MobileMilkBottle.src,
      alt: "Milk Bottles",
    },
    {
      src: MobileOrange.src,
      alt: "Oranges",
    },
    {
      src: MobileCone.src,
      alt: "Cone",
    },
    {
      src: MobileSugarCubes.src,
      alt: "Sugar Cubes",
    },
  ];
  return (
    <>
      <header
        className={`h-screen bg-cover bg-center bg-[url('./assets/mobile/image-header.jpg')] tablet:bg-[url('./assets/desktop/image-header.jpg')] `}
      >
        <Navbar />
        <h1 className="text-white text-center mt-20 mb-30 text-5xl sm:text-6xl font-Fraunces font-black uppercase tracking-[8px]">
          We are creatives
        </h1>

        <div className="flex justify-center">
          <button
            className="cursor-pointer"
            onClick={scrollToContent}
            aria-label="Scroll down"
          >
            <Image
              src={ArrowDown}
              alt="Arrow Down"
              className="mx-auto animate-bounce"
            />
          </button>
        </div>
      </header>
      <main id="content" ref={contentRef}>
        <div className="grid tablet:grid-cols-2">
          {/* Mobile Image */}
          <div
            className="h-140 tablet:h-full tablet:hidden"
            style={{
              backgroundImage: `url(${MobileTransformImage.src})`,
              backgroundPosition: "center",
            }}
          ></div>
          <SectionInfo
            title={"Transform your"}
            titleEnd={"brand"}
            description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            hoverColor={"Yellow-500"}
            bgColor={"rgba(250, 212, 0, 0.4)"}
          />
          <div
            className="h-140 tablet:h-full hidden tablet:block"
            style={{
              backgroundImage: `url(${TransformImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-140 tablet:h-full hidden tablet:block"
            style={{
              backgroundImage: `url(${Standout.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-140 tablet:h-full tablet:hidden"
            style={{
              backgroundImage: `url(${MobileStandout.src})`,
              backgroundPosition: "center",
            }}
          ></div>
          <SectionInfo
            title={"Stand out to the right audience"}
            description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
            hoverColor={"Red-400"}
            bgColor={"rgba(254, 120, 103, 0.4)"}
          />
        </div>
        <div className="hidden tablet:grid grid-cols-2">
          {bottomSectionInfo.map((info, index) => (
            <BottemSectionInfo
              key={index}
              backgroundImage={info.backgroundImage}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
          {/* Mobile bottom section info */}
        <div className="tablet:hidden">
          {bottomSectionInfoMobile.map((info, index) => (
            <BottemSectionInfo
              key={index}
              backgroundImage={info.backgroundImage}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </main>
      <section className="py-15 sm:py-20 tablet:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="sm:text-3xl font-Fraunces uppercase tracking-[5px] font-black text-Grey-400 text-center mb-8">
            Client testimonials
          </h2>
          <div className="flex justify-center flex-wrap lg:grid lg:grid-cols-3 space-y-12 sm:space-x-3 xl:gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonials key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className=" sm:pt-20">
        <div className="hidden tablet:grid grid-cols-4">
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              width={1000}
              height={1000}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        {/* Mobile gallery images */}
        <div className="grid grid-cols-2 tablet:hidden">
          {galleryImagesMobile.map((image, index) => (
            <Image
              key={index}
              width={1000}
              height={1000}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
