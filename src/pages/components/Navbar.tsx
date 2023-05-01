import React, { useState } from "react";
import { GetStaticProps } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Navbar = () => {
	const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-screen flex items-center justify-between flex-wrap p-4 lg:px-48">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="w-100 h-10 mr-2"
            alt="Logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block ml-auto lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            ["menu.home", "/"],
            ["menu.about", "/"],
            ["menu.services", "/"],
            ["menu.projects", "/"],
            ["menu.blog", "/"],
          ].map(([title, url]) => (
            <a
							key={title}
              href={url}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:text-yellow-400"
            >
              {t(title)}
            </a>
          ))}
          {/* <div>
						<button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
							Click Me
						</button>
					</div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
