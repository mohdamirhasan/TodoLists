import React from 'react'
import { AUTHOR } from './config';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='bg-black text-white w-full'>
            <div className="p-5 flex justify-between">
                <div className=''>
                    <div className="logo text-lg font-bold">myTask</div>
                    <div className="discp text-xs max-w-1/2">This is a Web Application, where you can manage your daily tasks.</div>
                </div>
                <div className="social flex gap-4">
                    <a href="https://www.linkedin.com/in/amir-hasan-web-developer/"><FaLinkedin size={30} /></a>
                    <a href="https://github.com/mohdamirhasan/"><FaGithub size={30} /></a>
                </div>
            </div>
            <div className="text-sm footer flex justify-center items-center text-white px-10 py-5 font-['Proxima Nova']">
                <div className="copyright text-xs">&copy;copyright 2024. Made by {AUTHOR}</div>
            </div>
        </footer>
  )
}

export default Footer
