// import React from "react";
import React from "react";
import websiteEvent from "../../assets/image/website-event.png";
import websiteGamis from "../../assets/image/website-gamis.png";
import websiteStoik from "../../assets/image/website-stoik.png";
import websiteDesa from "../../assets/image/website-desa.png";
import websiteClimateaware from "../../assets/image/website-climateaware.png";

const Home = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full lg:h-screen bg-slate-900 text-white">
            <div className="flex flex-col w-full h-full justify-between lg:px-28 md:px-10 sm:px-5 px-5 lg:py-20 md:py-16 sm:py-5 py-5">
                <div className="flex flex-col gap-3 px-4">
                    <div className="font-bold text-4xl">Singgih Budi Hartono</div>
                    <div className="font-semibold text-xl">Junior Website Developer</div>
                    <div className="text-gray-400 my-10 text-justify">
                        Software Engineering graduated from Purwokerto Telkom Institute of Technology, specializing in Web Development. Enthusiastic about Linux, I spend my spare time building websites and designing posters. Eager to take
                        on new challenges, I have a strong foundation in computer science and a commitment to continuous learning. Driven to make a positive impact in the tech industry through the application of my skills.
                    </div>
                </div>
                {/* <div className="grid grid-rows-3 px-4">
                    <div>
                        <a href="#about" className="">
                            About
                        </a>
                    </div>
                    <div>
                        {" "}
                        <a href="#experience">Experience</a>
                    </div>
                    <div>
                        {" "}
                        <a href="#about"></a>
                    </div>
                </div> */}
                <div className="flex gap-4 px-4">
                    <a href="https://github.com/Mr-buddyy" className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/singgih-budi-hartono-675413222/" className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/sbudi_h/" className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-justify flex flex-col w-full h-full justify-between lg:pr-24 md:px-10 sm:px-5 px-5 lg:py-20 md:py-16 sm:py-5 py-5 gap-20 overflow-scroll no-scrollbar">
                {/* <div id="about" className="grid grid-rows-1 px-4">
                    <div className="text-gray-400">
                        Software Engineering graduated from Purwokerto Telkom Institute of Technology, specializing in Web Development. Enthusiastic about Linux, I spend my spare time building websites and designing posters. Eager to take
                        on new challenges, I have a strong foundation in computer science and a commitment to continuous learning. Driven to make a positive impact in the tech industry through the application of my skills.
                    </div>
                </div> */}
                <div id="experience">
                    <ul className="gap-10 flex flex-col">
                        <li className="text-2xl font-bold">Project Website Development</li>
                        <li className="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                            <img src={websiteEvent} className="sm:col-span-2 lg:col-span-3 bg-contain" />
                            <div className="flex flex-col gap-2 col-span-5">
                                <div className="font-bold group-hover:text-cyan-400">Website Event, August 2023 - January 2024</div>
                                <div className="text-gray-400">Building a website for connecting college students with sponsorships as the final assignment project, incorporating MySQL, Laravel, Tailwind CSS, and Javascript</div>
                                <div className="group-hover:text-cyan-400">Laravel, JavaScript, Fullstack, Monolith, Tailwind CSS, MySQL</div>
                            </div>
                        </li>

                        <li className="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                            <img src={websiteStoik} className="sm:col-span-2 lg:col-span-3 bg-contain" />
                            <div className="flex flex-col gap-2 col-span-5">
                                <div className="font-bold group-hover:text-cyan-400">Website Stoik, December 2023 - January 2024</div>
                                <div className="text-gray-400">
                                    As a front-end developer, I specialize in crafting visually appealing website interfaces using the Next.js and Tailwind CSS frameworks. I seamlessly integrate backend APIs, incorporating essential
                                    functionalities like search and sorting to enhance user experience.
                                </div>
                                <div className="group-hover:text-cyan-400">Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL</div>
                            </div>
                        </li>
                        <li className="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                            <img src={websiteGamis} className="sm:col-span-2 lg:col-span-3 bg-contain" />
                            <div className="flex flex-col gap-2 col-span-5">
                                <div className="font-bold group-hover:text-cyan-400">Website Gamis, November 2023- December 2023</div>
                                <div className="text-gray-400">
                                    As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context
                                    of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo
                                </div>
                                <div className="group-hover:text-cyan-400">Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL</div>
                            </div>
                        </li>
                        <li className="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                            <img src={websiteDesa} className="sm:col-span-2 lg:col-span-3 bg-contain" />
                            <div className="flex flex-col gap-2 col-span-5">
                                <div className="font-bold group-hover:text-cyan-400">Website Desa, May 2022 - July 2022</div>
                                <div className="text-gray-400">Developing a website for Central Sokaraja village as a project for the web design and programming midterm test, utilizing MySQL, PHP, HTML, CSS, and Tailwind</div>
                                <div className="group-hover:text-cyan-400">PHP, JavaScript, CSS, Fullstack, MySQL</div>
                            </div>
                        </li>
                        <li className="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                            <img src={websiteClimateaware} className="sm:col-span-2 lg:col-span-3 bg-contain" />
                            <div className="flex flex-col gap-2 col-span-5">
                                <div className="font-bold group-hover:text-cyan-400">Website Climate Aware, December 2023 - January 2024</div>
                                <div className="text-gray-400">
                                    As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context
                                    of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo
                                </div>
                                <div className="group-hover:text-cyan-400">Laravel, NextJs, JavaScript, Fullstack, MySQL</div>
                            </div>
                        </li>
                        <li>Coded in Visual Studio Code. Built with React.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;
