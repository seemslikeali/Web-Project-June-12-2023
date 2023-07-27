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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="w-full min-h-screen flex h-screen !p-0">
          <div className="relative overflow-hidden bg-cover bg-no-repeat flex-1 bg-homePageCover bg-center shadow-innerLight dark:shadow-innerDark backdrop-blur-md ">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0, 0%, 11%,0.15)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                  <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    The best offer on the market <br /><span>for your business</span>
                  </h1>
                  <button type="button"
                    class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                    data-te-ripple-init data-te-ripple-color="light">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>







        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          {/* <Image src={lightBulb} alt="decorative lightbulb image" className="w-full h-auto" /> */}
        </div>
      </main>
    </>
  );
}
