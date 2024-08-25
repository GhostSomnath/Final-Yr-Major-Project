import { useTheme } from '../context/themeContext';

export default function Profile() {
    const { theme } = useTheme();

    return (
        <div className={`relative py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <section className="w-full overflow-hidden ">
                <div className="flex flex-col">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="User Cover"
                        className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
                    />
                    <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                        <img
                            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="User Profile"
                            className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                        />
                        <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                            Vanshaj Tiwari
                        </h1>
                    </div>
                    <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                        <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.
                        </p>
                        <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                                <div className="w-full">
                                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                                            <dd className="text-lg font-semibold">Samuel</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                                            <dd className="text-lg font-semibold">Abera</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                                            <dd className="text-lg font-semibold">21/02/1997</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                            <dd className="text-lg font-semibold">Male</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="w-full">
                                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                                            <dd className="text-lg font-semibold">Ethiopia, Addis Ababa</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                            <dd className="text-lg font-semibold">+251913****30</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                            <dd className="text-lg font-semibold">samuelabera87@gmail.com</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                                            <dd className="text-lg font-semibold">https://www.teclick.com</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="my-10 lg:w-[100%] md:h-[14rem] xs:w-full xs:h-[10rem]">
                                <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 lg:text-4xl md:text-3xl xs:text-xl">
                                    My Location
                                </h1>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.276296874438!2d77.07536107998749!3d28.662675912859005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1724607095517!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    className="rounded-lg w-full h-full"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
                                <div className="p-2 hover:text-primary hover:dark:text-primary">
                                    <svg
                                        className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.03-2.765-1.679-2.765-1.676 0-1.932 1.327-1.932 2.688v5.049h-3.198v-7.11h3.063l-.04 1.056zM6.262 8.5H3.061v11.003h3.2V8.5zm-1.595-3.627a1.843 1.843 0 1 1 0 3.686 1.843 1.843 0 0 1 0-3.686zM6.242 5.643a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686z"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://twitter.com/samuelabera87">
                                <div className="p-2 hover:text-primary hover:dark:text-primary">
                                    <svg
                                        className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.98 4.557c-.88.392-1.825.657-2.813.776a4.954 4.954 0 0 0 2.165-2.735c-.95.564-2.003.973-3.127 1.188a4.936 4.936 0 0 0-8.407 4.492A13.983 13.983 0 0 1 1.64 3.155a4.922 4.922 0 0 0 1.527 6.566c-.843-.027-1.636-.258-2.322-.644v.065c0 2.346 1.666 4.29 3.875 4.735-.686.189-1.407.295-2.146.295-.525 0-1.036-.052-1.537-.148a4.94 4.94 0 0 0 4.605 3.422A9.887 9.887 0 0 1 1 18.443a9.977 9.977 0 0 0 5.396 1.579c6.463 0 9.995-5.36 9.995-10.016 0-.153-.004-.306-.01-.458A7.133 7.133 0 0 0 24 6.69a6.936 6.936 0 0 1-1.982.546z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
