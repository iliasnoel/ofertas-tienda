
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    //output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true, // ⚠️ Solo para desarrollo - no recomendado para producción
    },
};

export default nextConfig;
