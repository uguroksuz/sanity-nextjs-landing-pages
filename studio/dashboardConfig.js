export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd6bbe5958bbb2abcb73d79',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d9179qqt',
                  apiId: '262cd4b3-c3f2-4f7f-8671-a4249e351096'
                },
                {
                  buildHookId: '5dd6bbe5816fbbf82209ed35',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hwezfg3z',
                  apiId: '871545dc-b444-4593-bfdf-b8b6287b8df8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uguroksuz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hwezfg3z.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
