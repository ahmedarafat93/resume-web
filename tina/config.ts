import { defineConfig } from 'tinacms'

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,
  clientId: process.env.VITE_TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values: { title?: string }) => {
              return (values?.title || 'untitled')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '')
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            ui: { component: 'textarea' },
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            description: 'e.g. "5 min read"',
            required: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'color',
            label: 'Accent Color',
            description: 'Hex code, e.g. #3b82f6',
            options: [
              { value: '#3b82f6', label: 'Blue' },
              { value: '#8b5cf6', label: 'Purple' },
              { value: '#06b6d4', label: 'Cyan' },
              { value: '#ec4899', label: 'Pink' },
              { value: '#10b981', label: 'Green' },
              { value: '#f59e0b', label: 'Amber' },
            ],
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
