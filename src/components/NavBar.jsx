import {FaAlignJustify} from "react-icons/fa";
import {useEffect, useState} from 'react';
import { useScrollBy } from "react-use-window-scroll";
import { useScrollTo } from "react-use-window-scroll";
import ScrollIntoView from "react-scroll-into-view";
import { createRef } from "react";
import Contacto from "./Contactos";
// import {	ScrollToOptions} from "react-use-window-scroll"

 
 export default function NavBar(){
    const scrollBy = useScrollBy();
    const scrollTo = useScrollTo({ polyfillDisabled: true });
    const logo1="</F";
    const logo2="S>";
    function onClickmobilemenu(){
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
        
    }

    // useRef
    let inicio=createRef();
    let sobremi=createRef();
    // let tecnologia=createRef();
    let proyecto=createRef();
    let contacto=createRef();

    useEffect(()=>{
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");

        let inicio_1=inicio.current;
        let sobremi_1=sobremi.current;
        // let tecnologia_1=tecnologia.current;
        let proyecto_1=proyecto.current;
        let contacto_1=contacto.current;

        inicio_1.classList.replace("text-gray-300","text-yellow-600");
        

        inicio_1.addEventListener('click',()=>{
            inicio_1.classList.replace("text-gray-300","text-yellow-600");
            sobremi_1.classList.replace("text-yellow-600","text-gray-300");
            // tecnologia_1.classList.replace("text-yellow-600","text-gray-300");
            proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            contacto_1.classList.replace("text-yellow-600","text-gray-300");
        })

        sobremi_1.addEventListener('click',()=>{
            inicio_1.classList.replace("text-yellow-600","text-gray-300");
            sobremi_1.classList.replace("text-gray-300","text-yellow-600");
            // tecnologia_1.classList.replace("text-yellow-600","text-gray-300");
            proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            contacto_1.classList.replace("text-yellow-600","text-gray-300");
        })

        // tecnologia_1.addEventListener('click',()=>{
        //     inicio_1.classList.replace("text-yellow-600","text-gray-300");
        //     // tecnologia_1.classList.replace("text-gray-300","text-yellow-600");
        //     sobremi_1.classList.replace("text-yellow-600","text-gray-300");
        //     proyecto_1.classList.replace("text-yellow-600","text-gray-300");
        //     contacto_1.classList.replace("text-yellow-600","text-gray-300");
        // })

        proyecto_1.addEventListener('click',()=>{
            inicio_1.classList.replace("text-yellow-600","text-gray-300");
            proyecto_1.classList.replace("text-gray-300","text-yellow-600");
            // tecnologia_1.classList.replace("text-yellow-600","text-gray-300");
            sobremi_1.classList.replace("text-yellow-600","text-gray-300");
            contacto_1.classList.replace("text-yellow-600","text-gray-300");
        })

        contacto_1.addEventListener('click',()=>{
            inicio_1.classList.replace("text-yellow-600","text-gray-300");
            contacto_1.classList.replace("text-gray-300","text-yellow-600");
            // tecnologia_1.classList.replace("text-yellow-600","text-gray-300");
            proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            sobremi_1.classList.replace("text-yellow-600","text-gray-300");
        })

      },[document]);

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
        }
      window.addEventListener('scroll',()=>{
        let inicio_1=inicio.current;
        let sobremi_1=sobremi.current;
        let proyecto_1=proyecto.current;
        let contacto_1=contacto.current;

        
        let inicios=document.querySelector("#inicio");
        let sobremí=document.querySelector("#sobremí");
        let proyectos=document.querySelector("#proyectos");
        let contactos=document.querySelector("#contacto");


        let inicio_top=inicios.getBoundingClientRect().height-2;

        let sobremí_top=sobremí.getBoundingClientRect().height+inicio_top;

        let proyectos_top=proyectos.getBoundingClientRect().height+sobremí_top;
       



        if(window.scrollY<inicio_top){
            if(sobremi_1!==null){
                sobremi_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(inicio_1!==null){
                inicio_1.classList.replace("text-gray-300","text-yellow-600");
            }
            
            if(proyecto_1!==null){
                proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(contacto_1!==null){
                contacto_1.classList.replace("text-yellow-600","text-gray-300");
            }
        }

        if(window.scrollY>inicio_top){ 
            if(inicio_1!==null){
                inicio_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(sobremi_1!==null){
                sobremi_1.classList.replace("text-gray-300","text-yellow-600");
            }
            if(proyecto_1!==null){
                proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(contacto_1!==null){
                contacto_1.classList.replace("text-yellow-600","text-gray-300");
            }
        }



        if(window.scrollY>sobremí_top){ 
            if(inicio_1!==null){
                inicio_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(proyecto_1!==null){
                proyecto_1.classList.replace("text-gray-300","text-yellow-600");
            }
            if(sobremi_1!==null){
                sobremi_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(contacto_1!==null){
                contacto_1.classList.replace("text-yellow-600","text-gray-300");
            }
        }
        if(window.scrollY>proyectos_top){ 
            if(inicio_1!==null){
                inicio_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(contacto_1!==null){
                contacto_1.classList.replace("text-gray-300","text-yellow-600");
            }
            if(sobremi_1!==null){
                sobremi_1.classList.replace("text-yellow-600","text-gray-300");
            }
            if(proyecto_1!==null){
                proyecto_1.classList.replace("text-yellow-600","text-gray-300");
            }
        }
        
      })

    return(
        <>
       
        <nav className=" bg-favorite1 shadow-lg md:fixed  h-auto md:h-14 w-full  md:py-0 z-10">
		    <div className="max-w-6xl mx-auto px-4 py-3 md:py-0">
			    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-bold text-3xl text-orange-600">{logo1}</span><span className="font-bold text-3xl text-yellow-600">{logo2}</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            
                            <ScrollIntoView smooth={true} selector="#inicio">
                                <button ref={inicio} className="py-4 px-2 text-gray-300 font-semibold hover:text-yellow-600 transition duration-300  hover:scroll-mt-8">Inicio</button>
                            </ScrollIntoView>
                            
                            <ScrollIntoView smooth={true} selector="#sobremí">
                                <button ref={sobremi} className="py-4 px-2 text-gray-300 font-semibold hover:text-yellow-600 transition duration-300  hover:scroll-mt-8">Sobre mi</button>
                            </ScrollIntoView>
                            <ScrollIntoView smooth={true} selector="#proyectos">
                                <button ref={proyecto} className="py-4 px-2 text-gray-300 font-semibold hover:text-yellow-600 transition duration-300  hover:scroll-mt-8">Proyectos</button>
                            </ScrollIntoView>

                            <ScrollIntoView smooth={true} selector="#contacto">
                                <button ref={contacto} className="py-4 px-2 text-gray-300 font-semibold hover:text-yellow-600 transition duration-300  hover:scroll-mt-8">Contacto</button>
                            </ScrollIntoView>
                        </div>
                        <div className="md:hidden flex items-center">
	                        <button className="outline-none " onClick={()=>onClickmobilemenu()}>
                                
                                <FaAlignJustify  className="w-6 h-6 text-gray-500"/> 
		      
	                        </button>
                        </div>
			</div>
            
		</div>
        <div className="hidden md:hidden mobile-menu bg-gray-800">
	                        <ul className=" mt-2 w-full">
		                        <li><ScrollIntoView smooth={true} selector="#inicio"><button className="block w-full text-start text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Inicio</button></ScrollIntoView></li>
		                        <li><ScrollIntoView smooth={true} selector="#sobremí"><button className="block w-full text-start text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Sobre mí</button></ScrollIntoView></li>
		                        <li><ScrollIntoView smooth={true} selector="#proyectos"><button className="block w-full text-start text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Proyectos</button></ScrollIntoView></li>
		                        <li><ScrollIntoView smooth={true} selector="#contacto"><button className="block w-full text-start text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Contacto</button></ScrollIntoView></li>
		                        
                                
                            </ul>
                        </div>
	</nav>
       
        </>
    )
 }