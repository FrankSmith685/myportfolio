import {FaAlignJustify} from "react-icons/fa";

 
 export default function NavBar(){
    const logo1="</F";
    const logo2="S>";
    function onClickmobilemenu(){
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
        
    }
    return(
        <>
        
        <nav className="bg-gray-800 shadow-lg fixed  w-full py-2.5 md:py-0">
		    <div className="max-w-6xl mx-auto px-4 ">
			    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-bold text-3xl text-orange-600">{logo1}</span><span className="font-bold text-3xl text-yellow-600">{logo2}</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <a
							    href="#inicio"
							    className="py-4 px-2 text-gray-500  font-semibold hover:text-yellow-600 transition duration-300 " >
                                <button >Inicio</button>
                            </a>
                            <a
							href="#sobremí"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-600 transition duration-300 " >
                            <button>Sobre mí</button>
                            </a>
                            <a
							href="#tecnologías"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-600 transition duration-300">
                            Tecnologías
                            </a>
                            <a
							href="#proyectos"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-600 transition duration-300">
                            Proyectos
                            </a>
                            <a
							href="#contacto"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-600 transition duration-300">
                            Contacto
                            </a>
						    
                        </div>
                        <div className="md:hidden flex items-center">
	                        <button className="outline-none " onClick={()=>onClickmobilemenu()}>
                                
                                <FaAlignJustify  className="w-6 h-6 text-gray-500"/> 
		      
	                        </button>
                        </div>
			</div>
            <div className=" md:hidden mobile-menu">
	                        <ul className=" mt-2">
		                        <li><a href="#inicio" class="block text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Inicio</a></li>
		                        <li><a href="#sobremí" class="block text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Sobre mí</a></li>
		                        <li><a href="#tecnologías" class="block text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Tecnologías</a></li>
		                        <li><a href="#proyectos" class="block text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Proyectos</a></li>
		                        <li><a href="#contacto" class="block text-sm px-2 py-2 text-gray-500 hover:bg-gray-500 hover:text-gray-800 transition duration-300">Contacto</a></li>
                            </ul>
                        </div>
		</div>
	</nav>
        <div className="bg-transparent pt-14 md:pt-14">

        </div>
        </>
    )
 }