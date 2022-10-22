import images from "../images/Earth.gif"
import { FaArrowRight,FaLinkedin,FaGithub,FaUser } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

export default function Inicio(){
    function copiarAlPortapapeles(id_elemento) {
        var aux = document.createElement("input");
        // console.log(aux);
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        alert("Email copiado en el portapapeles");
      }

    // function onClickcorreo(){
    //     var res = document.execCommand('copy');
    //     console.log(res);
        
    //     console.log("HOLA")
    // }
    return(
        <>
            <a name="inicio ">
            <div className="bg-hero-pattern bg-cover h-screen w-full">
            <div className="flex flex-nowrap h-full w-full bg-primary">
                <div className="w-1/6 ">
                    <div className="flex items-center absolute h-full"> 
                        <div className="fixed w-auto text-white  h-auto">
                            <div className=" h-full ">

                            
                            <div className="flex items-center border-none bg-blue-600 p-2 relative -left-24 top-0 hover:left-0 transition-all duration-300 ease-linear ">
                            <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center">
                                    <span className="pr-9">Linkedin</span><FaLinkedin className="text-2xl "/> 
                                </div>
                            </a>
                            </div>
                            
                            <div className="flex items-center border-none bg-gray-900 p-2 relative  -left-24 top-0 hover:left-0 transition-all duration-300 ease-linear hover:cursor-pointer">
                            <a href="https://github.com/FrankSmith685" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center">
                                <span className="pr-11">GitHub</span><FaGithub className="text-2xl"/>

                                </div>
                                </a>
                            </div>
                            
                            <p id="p1" className="hidden">f.s.b.rojas@gmail.com</p>
                            <div className="flex items-center border-none bg-emerald-700 p-2  relative -left-24 top-0 hover:left-0 transition-all duration-300 ease-linear hover:cursor-pointer">
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" onClick={()=>copiarAlPortapapeles('p1')}>
                                <div className="flex items-center">
                                <span className="pr-14">Email</span><BiMailSend className="text-2xl"/>
                                </div>
                            </a>

                            </div>
                            <div className="flex items-center border-none bg-slate-600 p-2 relative -left-24 top-0 hover:left-0 transition-all duration-300 ease-linear hover:cursor-pointer">
                            <a href="#">
                                <div className="flex items-center">
                                    <span className="pr-4">Curriculum</span><FaUser className="text-2xl"/>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className="w-5/6">
                    <div className="flex items-center h-full">
                    <div>
                        <div className="flex items-center">
                        <span className="text-orange-600 font-bold font-serif text-sm md:text-4xl pr-3">¡Hola Mundo! </span><img className="w-7 md:w-10" src={images} alt="" /><span className="text-yellow-600 pl-3 font-bold font-serif text-base md:text-4xl">Soy Frank Smith</span>
                        </div>
                        <div>
                            <span className="md:text-6xl text-4xl text-gray-500 font-bold">Desarrollador full stack </span>
                        </div>
                        <div >
                            <a href="#proyectos"><button className="text-white flex items-center  text-2xl border-2 border-solid border-white rounded-lg px-3 mt-3 w-auto">Ver Proyectos <FaArrowRight className="ml-2 text-xl"/></button></a>
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