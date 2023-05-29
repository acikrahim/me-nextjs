import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GetStaticProps } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
	show: boolean;
	title: string;
	children?: React.ReactNode;
};

const InfoModal = ({ show, title, children }: Props) => {
	let appRoot: HTMLElement;
	useEffect(() => {
		console.log(document.getElementById('__next') as HTMLElement)
		appRoot = document.getElementById('__next') as HTMLElement;
	}, []);

	// return ReactDOM.createPortal(
	return (
		<>
			{
				show ?
					<div className="flex justify-center w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-slate-500/60 z-20">
						<div className="z-40 mt-[10%] min-w-[480px] xs::max-xs:min-w-[360px] max-w-md xs::max-xs:max-w-[360px]">
							<div className="rounded-lg bg-slate-900">
								<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										{title}
									</h3>
									<button type="button" className="text-gray-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-hide="defaultModal">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
										<span className="sr-only">Close modal</span>
									</button>
								</div>
								{children}
								{/* <div className="p-6 space-y-6">
								<p className="text-base leading-relaxed text-gray-400">
									With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
								</p>
								<p className="text-base leading-relaxed text-gray-400">
									The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
								</p>
							</div> */}

								<div className="flex justify-end items-center p-4 space-x-2 border-t border-gray-600 rounded-b ">
									<button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
								</div>
							</div>
						</div>
					</div>
					: null
			}
		</>
	)
}

export default InfoModal;

// export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
// 	props: {
// 		...(await serverSideTranslations(locale ?? "en", ["common"])),
// 	},
// });
