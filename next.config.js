// Assuming you are using Node.js and can use CommonJS syntax for 'path' module
const path = require('path')
// import path from 'path';

// /** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'creativate.centralcabs.in'
            }
        ]
    }
};

module.exports = nextConfig
