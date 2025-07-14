import React from "react";
import ThreeJSTitle from "./ThreeJSTitle";
// import { Beaker, Zap, BrainCircuit as Circuit, Star, ArrowRight, Search, Filter, Link } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Data } from '../Data/Data';

const VirtualLabs = () => {
    return (
        <>

            <div className=" bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                <section className="relative overflow-hidden">
                    <ThreeJSTitle />
                    <div className=" mx-auto px-6 py-20 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
                                Interactive 3D Science Simulations
                            </h1>
                            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                                Dive into our cutting-edge collection of interactive 3D simulations designed to transform complex scientific concepts into engaging learning experiences.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Simulations Grid */}
            <div className="mx-auto p-12 pb-20 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Data && Data.map((simulation) => {
                        const Icon = simulation.icon;
                        return (
                            <div
                                key={simulation.id}
                                className="group relative bg-black bg-opacity-80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={simulation.image}
                                        alt={simulation.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white">
                                            {simulation.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 backdrop-blur-md text-blue-200">
                                            {simulation.difficulty}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                                            <Icon className="h-6 w-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 h-14">{simulation.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed h-20">{simulation.description}</p>
                                        </div>
                                    </div>

                                    {/* <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors group">
                                        Launch Simulation
                                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                    </button> */}

                                    {/* <div className="flex justify-center gap-4">
                                        <button className="relative flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border-none group">
                                            <span className="text-center w-full px-6 py-2 text-white text-lg  tracking-widest z-20 transition-all duration-700 ease-in-out group-hover:text-[#183153]">
                                                Launch Simulation
                                            </span>
                                            <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
                                        </button>
                                    </div> */}

                                    <div className="relative group mx-auto flex items-center justify-center">
                                        <div className="absolute bottom-0 w-[45px] h-[45px] bg-[#3c555d] rounded-full transition-all duration-600 group-hover:w-1/2 group-hover:bg-[#b1dae7]"></div>

                                        <NavLink
                                            to={`/simulation/${simulation.id}`}
                                            className="relative z-10 p-3 flex items-center space-x-2 text-[#234567] font-bold text-lg tracking-wide active:scale-95 transition-all duration-300"
                                        >
                                            <span>Start</span>
                                            <svg
                                                className="w-[15px] h-[10px] translate-x-[-5px] transition-transform duration-300 group-hover:translate-x-0"
                                                viewBox="0 0 13 10"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1,5 L11,5"
                                                    stroke="#234567"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    fill="none"
                                                ></path>
                                                <polyline
                                                    points="8 1 12 5 8 9"
                                                    stroke="#234567"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    fill="none"
                                                ></polyline>
                                            </svg>
                                        </NavLink>
                                    </div>


                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Style for button hover effect */}
            <style>
                {`
                @keyframes scaleUp {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(0.95);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                `}
            </style>

        </>
    );
};

export default VirtualLabs;