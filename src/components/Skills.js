import React from 'react'
import { motion } from "framer-motion"


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:!bg-transparent xs:dark:!bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )

}
const Skills = () => {
    return (

        <>
            <h2 className='font-bold text-8xl mb-10 mt-64 w-full text-center md:text-6xl md:mt-32 '>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            '>
                <motion.div className='flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light
                lg:p-6 md:p-4 xs:text-xs xs:p-2 
                '
                    whileHover={{ scale: 1.05 }}>web</motion.div>

                <Skill name="CSS" x="-13vw" y="0vw" />
                <Skill name="HTML" x="23vw" y="-12vw" />
                <Skill name="JavaScript" x="15vw" y="-20vw" />
                <Skill name="React" x="-25vw" y="16vw" />
                <Skill name="Python" x="-14vw" y="-20vw" />
                <Skill name="NodeJS" x="-22vw" y="-12vw" />
                <Skill name="Express" x="-25vw" y="-4.5vw" />
                <Skill name="C" x="-10vw" y="-8.5vw" />
                <Skill name="Mips" x="-24vw" y="5vw" />
                <Skill name="C++" x="-1vw" y="10vw" />
                <Skill name="C#" x="-14vw" y="12vw" />
                <Skill name="Java" x="-5vw" y="24vw" />
                <Skill name="BulmaCSS" x="10vw" y="20vw" />
                <Skill name="Bootstrap" x="19vw" y="12vw" />
                <Skill name="PostgreSQL" x="28vw" y="5vw" />
                <Skill name="Django" x="15vw" y="-5vw" />
                <Skill name="MySQL" x="7vw" y="-12vw" />
                <Skill name="DNNGO" x="31vw" y="-2vw" />
                <Skill name="Unity" x="0vw" y="-25vw" />
            </div>
        </>
    )
}

export default Skills