// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    hooks: {
        'nitro:config'(config) {
            config.prerender!.routes = config.prerender!.routes!.filter(r => r !== '/200.html')
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxt/image', "nuxt-schema-org"],
    css: ['~/assets/css/main.css'],
    site: {
        url: process.env.WEBSITE,
        name: process.env.APP_NAME
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: "Noorani-mm",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: "og:description",
                    property: "og:description",
                    content: "This is Mohammad Mahdi Noorani personal website"
                },
                {
                    name: "keywords",
                    content: "Noorani-mm, Noorani, Mohammad Mahdi Noorani, software engineer, Mohammad Mahdi, Mohammad, Mahdi, نورانی, محمد مهدی نورانی, محمدمهدی نورانی"
                },
                {
                    name: "author",
                    content: "Mohammad Mahdi Noorani"
                },
                {
                    name: "theme-color",
                    content: "#ffa600"
                }
            ]
        },
        pageTransition: {
            name: "page", mode: "out-in"
        }
    },
    runtimeConfig: {
        public: {
            APP_NAME: process.env.APP_NAME,
            USER_NAME: process.env.USER_NAME,
            GITHUB: process.env.GITHUB,
            TELEGRAM: process.env.TELEGRAM,
            EMAIL: process.env.EMAIL
        }
    }
})