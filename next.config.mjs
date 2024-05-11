/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.minimize = false; // Disable minification
        }
        return config;
    }
};

export default nextConfig;
