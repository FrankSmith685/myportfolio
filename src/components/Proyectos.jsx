import img1 from "../images/proyecto-01.PNG"
import img2 from "../images/proyecto-02.PNG"
import img3 from "../images/proyecto-03.PNG"
import img4 from "../images/proyecto-04.PNG"
import {useEffect} from 'react';

export default function Proyectos(){

    

    return(
        <>
        <div className="pt-max-tp md:pt-0  -mb-14 md:mb-0"></div>
            <a name="proyectos" className="mt-10"></a>
        
        <div className="md:h-screen-1 md:pt-14 pt-14 ">
            <div className="pt-30 md:mt-0">
            
        
        <div className="flex flex-nowrap h-full">
                <div className="w-1/6 ">
                    
                </div>
                <div className="w-5/6  h-full">
                    <div className="text-center">
                        <span className="md:text-4xl text-2xl font-bold font-serif  text-white">Proyectos</span>
                    </div>
                    <div>
                        <p className="text-white text-base md:text-lg">Algunos de mis Proyectos:</p>
                    </div>
                    <div className="md:flex md:flex-nowrap mt-4  h-auto">
                        <div className="md:w-1/2 w-full h-auto text-center border-2 border-white rounded-3xl m-1 overflow-hidden ">
                            <div className="relative  w-auto h-80 md:h-full">
                                    <img src={img1} className="h-full w-full"  alt="" />
                                <div className="h-full   absolute left-0 top-0  bg-primary  w-full  py-2  ">
                                   <p className="text-white p-5 flex justify-center">
                                        Desarrollo un ecommerce en la cual los usuarios pueden adquirir productos por medio de una aplicacion web full-stack.
                                        Tecnologías implementadas: Bootstrap - React - Redux - Node.js - Express - PostgreSql - Sequelize - Nodemailer - Stripe.
                                    </p>
                                    {/* <p>Hola</p> */}
                                    {/* <div> */}
                                    <div className="flex flex-nowrap">
                                        <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://new-phone.vercel.app" target="_blank" rel="noopener noreferrer">Web</a></button>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://github.com/JoaquinAngelino/PF-Ecommerce-Front" target="_blank" rel="noopener noreferrer">Código</a></button>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-auto text-center border-2 border-white rounded-3xl m-1 overflow-hidden ">
                            <div className="relative h-80 w-auto md:h-full">
                                    <img src={img2} className="h-full w-full"  alt="" />
                                <div className="h-full   absolute left-0 top-0  bg-primary  w-full  py-2  ">
                                   <p className="text-white p-5 flex justify-center">
                                        Desarrollo un ecommerce de videojuegos en la cual los usuarios pueden adquirir productos online por medio de una aplicacion web full-stack.
                                        Tecnologías implementadas: Bootstrap - React - Redux - Node.js - Express - PostgreSql - Sequelize - Nodemailer - Stripe.
                                    </p>
                                    {/* <p>Hola</p> */}
                                    {/* <div> */}
                                    <div className="flex flex-nowrap">
                                    <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://pf-gamestore.vercel.app/" target="_blank" rel="noopener noreferrer">Web</a></button>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://github.com/FrankSmith685/PF-GamesStore" target="_blank" rel="noopener noreferrer">Código</a></button>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>

                    <div className="md:flex md:flex-nowrap mt-4  h-auto">
                        <div className="md:w-1/2 w-full h-auto text-center border-2 border-white rounded-3xl m-1 overflow-hidden ">
                            <div className="relative  w-auto h-80 md:h-full">
                                    <img src={img3} className="h-full w-full"  alt="" />
                                <div className="h-full   absolute left-0 top-0  bg-primary  w-full  py-2  ">
                                   <p className="text-white p-5 flex justify-center">
                                   Desarrollo de una Single Page Application, que consume datos de la API #spoonacularapi.
La misma tiene funcionalidades tales como buscar, filtrar/ordenar recetas y crear tu propia receta.
Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL
                                    </p>
                                    {/* <p>Hola</p> */}
                                    {/* <div> */}
                                    <div className="flex flex-nowrap">
                                    <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://my-pi-food.vercel.app/" target="_blank" rel="noopener noreferrer">Web</a></button>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://github.com/FrankSmith685/PI-food" target="_blank" rel="noopener noreferrer">Código</a></button>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-auto text-center border-2 border-white rounded-3xl m-1 overflow-hidden ">
                            <div className="relative  w-auto h-80 md:h-full">
                                    <img src={img4} className="h-full w-full"  alt="" />
                                <div className="h-full   absolute left-0 top-0  bg-primary  w-full  py-2  ">
                                   <p className="text-white p-5 flex justify-center">
                                   Desarrollo de una Single Page Application, que consume datos de la API dogs
La misma tiene funcionalidades tales como buscar, filtrar/ordenar recetas y crear tu propia raza.
Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL
                                    </p>
                                    {/* <p>Hola</p> */}
                                    {/* <div> */}
                                    <div className="flex flex-nowrap">
                                    <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://pi-dogs-roan.vercel.app/" target="_blank" rel="noopener noreferrer">Web</a></button>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="bg-red-400 border-2 rounded-md  px-4"><a href="https://github.com/FrankSmith685/pi-dogs" target="_blank" rel="noopener noreferrer">Código</a></button>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-1/6 ">
                    
                </div>
            </div>
        
        </div>
        </div>
        </>
    )
}