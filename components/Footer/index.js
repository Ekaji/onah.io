import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 laptop:w-10/12 mx-auto text-3xl font-medium capitalize font-PanchangBold">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className=" text-bold">
              If you're building a product, refining an idea, or need a reliable
              developer to execute clearly and efficiently, I'm open to
              collaboration.
            </h1>
            <h1 className=" font-bold text-green-500">Let's Collaborate</h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 flex flex-row justify-center">
        Made With ❤ by &nbsp;
        <Link href="mailto:ekajionah@gmail.com">
          <a className="underline underline-offset-1"> Ekaji Onah</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
