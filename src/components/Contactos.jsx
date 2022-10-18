export default function Contacto(){
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
                    <div className="flex flex-nowrap mt-4  h-auto">
                        <div className="w-1/2 h-auto  m-1">
                            <input type="text" className="w-full border-2 border-black rounded-3xl px-3" placeholder="Nombre Completo*"/>
                        </div>
                        <div className="w-1/2 h-auto  m-1">
                            <input type="text" className="w-full border-2 border-black rounded-3xl px-3" placeholder="Dirección de Email"/>
                        </div>
                        
                    </div>
                        <div className="mt-4 h-auto">
                            <textarea className="w-full border-2 border-black rounded-3xl p-3" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="text-center text-white font-bold font-serif text-lg">
                            <button className="px-3 w-auto border-2 border-black rounded-2xl hover:border-white hover:bg-primary">Enviar</button>
                        </div>
                </div>
                <div className="w-1/6 ">
                    
                </div>
            </div>

        </div>
        </a>
        </>
    )
}