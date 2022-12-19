import img1 from "../images/proyecto-01.PNG"
import img2 from "../images/proyecto-02.PNG"
import img3 from "../images/imageFood.PNG"
import img4 from "../images/proyecto-04.PNG"
import {useEffect} from 'react';

export default function Proyectos(){

    

    return(
        <div id="proyectos" className='w-full   h-auto'>
            <div  className="bg-red-900 w-full p-5 pt-28 h-full">
                <div className="md:flex md:flex-nowrap h-full">
                    <div className="md:w-1/6 ">
                    
                    </div>
                    <div className="md:w-5/6 w-full  h-full">
                        <div className="text-start">
                            <span className="text-2xl md:text-4xl font-bold font-serif  text-gray-300">Proyectos</span>
                        </div>
                        <div className="bg-red-800 mt-14 w-full h-auto md:flex md:flex-nowrap">
                            <div className=" h-full w-full md:w-1/2">
                                <img src={img3} alt="" className="w-full h-72"/>

                            </div>
                            <div className="py-5 px-5 h-full w-full">
                                <h1 className="text-2xl font-bold font-serif text-gray-300">Food-App</h1>
                                <p className="py-2 md:pr-3 text-gray-300 font-serif">
                                    Desarrollo de una Single Page Application, que consume datos de la API #spoonacularapi. La misma tiene funcionalidades tales como buscar, filtrar/ordenar recetas y crear tu propia receta. Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL
                                </p>
                                <a href="https://pi-food-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white w-full md:w-auto'>Web</button>
                                </a>
                                <a href="https://github.com/FrankSmith685/pi-food" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 md:ml-5 mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white w-full md:w-auto'>código</button>
                                </a>


                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-cyan-800  w-full h-auto md:flex md:flex-nowrap">
                            <div className="h-full w-full md:w-1/2">
                                <img src={img4} alt="" className="w-full h-72"/>

                            </div>
                            <div className="py-5 px-5 h-full w-full">
                                <h1 className="text-2xl font-bold font-serif text-gray-300">Dogs-App</h1>
                                <p className="py-2 md:pr-3 text-gray-300 font-serif">
                                    Desarrollo de una Single Page Application, que consume datos de la API dogs La misma tiene funcionalidades tales como buscar, filtrar/ordenar raza y crear tu propia raza. Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL    
                                </p>
                                <a href="https://pi-dogs-roan.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white md:w-auto w-full'>Web</button>
                                </a>
                                <a href="https://github.com/FrankSmith685/pi-dogs" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 md:ml-5 mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white md:w-auto w-full'>código</button>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-orange-800  w-full h-auto md:flex md:flex-nowrap">
                            <div className="h-full md:w-1/2 w-full">
                                <img src={img2} alt="" className="w-full h-72"/>

                            </div>
                            <div className="py-5 px-5 h-full w-full">
                                <h1 className="text-2xl font-bold font-serif text-gray-300">Videogames E-commerce</h1>
                                <p className="py-2 md:pr-3 text-gray-300 font-serif">
                                    Desarrollo un ecommerce de videojuegos en la cual los usuarios pueden adquirir productos online por medio de una aplicacion web full-stack.
                                        Tecnologías implementadas: Bootstrap - React - Redux - Node.js - Express - PostgreSql - Sequelize - Nodemailer - Stripe.    
                                </p>
                                <a href="https://pf-gamestore.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 mt-5 bg-transparent border-1px rounded-xl w-full md:w-auto text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>Web</button>
                                </a>
                                <a href="https://github.com/FrankSmith685/PF-GamesStore" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 md:ml-5 mt-5 bg-transparent border-1px rounded-xl w-full md:w-auto text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>código</button>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-green-800  w-full h-auto md:flex md:flex-nowrap">
                            <div className="h-full md:w-1/2 w-full">
                                <img src={img1} alt="" className="w-full h-72"/>

                            </div>
                            <div className="py-5 px-5 h-full w-full">
                                <h1 className="text-2xl font-bold font-serif text-gray-300">Phones E-commerce</h1>
                                <p className="py-2 md:pr-3 text-gray-300 font-serif">
                                    El objetivo fue diseñar y desarrollar una App E-commerce de venta de celulares "New Phone" que incluía: búsqueda, filtros combinados, ordenamientos, logueo, creación de usuario, manejo de roles, borrado logico de usuarios y productos, notificaciones vía mail, uso de localStorage para una persistencia de datos, logueo con Google, preguntas y respuestas, reseñas de los productos, pagos online con stripe.    
                                </p>
                                <a href="https://new-phone.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 w-full md:w-auto mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>Web</button>
                                </a>
                                <a href="https://github.com/JoaquinAngelino/PF-Ecommerce-Front" target="_blank" rel="noopener noreferrer">
                                    <button className='px-5 w-full md:w-auto md:ml-5 mt-5 bg-transparent border-1px rounded-xl text-gray-300 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    )
}