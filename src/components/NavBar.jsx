 
 export default function NavBar(){
    const logo1="</F";
    const logo2="S>"
    return(
        <>
        {/* bg-gray-800 */}
        <nav className="bg-primary px-2 fixed sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b border-gray-200  md:flex md:justify-between md:items-center">
            <div>
            <span className="font-bold text-3xl text-orange-600">{logo1}</span><span className="font-bold text-3xl text-yellow-600">{logo2}</span>
            </div>
            <div className="text-white">
                <button className="font-serif font-medium w-auto h-auto px-3 text-base rounded-2xl border-yellow-600 border-2 mx-2 hover:bg-transparent hover:text-yellow-600 hover:border-orange-600"><a href="#inicio">Inicio</a></button>
                <button className="font-serif font-medium w-auto h-auto px-3 text-base rounded-2xl border-yellow-600 border-2 mx-2 hover:bg-transparent hover:text-yellow-600 hover:border-orange-600"><a href="#sobremí">Sobre mí</a></button>
                <button className="font-serif font-medium w-auto h-auto px-3 text-base rounded-2xl border-yellow-600 border-2 mx-2 hover:bg-transparent hover:text-yellow-600 hover:border-orange-600"><a href="#tecnologías">Tecnologías</a></button>
                <button className="font-serif font-medium w-auto h-auto px-3 text-base rounded-2xl border-yellow-600 border-2 mx-2 hover:bg-transparent hover:text-yellow-600 hover:border-orange-600"><a href="#proyectos">Proyectos</a></button>
                <button className="font-serif font-medium w-auto h-auto px-3 text-base rounded-2xl border-yellow-600 border-2 mx-2 hover:bg-transparent hover:text-yellow-600 hover:border-orange-600"><a href="#contacto">Contacto</a></button>
            </div>    
        </nav>
        <div className="bg-transparent pt-28 md:pt-14">

        </div>
        </>
    )
 }