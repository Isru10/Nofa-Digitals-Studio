import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className='border border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl text-white'> Our Services </motion.h2>
        <div className=""> 
            {PROJECTS.map((project,index)=>(
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:-100}}
                            transition={{duration:1}}
                     className="w-full lg:w-1/4">
                        <img className="mb-6 rounded" width={150} height={150} src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div
                                                whileInView={{opacity:1,x:0}}
                                                initial={{opacity:0,x:100}}
                                                transition={{duration:1}}
                     className="w-full max-w-xl lg:w-3/4 text-slate-400">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span className="mr-2 rounded bg-neutral-900 px-2 text-purple-900 py-1 font-medium text-sm" key={index}> { tech}</span>
                        
                    ))}
                    </motion.div>
                    
                </div>
            ) )}
        </div>
        </div>

  )
}

export default Projects