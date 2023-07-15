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
      <div className="container mx-auto mb-10 cursor-default">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-12 mt-0 flex flex-col justify-center py-20 tablet:py-0 min-h-[80vh]">
          <div className="mt-5 mx-auto text-center font-PanchangExtrabold capitalize"

          >
            <h1
              ref={textOne}
              className="text-4xl leading-[3.5rem] ml-0 laptop:mx-auto tablet:text-6xl laptop:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-10/12"
            >
              {data.headerTaglineOne} {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textTwo}
              style={{lineHeight: '65 px'}}
              className="text-4xl leading-[3.5rem] laptop:mx-auto tablet:text-6xl laptop:text-6xl  p-1 tablet:p-2 text-bold w-full laptop:w -10/12"
            >
              {/* {data.headerTaglineTwo} */}
              <span className={` border-4 leading-[3.5rem]  tablet:px-12 block tablet:inline-block py-3 mx-5 rounded-full italic m-auto ${
                  theme === "dark" ? "border-green-500 text-green-500 bg-s late-600" : "border-black text-black bg-slate-100"
                  }`}>{data.name}</span>
                <span className="leading-[3.5rem]">
                  {data.headerTaglineTwoB}
                </span>
            </h1>
            <h1
              ref={textThree}
              className="text-4xl leading-[3.5rem] laptop:mx-auto tablet:text-6xl laptop:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-10/12"
              style={{lineHeight: '6 5px'}}
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl laptop:mx-auto tablet:text-6xl laptop:text-6xl  p-1 tablet:p-2 text-bold w-full laptop:w-10/12"
            >
              {/* {data.headerTaglineFour} */}
            </h1>
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        </div>
        <div className="mt-10 laptop:mt-32 p-2 laptop:p-0 laptop:w-10/12 mx-auto" ref={workRef}>
          <h1 className="text-4xl capitalize font-bold font-PanchangExtrabold">Here are some of my <br /> Recent <span className='text-green-500'> Works.</span></h1>

          <div className="mt-5 laptop:mt-10
          ">
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
          <h1 className="tablet:mt-10 text-4xl capitalize font-bold font-PanchangExtrabold">Some of the <br /> <span className='text-green-500'>Services</span> I provide.</h1>
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
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 laptop:w-10/12 mx-auto" ref={aboutRef}>
          <h1 className="tablet:mt- 10 text-4xl capitalize font-bold font-PanchangExtrabold">A little <br /> <span className='text-green-500'>About</span> me.</h1>
          <p className="tablet:mt-10 mt-2 text-xl w-full laptop:w-3/5 opacity-50">
            {`
          Over the course of my career, I've worked on a wide range of projects, from large-scale enterprise applications to small, experimental prototypes. I'm comfortable working both independently and as part of a team, and I pride myself on my ability to communicate complex technical concepts to non-technical stakeholders in a clear and concise manner, At the end of the day, what motivates me most as a developer is the opportunity to make a positive impact on people's lives through technology. `}
          </p>
          {/* <br className='my-5' /> */}
          <p className="tablet:mt-10 text-xl w-full laptop:w-3/5 opacity-50">
          {`
          Whether it's streamlining business processes, improving accessibility and user experience, or solving real-world problems with innovative solutions, I believe that software has the power to change the world for the better. And I'm excited to be a part of that change.
            `}
          </p>
        </div>
        <Footer />
      </div>
      </div>
    </div>
  );
}
