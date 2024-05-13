/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.minimize = false; // Disable minification
        }
        return config;
    }
};

export default nextConfig;
