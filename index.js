module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          pagination: {
            perPagePosts: 2,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'], // controls which keys in the frontmatter are parsed as tags
          path: '/tag/1/2/3/', // controls the path of the tag page for this classifier
          layout: 'Tag', // controls the layout of the tag page for this classifier
          frontmatter: { title: 'Tag' }, // appears in the frontmatter of the tags page
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },{
          id: "tag",
          keys: ['tag', 'tags'], // controls which keys in the frontmatter are parsed as tags
          path: '/tag/', // controls the path of the tag page for this classifier
          layout: 'Tag', // controls the layout of the tag page for this classifier
          frontmatter: { title: 'Tag page 2' }, // appears in the frontmatter of the tags page
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },
      ]
    }],
  ],
}
