import SitemapGenerator from "sitemap-generator";
// Create a generator instance
const generator = SitemapGenerator('https://lacasadebarbernitra.sk/', {
    stripQuerystring: true, // Remove query strings from URLs
    filepath: './public/sitemap.xml', // Output path
    maxDepth: 0, // 0 means no limit to crawling depth
});

// Log errors
generator.on('error', (error) => {
    console.error('Error generating sitemap:', error);
});

// Start the crawler
generator.start();