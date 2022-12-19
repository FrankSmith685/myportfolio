
import {SiCss3, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSequelize, SiTypescript} from "react-icons/si"


export default function Sobremi(){
    return(
        <div id="sobremí" className='w-full   h-auto'>
            <div  className="bg-gray-900 w-full p-5 pt-28 h-full">
            <div className="md:flex md:flex-nowrap h-full">
                <div className="md:w-1/6 ">
                    
                </div>
                <div className="md:w-5/6 w-full  h-full">
                    <div className="text-start">
                        <span className="text-2xl md:text-4xl font-bold font-serif  text-gray-500">Sobre mí</span>
                    </div>
                    <div className="w-full py-5 px-3 flex items-center space-x-2">
                        <span className='text-lg text-gray-500 font-serif'>Curriculum Vitae</span>
                        {/* <button className='px-5 bg-transparent border-1px rounded-xl text-gray-500 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>English</button> */}
                        <a href="https://drive.google.com/file/d/1YcO6fVKTf-Y-UxFMZJ3BeVcdYFCRIJ60/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center">
                                <button className='px-5 bg-transparent border-1px rounded-xl text-gray-500 text-lg font-bold font-serif py-2 hover:bg-favorite_white'>Español</button>
                            </div>
                        </a>
                    </div>
                    <div className='p-x3 py-5 w-full'>
                        <p className="text-gray-500 text-lg">
                            Soy desarollador web con experiencia trabajando tanto en el frontend, como en el backend. con un enorme interés  a trabajar en grupo, desarrollar proyectos y aprender constantemente  de forma profesional y personal.                    
                            Trabajar en grupo soy muy organizado. Me gusta ayudar a mis compañeros, asi como apoyarme en ellos cuando lo necesito.
                            Busco un crecimiento constante ya sea en lo técnico, como lo social o intrapersonal. 
                            <br />
                            Estas son algunas de las tecnologías que he aprendido:
                        </p>
                        <div className="flex flex-col mt-5">
                            <div className="overflow-x-auto">
                                <div className="md:p-3  w-full inline-block align-middle">
                                    <div className="overflow-hidden border rounded-lg">
                                        <table className="min-w-full">

                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-yellow-400 text-3xl"><SiJavascript/></span>
                                                            <p>JavaScript</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                    <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-600 text-3xl"><SiSequelize/></span>
                                                            <p>Sequelize</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-300 text-3xl"><SiReact/></span>
                                                            <p>React</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-indigo-600 text-3xl"><SiRedux/></span>
                                                            <p>Redux</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-green-600 text-3xl"><SiNodedotjs/></span>
                                                            <p>Node.js</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                    <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-600 text-3xl"><SiPostgresql/></span>
                                                            <p>PostgreSQL</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-orange-500 text-3xl"><SiHtml5/></span>
                                                            <p>HTML</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                    <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-600 text-3xl"><SiCss3/></span>
                                                            <p>CSS</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-red-600 text-3xl"><SiGit/></span>
                                                            <p>Git</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-lg my-2">
                            Actualmente estoy aprendiendo estas Tecnologías:
                        </p>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="md:p-3 w-full inline-block align-middle">
                                    <div className="overflow-hidden border rounded-lg">
                                        <table className="min-w-full">

                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-600 text-3xl"><SiTypescript/></span>
                                                            <p>TypeScript</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                    <div className='flex items-center space-x-2'>
                                                            <span className="text-green-600 text-3xl"><SiMongodb/></span>
                                                            <p>MongoDB</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-3 md:px-6 py-4 border rounded-lg text-base md:text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-300 text-3xl"><SiReact/></span>
                                                            <p>React-Native</p>
                                                        </div>
                                                    </td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="p-3 w-full inline-block align-middle">
                                    <div className="overflow-hidden border rounded-lg">
                                        <table className="min-w-full">

                                            <tbody>
                                                <tr>
                                                    <td className="px-6 py-4 border rounded-lg text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-yellow-400 text-3xl"><SiJavascript/></span>
                                                            <p>JavaScript</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 border rounded-lg text-xl font-bold text-gray-500 ">
                                                    <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-600 text-3xl"><SiSequelize/></span>
                                                            <p>Sequelize</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="px-6 py-4 border rounded-lg text-xl font-bold text-gray-500 ">
                                                        <div className='flex items-center space-x-2'>
                                                            <span className="text-blue-300 text-3xl"><SiReact/></span>
                                                            <p>React</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                        
                        
                    
                </div>
                <div className="w-1/6 ">
                    
                </div>
            </div>
            </div>
        
        </div> 
    )
    
}