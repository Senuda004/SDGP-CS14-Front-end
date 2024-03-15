import React, { useState } from 'react';

const HeroComponent = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-gray-50">
            <header className="relative z-10 py-4 md:py-6" x-data="{expanded: false}">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" />
                            </a>
                        </div>

                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-900" onClick={() => { setExpanded(!expanded) }} aria-expanded={expanded}>
                                <span style={{ display: !expanded ? 'block' : 'none' }} aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>

                                <span style={{ display: expanded ? 'block' : 'none' }} aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
                            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>
                        </div>

                        <div className="hidden md:flex">
                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Try for free
                            </a>
                        </div>
                    </div>

                    <nav style={{ display: expanded ? 'block' : 'none' }}>
                        <div className="px-1 py-8">
                            <div className="grid gap-y-7">
                                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>

                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Try for free
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="relative py-12 sm:py-16 lg:pb-40">
                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">An editor that helps you write clean codes.</h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                            <a href="#" title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                Try our free editor
                            </a>

                            <div className="mt-8 sm:mt-16">
                                <div className="flex items-center justify-center lg:justify-start">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    ))}
                                </div>

                                <blockquote className="mt-6">
                                    <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
                                    <p className="mt-3 text-base leading-7 text-gray-600 font-inter">Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.</p>
                                </blockquote>

                                <div className="flex items-center justify-center mt-3 lg:justify-start">
                                    <img className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png" alt="" />
                                    <p className="ml-2 text-base font-bold text-gray-900 font-pj">Denny Jones</p>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-1">
                            <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Make every step user-centric</h2>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                        {/* Support */}
                        <div className="md:p-8 lg:p-14">
                            <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Support</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Sales */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                            <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Sales</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Onboarding */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                            <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                                fill="#D4D4D8"
                                />
                                <path d="M9 9H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 17H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 25H13V31H29V25H41" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Onboarding</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Product */}
                        <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                            <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG paths */}
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Product</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Quality */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                            <svg className="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG paths */}
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Quality</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Result */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                            <svg className="mx-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG paths */}
                            </svg>
                            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Result</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our Investors & Board of Directors</h2>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
            </div>

            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
            </div>

            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
            </div>

            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
            </div>
        </div>

        <div className="mt-12 sm:mt-16">
            <svg className="w-auto h-4 mx-auto text-gray-300" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
            </svg>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
            <div>
                <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg" alt="" />
            </div>

            <div>
                <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg" alt="" />
            </div>

            <div>
                <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg" alt="" />
            </div>
        </div>
    </div>
</section>

<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing &amp; Plans</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <div className="hidden mt-16 lg:block">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-8 pr-4"></th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Free </span>
                            <p className="mt-6 text-6xl font-bold">$0</p>
                            <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Team </span>
                            <p className="mt-6 text-6xl font-bold">$99</p>
                            <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                            <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Popular </span>
                            <p className="mt-6 text-6xl font-bold text-white">$150</p>
                            <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Enterprise </span>
                            <p className="mt-6 text-6xl font-bold">$490</p>
                            <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Website number</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">01</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">10</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">50</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Server storage</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">100 GB</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">500 GB</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">1 TB</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Database</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">15</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">Unlimited</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Unmetered Bandwidth</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">SSD Disk</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">VCPUS Fontworld</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">WordPress install</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Server speed</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-6 pr-4"></td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-white">
                                Get Started
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Free </span>
                <p className="mt-2 text-xl font-bold">$0</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Team </span>
                <p className="mt-2 text-xl font-bold">$99</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Popular </span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Enterprise </span>
                <p className="mt-2 text-xl font-bold">$490</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Website number</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">01</div>

            <div className="px-2 py-2">10</div>

            <div className="px-2 py-2">100</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Server storage</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">100 GB</div>

            <div className="px-2 py-2">500 GB</div>

            <div className="px-2 py-2">1 TB</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Database</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">15</div>

            <div className="px-2 py-2">Unlimited</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Unmetered bandwidth</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">SSD Disk</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">VCPUS Fontworld</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">WordPress install</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Free </span>
                <p className="mt-2 text-xl font-bold">$0</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Team </span>
                <p className="mt-2 text-xl font-bold">$99</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Popular </span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 pt-2 pb-4 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Enterprise </span>
                <p className="mt-2 text-xl font-bold">$490</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>
        </div>
    </div>
</section>         

<section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

                <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul className="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" className="mt-6">
                    <div>
                        <label for="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                </form>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </div>
</section>
        </div>
    )
}

export default HeroComponent;
