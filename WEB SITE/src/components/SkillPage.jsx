import React from 'react';

const SkillPage = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center ">
                    <h2 className="text-3xl font-bold sm:text-4xl">Hi , I'm Nirav Mathukiya</h2>

                    <p className="mt-4 text-gray-300 w-auto text-center text-ellipsis">
                        A web developer with exceptional problem-solving skills adeptly tackles complex challenges in website development, efficiently debugging code, resolving compatibility issues, and optimizing performance to ensure seamless functionality and user experience.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* 1. html */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/HTML.png" alt="" className='w-20 ' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white  text-center mb-4">HTML</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            HTML empowers web development with its structure, semantics, and accessibility features. Mastery of HTML enables efficient content organization, seamless navigation, and enhanced user experience, laying a robust foundation for building dynamic and responsive websites
                        </p>
                    </a>
                    {/* {2.css } */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/css.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white  text-center mb-4">CSS</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            CSS elevates web design by styling HTML elements, enhancing visual appeal, layout, and responsiveness. Proficiency in CSS enables precise control over typography, colors, spacing, and animations, fostering creativity and seamless user interactions across various devices and screen sizes.
                        </p>
                    </a>
                    {/* 3.Javascript */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/js.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white  text-center mb-4">JavaScript</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            JavaScript revolutionizes web development with its dynamic functionality, enabling interactive user experiences, data manipulation, and asynchronous operations. Proficiency in JavaScript empowers developers to create responsive, feature-rich web applications, driving innovation and interactivity on the modern web.
                        </p>
                    </a>
                    {/* 4.boostrap */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/bootstrap.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">BootStrap</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Bootstrap accelerates web development by providing a comprehensive library of pre-designed components and responsive CSS frameworks. It streamlines UI creation, ensuring consistency, accessibility, and cross-browser compatibility, empowering developers to build elegant and responsive websites efficiently.
                        </p>
                    </a>
                    {/* 5.tailwind   */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/tw.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">Tailwind</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Tailwind CSS revolutionizes styling in web development with its utility-first approach. It offers a highly customizable and scalable framework, enabling rapid UI development by composing utility classes, resulting in clean, maintainable, and responsive designs without sacrificing flexibility or performance.
                        </p>
                    </a>
                    {/* 6.React */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/react.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">React</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            React is a powerful JavaScript library for building dynamic user interfaces. It enables component-based development, simplifying UI creation by efficiently managing state and rendering data changes. React's virtual DOM ensures fast rendering, making it ideal for building scalable and interactive web applications.
                        </p>
                    </a>
                    {/* 7.figma */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/figma.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">Figma</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Figma is a collaborative design tool used for creating user interfaces, wireframes, and prototypes. It offers real-time collaboration, seamless version control, and robust design systems, empowering teams to streamline their design workflows and create visually stunning and interactive digital experiences.
                        </p>
                    </a>
                    {/* 8.GitHub */}
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/node.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">Node.js</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Node.js is a runtime environment that executes JavaScript code outside the browser, allowing developers to build server-side applications. It provides event-driven architecture, non-blocking I/O operations, and a vast ecosystem of libraries and frameworks, making it ideal for building scalable and high-performance web applications, APIs, and microservices
                        </p>
                    </a>
                    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-pink-500/10  "
                        href="#">
                        <div className='flex justify-center'>
                            <img src="./images/jQuery.png" alt="" className='w-18  h-20' />
                        </div>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665 479L12 14zm-4 6v-7.5l4-2.222"
                        />
                        <h2 className="mt-4 text-xl font-bold text-white text-center mb-4">jQuery</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            jQuery is a fast and lightweight JavaScript library that simplifies HTML document traversal, event handling, animation, and AJAX interactions. It streamlines client-side scripting, offering a concise syntax and cross-browser compatibility, making it easier to manipulate DOM elements and create dynamic web pages.
                        </p>
                    </a>
                </div>


            </div>
        </section>
    );
};

export default SkillPage;
