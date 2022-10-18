import images from "../images/Earth.gif"
import { FaArrowRight,FaLinkedin,FaGithub,FaUser } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

export default function Inicio(){
    return(
        <>
            <a name="inicio">
            <div className="bg-hero-pattern bg-cover h-screen">
            <div className="flex flex-nowrap h-full bg-primary">
                <div className="w-1/6 ">
                    <div className="flex items-center h-full  "> 
                        <div className="fixed w-auto text-white">
                            <div className="flex items-center border-none bg-blue-600 p-2 ">
                                <span className="pr-9">Linkedin</span><FaLinkedin className="text-2xl"/>
                            </div>
                            <div className="flex items-center border-none bg-gray-900 p-2 ">
                                <span className="pr-11">GitHub</span><FaGithub className="text-2xl"/>
                            </div>
                            <div className="flex items-center border-none bg-emerald-700 p-2 ">
                                <span className="pr-14">Email</span><BiMailSend className="text-2xl"/>
                            </div>
                            <div className="flex items-center border-none bg-slate-600 p-2 ">
                                <span className="pr-4">Curriculum</span><FaUser className="text-2xl"/>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className="w-5/6">
                    <div className="flex items-center h-full">
                        <div>
                        <div className="flex items-center ">
                        <span className="text-orange-600 font-bold font-serif text-4xl pr-3">¡Hola Mundo! </span><img className="w-10" src={images} alt="" /><span className="text-yellow-600 pl-3 font-bold font-serif text-4xl">Soy Frank Smith</span>
                        </div>
                        <div>
                            <span className="text-6xl text-gray-500 font-bold">Desarrollador Web full stack </span>
                        </div>
                        <div >
                            <button className="text-white flex items-center  text-2xl border-2 border-solid border-white rounded-lg px-3 mt-3 w-auto">Ver Proyectos <FaArrowRight className="ml-2 text-xl"/></button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        </a>
        </>
        
    )
}