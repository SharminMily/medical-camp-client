/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the services"
                strength={-200}
            >
                <div className="hero h-[700px] min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl z-10 bg-opacity-30 rounded-lg p-8 bg-black text-white">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    learn More
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

export default Cover;