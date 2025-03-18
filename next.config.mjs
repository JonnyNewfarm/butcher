// Use import instead of require
import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
    images: {
        domains: ['firebasestorage.googleapis.com', 'm.media-amazon.com']
    }
});

// Use export instead of module.exports
export default nextConfig;



