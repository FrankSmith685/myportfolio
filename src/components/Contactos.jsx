import emailjs from "emailjs-com"
import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { BiMailSend } from "react-icons/bi";

export default function Contacto(){

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_vh753sg','template_gcqkar9',e.target,'DrNbhXgHzsbP2s2Z0').then(res=>{
            console.log(res);
            alert("Se envió el mensaje correctamente");
        })
    }
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

    return(
        <div id="contacto" className='w-full   h-screen'>
            <div  className="bg-cyan-900 w-full p-5 pt-28 h-full">
                <div className="md:flex md:flex-nowrap h-full">
                    <div className="md:w-1/6 ">

                    </div>
                    <div className="md:w-5/6 w-full h-full">
                        <div className="text-start">
                            <span className="text-3xl font-bold font-serif  text-gray-300">Contacto</span>
                        </div>
                        <div className="py-5">
                            <p className="text-lg text-gray-300 font-serif">Si te interesa mi perfil, no dudes en contactarme.</p>
                        </div>
                        <div className="md:flex md:flex-nowrap w-full h-auto">
                            <div className="w-2/4 py-5 px-3 ">
                                <ul className="space-y-3 text-gray-300 text-lg font-serif">
                                    <li className="flex items-center space-x-2">
                                    <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">

                                        <span className="text-2xl"><FaLinkedin/></span>
                                        <p>LinkedIn</p>
                                    </a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                    <a href="https://github.com/FrankSmith685" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                                        <span className="text-2xl"><FaGithub/></span>
                                        <p>Github</p>
                                    </a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer" onClick={()=>copiarAlPortapapeles('p1')}>

                                        <span className="text-2xl"><BiMailSend/></span>
                                        <p>f.s.b.rojas@gmail.com</p>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:border-l-2   md:px-3">
                                <p className="text-gray-300 text-lg">O contáctese conmigo enviando el formulario.</p>
                                <div className="md:pr-10">
                                <form onSubmit={enviarEmail}>
                                    <div className="flex flex-nowrap mt-4  h-auto">
                                    <div className="w-1/2 h-auto  m-1">
                                        <input type="text" className="w-full border-2 border-black rounded-3xl px-3" name="nombre" placeholder="Nombre Completo*"/>
                                    </div>
                                    <div className="w-1/2 h-auto  m-1">
                                        <input type="text" className="w-full border-2 border-black rounded-3xl px-3" name="email" placeholder="Dirección de Email"/>
                                    </div>

                                    </div>
                                    <div className="mt-4 h-auto">
                                        <textarea className="w-full border-2 border-black rounded-3xl p-3" name="mensaje" placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className="text-center text-white font-bold font-serif text-lg">
                                        <button className="px-3 w-auto border-2 border-black rounded-2xl hover:border-white hover:bg-primary" type="submit">Enviar</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <div id="contacto" className="h-screen-1 pt-14">
        
            <div className="flex flex-nowrap h-full">
                <div className="w-1/6 ">
                    
                </div>
                <div className="w-5/6  h-full">
                    <div className="text-center">
                        <span className="text-4xl font-bold font-serif  text-white">Contacto</span>
                    </div>
                    <div>
                        <p className="text-white text-lg">Contáctese conmigo enviando el formulario o bien un mail a la siguiente casilla: f.s.b.rojas@gmail.com</p>
                    </div>
                    <form onSubmit={enviarEmail}>
                        <div className="flex flex-nowrap mt-4  h-auto">
                        <div className="w-1/2 h-auto  m-1">
                            <input type="text" className="w-full border-2 border-black rounded-3xl px-3" name="nombre" placeholder="Nombre Completo*"/>
                        </div>
                        <div className="w-1/2 h-auto  m-1">
                            <input type="text" className="w-full border-2 border-black rounded-3xl px-3" name="email" placeholder="Dirección de Email"/>
                        </div>
                        
                        </div>
                        <div className="mt-4 h-auto">
                            <textarea className="w-full border-2 border-black rounded-3xl p-3" name="mensaje" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="text-center text-white font-bold font-serif text-lg">
                            <button className="px-3 w-auto border-2 border-black rounded-2xl hover:border-white hover:bg-primary" type="submit">Enviar</button>
                        </div>
                    </form>
                    
                        
                </div>
                    
                <div className="w-1/6 ">
                    
                </div>
            </div>

        </div> */}
        </div>
    )
}