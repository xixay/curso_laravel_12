import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso Laravel 12",
  description: "Documentación y clases del curso de Laravel 12",
  base: '/curso_laravel_12/',
  themeConfig: {
    logo: 'https://laravel.com/img/logomark.min.svg',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Evaluaciones', link: '/evaluaciones' },
      { text: 'Índice General', link: 'https://xixay.github.io/ayuda-memoria/' }
    ],

    sidebar: [
      {
        text: 'Contenido',
        items: [
          { text: 'Inicio', link: '/' },
          { text: 'Evaluaciones', link: '/evaluaciones' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/curso_laravel_12' }
    ]
  }
})
