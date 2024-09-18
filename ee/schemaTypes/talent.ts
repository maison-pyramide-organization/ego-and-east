import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Talent',
  name: 'talent',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['actor', 'creative', 'musician'],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
