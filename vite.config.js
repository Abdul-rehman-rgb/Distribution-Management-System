import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), flowbiteReact()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extend: {
            colors: {
                primary: '#151D48',
                secondary: '#EA7D00',
                muted: '#737791',
                background: '#F9FAFB',
                btnColor: '#333333',
                thirdColor: '#131330',
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
});
