//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function formatDate(date) {
    const isoDate = new Date(date).toISOString();
    return isoDate.slice(0, 10);
  }
  
  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'weekly', priority: '0.9' },
    //{ url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/contactus', changefreq: 'weekly', priority: '0.7' },
    // Add more URLs of your website's pages here
  ];


  function generateSiteMap(pages) {
    const today = new Date().toISOString().slice(0, 10);

    
  
    const sitemapEntries = pages
      .map(({ url, changefreq, priority }) => {
        return `
        <url>
          <loc>https://www.prairievistas.ca${url}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `;
      })
      .join('');
  
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapEntries}
      </urlset>
    `;
  }
  
  function SiteMap() {

  
    // getServerSideProps will do the heavy lifting
  }
  
  export async function getServerSideProps({ res }) {
    // We generate the XML sitemap with the pages data
    const sitemap = generateSiteMap(pages);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;
  