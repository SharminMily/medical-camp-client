/* eslint-disable react/prop-types */

const ButtonStyle = ({name}) => {
    return (
      <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">{name}</button>

    );
};

export default ButtonStyle;