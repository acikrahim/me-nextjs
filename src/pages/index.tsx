import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import InfoModal from "@/components/modals/InfoModal";
import Navbar from "../components/Navbar";

import desk from '../assets/desk.jpg'
import deskSetup from '../assets/desk_setup.png'
import { useState } from "react";

export default function LandingPage() {
  const { t, i18n } = useTranslation("common");
  const [modalShow, setModalShow] = useState(false);
  const [whatIDo, setWhatIDo] = useState([] as string[]);

  const qualifications = [
    {
      company: 'Entomo Labs Berhad',
      position: 'Frontend Lead / Hybrid Mobile Developer',
      period: '12/2021 - Present',
      stacks: ['Ionic', 'Cordova', 'Angular', 'Flutter', 'FHIR'],
      whatIDo: [
        'Maintained and deliver new functionality for Malaysia\'s MySejahtera application with Ionic Framework.',
        'Created foundation code base for the front end using latest Angular 14.',
        'Created Angular-based package for common functionalities, component and type declaration.',
        'Build multiple web applications according to HL7 standard guidance for Ministry of Health of Malaysia.',
        'Working towards building code base using FLUTTER for future mobile application approach.'
      ]
    },
    {
      company: 'Rescompany Systems Ltd',
      position: 'Fullstack Developer',
      period: '07/2019 - 12/2021',
      stacks: ['Angular', '.NET', 'ReactJS'],
      whatIDo: [
        'Deliver high-quality work for tens of web projects, going through from .NET, ReactJS and Angular framework.',
        'Worked with colleagues coming from different location in the world.',
        'Migrate and divide from one big .NET based application into web-based system using ReactJS with new design and requirements.',
        'Conducted code reviews and provided guidance to junior colleague.'
      ]
    },
    {
      company: 'Aerodyne Group Sdn Bhd',
      position: 'Lead Web Developer',
      period: '01/2019 - 06/2019',
      stacks: ['VueJS', 'Three.js', 'Leaflet', 'OpenLayers', 'NodeJS'],
      whatIDo: [
        'Led a team to develop multiple of Proof of Concepts involving showcasing 3D model using Three.js in a web-based application.',
        'Maintained one of the company\'s core project, Vertikaliti Wind, emphasizing heavily on usage of map and canvas\'s drawing using Leaflet and OpenLayers.',
        'Involved in delivering 3 concurrent projects in a very fast-paced environment requiring maximum communication with the clients'
      ]
    },
    {
      company: 'Freelance',
      position: 'Fullstack Developer',
      period: '08/2017 - 12/2021',
      stacks: ['Laravel', 'VueJS', 'NodeJS', 'NuxtJS', 'ReactJS'],
      whatIDo: [
        'Co-founded a company focusing on constructing up-to-date process to replace client\'s paper-based system.',
        'Give out meaningful idea to resolve client\'s dependent on paper-based system.',
        'Adapt to a fast-paced stack such as MEAN stack, VueJS/ReactJS with Strapi (Headless CMS), Laravel Framework, and NodeJS.',
        'Contribute towards an e-commerce website of Selcare as part-time developer.'
      ]
    },
    {
      company: 'Appvalley Technology Sdn Bhd',
      position: 'Mobile App Developer/Application Engineer',
      period: '08/2016 - 12/2018',
      stacks: ['Ionic', 'Angular', 'VueJS'],
      whatIDo: [
        'Part of the development & support team for MPOS and GreatAdvice, Great Eastern Singapore new insurance app.',
        'In charge of developing and releasing Great Eastern insurance plan in multiple cycle based on SDLC approach, adding new features, functions and documents according to stakeholder\'s requirements.',
        'Traveled to Singapore on a monthly basis to work directly with the stakeholders.',
        'Involved in migrating Proof of Concept along with revamping the company\'s current back office system from AngularJS to VueJS.',
        'Help newcomers adapt with current development pace, manage tasks while giving useful feedback through code review session.'
      ]
    },
    {
      company: 'Software Developer (Intern)',
      position: 'Megasap Sdn Bhd',
      period: '03/2015 - 08/2015',
      stacks: ['Ruby On Rails', 'Ionic', 'Codeigniter', 'PHP', 'Java'],
      whatIDo: [
        'Developed 2 web applications using Ruby on Rails focusing on its back end.',
        'Developed a hybrid mobile application for Suruhanjaya Tenaga with Ionic Framework and cater it to client\'s needs.',
        'Developed APIs using PHP framework, CodeIgniter.'
      ]
    },
  ]
  const Home = (
    <header
      className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${desk.src})`,
      }}
    >
      <div className="p-4 m-2 text-white bg-transparent rounded-xl">
        <p className="text-3xl text-center">{t("firstSection.firstLine")}</p>
      </div>
      <div className="p-6 m-2 text-white bg-purple-600 bg-opacity-50 rounded-xl">
        <p className="text-5xl text-center">
          {t("firstSection.secondLine")} <strong>abdul rahim</strong>
        </p>
      </div>
    </header>
  );

  const AboutMe = (
    <div className="max-w-lg mx-auto my-24">
      <p className="text-6xl text-black text-center">About Me</p>
      <p className="mx-2 my-10 text-xl text-black tracking-widest leading-8 text-justify">
        An enthusiastic team player and deep creative thinker with 7 years
        experience juggling with requirements and codes. Motivated to keep up
        with the latest technology and ambitious to keep on learning from the
        best. Focused on delivering high-quality and standardize solutions while
        constantly taking it up to a notch. Strategic thinker and innovative
        creator to develop technologies and solving organizational's problem in
        the field.
      </p>
    </div>
  );

  const Qualifications = (
    <section
      className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          `url(${deskSetup.src})`,
      }}
    >
      <div className="grid grid-cols-2 gap-4 sm:max-lg:grid-cols-1">
        {
          qualifications.map((q, index: number) => (
            <div key={'qualification' + index} className="sm:col-span-1 sm:h-64 sm:p-6 xs:max-sm:col-span-2 xs:max-sm:p-4 xs:max-sm:h-52 mx-8 border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 whitespace-nowrap">
              <p className="sm:text-2xl xs:max-sm:text-lg mb-2 font-bold text-white">{q.position}</p>
              <div className="flex justify-between">
                <p className="sm:text-lg xs:max-sm:text-base font-bold text-white mb-2">{q.company}</p>
                <p className="text-base italic mb-2">{q.period}</p>
              </div>
              <div className="mt-4 flex justify-stretch flex-wrap">
                {
                  q.stacks.map((t, index: number) => {
                    return (

                      <div
                        key={'badgeTech' + index}
                        className="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        {t}
                      </div>
                    )
                  })
                }
              </div>

              <button
                type="button"
                className="sm:mt-8 xs:max-sm:mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-base tracking-widest rounded-lg text-sm px-4 py-2 focus:outline-none"
                onClick={() => {
                  setWhatIDo(q.whatIDo);
                  setModalShow(!modalShow)
                }}
              >See More</button>
            </div>
          ))
        }
      </div>
    </section>
  );

  const Services = (
    <div className="max-w-lg m-auto">
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
        a magna non varius. Proin leo felis, euismod non porta eget, varius sit
        amet sapien. Maecenas in nulla at leo convallis consectetur id a sapien.
        Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat
        libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est. Nulla eu
        sem elit. Fusce nec laoreet sem, semper molestie libero.
      </p>
      <p className="mb-4">
        Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus
        et fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna
        massa non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat
        metus. Nunc sed elit ac tellus tempor cursus. Suspendisse potenti.
        Vestibulum varius rutrum nisl nec consequat. Suspendisse semper
        dignissim sem viverra semper. Nulla porttitor, purus nec accumsan
        pharetra, nisi dolor condimentum ipsum, id consequat nulla nunc in
        ligula.
      </p>
    </div>
  );

  return (
    <>
      <InfoModal show={modalShow} title={'What I Do'} handleClose={() => {setModalShow(!modalShow)}}>
        <div className="p-6 space-y-6">
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {
              whatIDo.map((w, index: number) => {
                return (
                  <li className="flex items-center" key={'whatIDo' + index}>
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {w}
                  </li>
                )
              })

            }
          </ul>

        </div>
      </InfoModal>
      <Head>
        <title>NextJS/ReactJS Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar key={"navbar"}></Navbar>

      {Home}

      {AboutMe}

      {Qualifications}

      {/* {Services} */}
    </>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
