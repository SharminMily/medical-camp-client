/* eslint-disable react/no-unknown-property */

import ButtonStyle from "../../Shared/ButtonStyle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";




const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NLPm5R2/Screenshot-2023-11-25-100955.png" className="w-full h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item4" className="btn btn-circle">❮</a>
                        <a href="#item2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/FK59bch/medical-Banner2.png " className="w-full  h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item1" className="btn btn-circle">❮</a>
                        <a href="#item3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MhqnVxL/medical-Banner3.png" className="w-full  h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item2" className="btn btn-circle">❮</a>
                        <a href="#item4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pLFG2ry/medical-Banner4.png" className="w-full  h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item3" className="btn btn-circle">❮</a>
                        <a href="#item5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="item5" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qnmj7VD/medical-Banner5.png" className="w-full  h-[100vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item4" className="btn btn-circle">❮</a>
                        <a href="#item1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                               
                <a href="#item1" className="btn btn-xs  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">1</a>
                <a href="#item2" className="btn btn-xs  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">2</a>
                <a href="#item3" className="btn btn-xs  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">3</a>
       <a href="#item4" className="btn btn-xs  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">4</a>
       <a href="#item5" className="btn btn-xs  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">5</a>

            </div>       
            
        </>
    );
};

export default Banner;


