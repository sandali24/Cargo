import React from 'react'
import logo from "../assets/cargologo.png"
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
    return (
        <nav class="sticky top-0 z-50 py-3 bg-white">
            <div class="container px-4 mx-auto relative text-sm">
                <div class="flex justify-between items-center">
                    <div class="flex items-center flex-shrink-0">
                        <img class="h-20 w-25 mr-2" src={logo} alt='logo' />
                    </div>

                    <ul class="hidden lg:flex ml-14 space-x-12">
                        <li class="flex items-center">HOME <IoMdArrowDropdown class="ml-2" /></li>
                        <li class="flex items-center">PAGES <IoMdArrowDropdown class="ml-2" /></li>
                        <li >TRACKING </li>
                        <li class="flex items-center">SERVICES <IoMdArrowDropdown class="ml-2" /></li>
                        <li class="flex items-center">BLOG <IoMdArrowDropdown class="ml-2" /></li>
                    </ul>

                    <div class="hidden lg:flex justify-center space-x-12 items-center">
                        <a href='#' class="py-2 px-3 border bg-yellow-500 text-white">
                            GET A QUOTE
                        </a>
                        <a href='#' class="py-2 px-3 border bg-black text-white">
                            SIGN IN
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar