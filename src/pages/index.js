import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from "../../public/images/profile/HomePagePicutureOfBothDevs.png";
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '../components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Design Agency Prairie Vistas | Home</title>
        <meta name="homepage" content="landing page for Web Design Agency Prairie Vista's website" />
        <meta name="title" content="Web Design Prairie Vistas | Homepage | Taking your online presence to new heights" />
        <meta name="description" content="Prairie Vistas: Transforming Your Digital Landscape with Good Website Design and Affordable Web Development. Custom and Responsive Web Design with A Young and Flexible Local Business with Over 9 Years of Experience." />
        <meta name="keywords" content="saskatchewan, saskatoon, website, Canadian, build website, french, francais, web, a good website design, affordable web design, agency web design, agency web development, best design for website, best web design, best website design, custom web design saskatoon, responsive design, web design agency, web designer near me, web development agency" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.prairievistas.ca" />
        <meta name="author" content="Prairie Vistas" />

        {/*Social media meta*/}
        <meta property="og:title" content="Web Design Agency Prairie Vistas | Custom Web Design in Saskatoon" />
        <meta property="og:description" content="Transform your digital landscape with Prairie Vistas, a web design agency offering affordable web development and custom web design in Saskatoon. Explore Ecommerce web design and responsive website design services." />
        <meta property="og:image" content="https://www.example.com/path/to/your-image.jpg" />
        <meta name="twitter:title" content="Web Design Agency Prairie Vistas | Custom Web Design in Saskatoon" />
        <meta name="twitter:description" content="Transform your digital landscape with Prairie Vistas, a web design agency offering affordable web development and custom web design in Saskatoon. Explore Ecommerce web design and responsive website design services." />
        <meta name="twitter:image" content="https://www.example.com/path/to/your-image.jpg" />


        {/*Schema markup*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Prairie Vistas",
              "url": "https://www.prairievistas.ca",
              "sameAs": [
                //"https://www.linkedin.com/company/prairievistas",
                //"https://twitter.com/prairievistas",
                //"https://www.instagram.com/prairievistas"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-306-850-1213",
                "contactType": "customer support"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "474 Kloppenburg St",
                "addressLocality": "Saskatoon",
                "postalCode": "S7W 0N8",
                "addressCountry": "CA"
              },
              "email": "info@prairievistas.ca",
              "description": "Prairie Vistas: Transforming Your Digital Landscape with Good Website Design and Affordable Web Development. Custom and Responsive Web Design with A Young and Flexible Local Business with Over 9 Years of Experience.",
              "logo": "https://www.prairievistas.ca/logo.png", // Replace with your logo URL
              "taxID": "Unavailable"
            })
          }}
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <video width="100%" height="auto" autoPlay loop muted playsInline>
                <source
                  src="/images/video/HomePageWheatAnimationSafariVersion.mp4"
                  type='video/mp4; codecs="hvc1"'/>
                <source
                  src={'/images/video/HomePageWheatAnimationChromeVersion.webm'}
                  type="video/webm"/>
              </video>


                  {/**<Image
                draggable="false"
                src={profilePic}
                alt="Decorative image of image representing 2 company co-creators"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />  **/}
                </div>

                <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                  <AnimatedText
                    text="Weaving your imagination into practical solutions."
                    className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                  />
                  <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                    At Prairie Vistas, we are dedicated to transforming ideas into innovative web applications. With a focus on delivering good website design, affordable web development, and responsive solutions, we create custom websites that leave a lasting impression. Let&apos;s work together to build your online presence!
                  </p>
                  <div className="flex items-center self-start mt-2 lg:self-center">
                    <Link
                      href={"/contactus"}
                      className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
            </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="decorative lightbulb image" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
