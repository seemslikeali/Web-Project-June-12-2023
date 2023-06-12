import { React, useRef } from 'react'
import { useScroll, motion, spring } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref}
        className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: spring }}

        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
                    target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-26'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details

                        position="Web Developer"
                        company="Vitalité 55+"
                        companyLink="https://en.vitalite55sk.ca/"
                        time="2020"
                        address="308 4e avenue nord - Bureau 213, S7K 2L7 Saskatoon"
                        work="I meticulously designed and developed a user-friendly website tailored specifically to the needs of the elderly, prioritizing accessibility, simplicity, and intuitive navigation to ensure a seamless online experience for them. "

                    />
                    <Details

                        position="Web Developer"
                        company="Shakeel's Restaurant"
                        time="2019"
                        address="3110 8 St E #7, Saskatoon, SK S7H 0W2"
                        work="Designed and developped their website from the ground up but they closed their doors."
                    />

                    <Details

                        position="Web Developper"
                        company="RSFS"
                        companyLink="https://rsfs.ca/"
                        time="2019"
                        address="220-308, 4e Avenue Nord Saskatoon (SK)"
                        work="From the ground up, I dedicated myself to building a website specifically catered to the needs of French speakers in the healthcare sector. By prioritizing accessibility, user-friendliness, and tailored content, I ensured a seamless online experience that empowered individuals to navigate and access vital health information effortlessly."

                    />

                    <Details

                        position="Web Developer"
                        company="Fédération des Francophones de Saskatoon"
                        companyLink="https://www.francosaskatoon.ca/"
                        time="2018"
                        address="308 4th Ave N, #211 Saskatoon, SK S7K 2L7, Canada"
                        work="I autonomously designed and developed a bespoke website for a French community and its leaders, prioritizing their specific requirements. The result was a professional, user-centric platform that facilitated seamless communication, collaboration, and empowerment."

                    />
                    <Details

                        position="Web Developer"
                        company="Kabab King Restaurant"
                        companyLink="https://www.kababking.ca/"
                        time="2015-present"
                        address="3110 8 St E #7, Saskatoon, SK S7H 0W2"
                        work="I have been actively involved in the ongoing design and development of Kabab King's website, continuously enhancing its features and aesthetics. By combining my design expertise with the unique requirements of the establishment, I created a visually appealing and user-friendly online platform that showcases the restaurant's offerings and provides a delightful experience for customers."

                    />

                </ul>

            </div>



        </div>
    )
}

export default Experience