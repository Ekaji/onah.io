import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import Arch from "../components/arch";
// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  const { theme } = useTheme();
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={` relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="relative">
        <div className="fixed bottom-20 right-8 lg:bottom-8 lg:left-12 text-black lg:text-black">
          {/* <Arch /> */}
          <Arch />
        </div>
        <div className="container mx-auto mb-10 cursor-default min-h-screen flex flex-col">
          <Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
          />
          <div className="flex flex-col justify-center items-center flex-1">
            <div className="mx-auto mt-16 text-center font-PanchangExtrabold capitalize">
              <h1
                ref={textOne}
                className="text-4xl leading-[3.5rem] ml-0 laptop:mx-auto tablet:text-6xl laptop:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-10/12"
              >
                {data.headerTaglineOne} {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textTwo}
                style={{ lineHeight: "65 px" }}
                className="text-4xl leading-[3.5rem] laptop:mx-auto tablet:text-6xl laptop:text-6xl  p-1 tablet:p-2 text-bold w-full laptop:w -10/12"
              >
                {/* {data.headerTaglineTwo} */}
                <span
                  className={` border-4 leading-[3.5rem]  tablet:px-12 block tablet:inline-block py-3 mx-5 rounded-full italic m-auto ${
                    theme === "dark"
                      ? "border-green-500 text-green-500 bg-s late-600"
                      : "border-black text-black bg-slate-100"
                  }`}
                >
                  {data.name}
                </span>
                <span className="leading-[3.5rem]">
                  {data.headerTaglineTwoB}
                </span>
              </h1>
            </div>

            {/* <Socials className="mt-2 laptop:mt-5" /> */}
          </div>

          {/* Description Section */}
          <div className="mt-10 laptop:mt-20 p-2 laptop:p-0 laptop:w-10/12 mx-auto">
            <h1
              ref={textThree}
              className="text-xl leading-relaxed laptop:mx-auto tablet:text-2xl laptop:text-2xl p-1 tablet:p-2 text-normal w-full laptop:w-10/12 opacity-80 text-center"
            >
              {data.headerTaglineThree}
            </h1>
          </div>
          <div
            className="mt-10 laptop:mt-32 p-2 laptop:p-0 laptop:w-10/12 mx-auto"
            ref={workRef}
          >
            <h1 className="text-4xl capitalize font-bold font-PanchangExtrabold">
              Recent <span className="text-green-500">Work</span>
            </h1>

            <div
              className="mt-5 laptop:mt-10
          "
            >
              {/* grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptop:grid-row-2 gap-4 */}
              {data.projects.map((project) => (
                <WorkCard
                  id={project.id}
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 laptop:mt-32 p-2 laptop:p-0 laptop:w-10/12 mx-auto">
            <h1 className="tablet:mt-10 text-4xl capitalize font-bold font-PanchangExtrabold">
              <span className="text-green-500">Services</span> I Provide
            </h1>
            <div className="mt-5 tablet:mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* This button should not go into production */}
          {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-5 right-5">
              <Link href="/edit">
                <Button type="primary">Edit Data</Button>
              </Link>
            </div>
          )}
          <div
            className="mt-10 laptop:mt-40 p-2 laptop:p-0 laptop:w-10/12 mx-auto"
            ref={aboutRef}
          >
            <h1 className="tablet:mt- 10 text-4xl capitalize font-bold font-PanchangExtrabold">
              A little <br /> <span className="text-green-500">About</span> me.
            </h1>
            <p className="tablet:mt-10 mt-2 text-xl w-full laptop:w-3/5 opacity-50">
              {`Over the course of my career, I've worked on a wide range of projects—spanning SaaS products, internal tools, AI-powered applications, and business websites. I'm comfortable working independently or within a team, and I place a strong emphasis on clear communication, especially when translating technical concepts for non-technical stakeholders.`}
            </p>
            {/* <br className='my-5' /> */}
            <p className="tablet:mt-10 text-xl w-full laptop:w-3/5 opacity-50">
              {`What motivates me most is building software that actually gets used. Whether it's streamlining workflows, improving accessibility, or solving practical business problems, I believe technology should be purposeful, simple where possible, and effective where it matters. I'm particularly interested in early-stage products, MVPs, and tools that help individuals and businesses operate more efficiently.`}
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
