// import react 
import React, { useState } from "react";
import data from "./quotes.json";
import { HiClipboard } from "react-icons/hi2"; // <HiClipboard />
import { HiArrowPath } from "react-icons/hi2"; // <HiArrowPath />
import { FaDotCircle } from "react-icons/fa"; // <FaDotCircle />
import { FaFacebook } from "react-icons/fa"; // FaFacebook
import { FaInstagram } from "react-icons/fa6"; //<FaInstagram />
import { FaWhatsapp } from "react-icons/fa"; // <FaWhatsapp />
import { FaLinkedin } from "react-icons/fa"; // <FaLinkedin />
import { FaXTwitter } from "react-icons/fa6"; // <FaXTwitter />
import { MdDarkMode } from "react-icons/md"; // <MdDarkMode />
import { CiLight } from "react-icons/ci"; // <CiLight />


function App () {
  // qoute auther category
  const [quote, setQuote] = useState("The best error message is the one that never shows up.");
  const [auther, setAuther] = useState("Barbara Liskov");
  const [category, setCategory] = useState("coding");
  const [theme, setTheme] = useState(false);

  // get Random Quote
  function getRandomQuote() {
    // choose a random number
    let rand = Math.floor( Math.random() * data.length );
    // choose a data
    const random = data[rand];
    setQuote(random.text);
    setAuther(random.author);
    setCategory(random.category);
  }

  // copy to clipboard function
  function handleCopy() {
    navigator.clipboard.writeText(quote + " -" + auther);
  }

  // dark mode
  function toggleTheme () {
    setTheme(!theme);
  }

  return(
    <div className={theme? "dark" : ""}>
          <div className="h-screen overflow-hidden dark:bg-gray-900 dark:text-white transition ease-in-out">
        <nav className="flex items-center m-2 fixed top-0 z-1">
          <FaDotCircle className="m-1"/>
          <h2 className="font-bit text-gray-800 text-xl p-1 dark:text-white">IMPETUS</h2>
        </nav>
      
    <div className=" fixed top-0 h-full w-full flex justify-center items-center">

      <div className="dark:bg-gray-800 bg-white shadow-2xl dark:shadow-[0_0px_20px_rgba(0,0,0,0.25)] dark:border-2 dark:border-gray-800 dark:shadow-gray-950 h-[50%] max-sm:w-[70%] sm:w-[40%] md:w-[40%] p-2 rounded">
        <div className=" w-full h-[25%] flex justify-center items-center">
          <h1 className=" text-center text-xl p-2 align-middle font-bit dark:text-white"> {category.toUpperCase()} </h1>
        </div>
        <div className=" w-full h-[50%] p-2">
        <div className="text-center h-[75%] flex justify-center items-center">
          <span className="w-full bg-amber-300 italic text-2xl p-1 max-sm:text-lg dark:text-gray-800">
          &quot;{quote}&quot;
        </span>
        </div>
        <div className="text-center font-rubik">
          <span>
          -{auther}
        </span>
        </div>
        
        </div>
        <div className=" h-[25%] flex justify-around items-center">
          <button className="border border-gray-700 p-2 m-1 rounded-4xl dark:text-white dark:border-white text-gray-700 hover:bg-gray-700 hover:text-white" onClick={getRandomQuote}> <HiArrowPath /> </button>
          <button className="border border-gray-700 p-2 m-1 rounded-4xl dark:text-white dark:border-white text-gray-700 hover:bg-gray-700 hover:text-white" onClick={handleCopy}> <HiClipboard /> </button>
          <button className="border border-gray-700 p-2 m-1 rounded-4xl dark:text-white dark:border-white text-gray-700 hover:bg-gray-700 hover:text-white" onClick={toggleTheme}> {theme ? <CiLight /> : <MdDarkMode />} </button>
        </div> 
        <div className="flex z-1 w-full justify-around relative mt-5 p-2 text-xl">
        <div>
          {/* facebook */}
          <a href="https://www.facebook.com/"><FaFacebook className="text-facebook "/></a>
        </div>
        <div>
          {/* instagram */}
          <a href="https://www.instagram.com/"><FaInstagram className="text-instagram"/></a>
        </div>
        <div>
          {/* twitter */}
          <a href="https://x.com/"><FaXTwitter className="text-twitter dark:text-white"/></a>
        </div>
        <div>
          {/* whatsapp */}
          <a href="https://www.whatsapp.com/">
            <FaWhatsapp className="text-whatsapp"/>
          </a>
        </div>
        <div>
          {/* linkedIn */}
          <a href="https://www.linkedin.com/feed/"><FaLinkedin className="text-linkedin"/></a>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;