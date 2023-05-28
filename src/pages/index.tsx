import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../components/Navbar";

import desk from '../assets/desk.jpg'
import deskSetup from '../assets/desk_setup.png'

export default function LandingPage() {
  const { t, i18n } = useTranslation("common");

  const qualifications = [
    {
      company: 'Entomo Labs Berhad',
      position: 'Frontend Lead / Hybrid Mobile Developer',
      period: '12/2021 - Present',
      stacks: ['Ionic', 'Cordova', 'Angular', 'Flutter', 'FHIR']
    },
    {
      company: 'Rescompany Systems Ltd',
      position: 'Fullstack Developer',
      period: '07/2019 - 12/2021',
      stacks: ['Angular', '.NET', 'ReactJS']
    },
    {
      company: 'Aerodyne Group Sdn Bhd',
      position: 'Lead Web Developer',
      period: '01/2019 - 06/2019',
      stacks: ['VueJS', 'Three.js', 'Leaflet', 'OpenLayers', 'NodeJS']
    },
    {
      company: 'Freelance',
      position: 'Fullstack Developer',
      period: '08/2017 - 12/2021',
      stacks: ['Laravel', 'VueJS', 'NodeJS', 'NuxtJS', 'ReactJS']
    },
    {
      company: 'Appvalley Technology Sdn Bhd',
      position: 'Mobile App Developer/Application Engineer',
      period: '08/2016 - 12/2018',
      stacks: ['Ionic', 'Angular', 'VueJS']
    },
    {
      company: 'Software Developer (Intern)',
      position: 'Megasap Sdn Bhd',
      period: '03/2015 - 08/2015',
      stacks: ['Ruby On Rails', 'Ionic', 'Codeigniter', 'PHP', 'Java']
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
              <p className="sm:text-2xl xs:max-sm:text-lg mb-2 font-bold text-white">{ q.position }</p>
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
                          { t }
                      </div>
                  )
                })
              }
              </div>

              <button type="button" className="sm:mt-8 xs:max-sm:mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-base tracking-widest rounded-lg text-sm px-4 py-2 focus:outline-none ">See More</button>
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
