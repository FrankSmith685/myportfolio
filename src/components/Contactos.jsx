import emailjs from "emailjs-com"

export default function Contacto(){

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_vh753sg','template_gcqkar9',e.target,'DrNbhXgHzsbP2s2Z0').then(res=>{
            console.log(res);
            alert("Se envió el mensaje correctamente");
        })
    }

    return(
        <>
        <a name="contacto">
        <div className="h-screen-1 pt-14">
        
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

        </div>
        </a>
        </>
    )
}