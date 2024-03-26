import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Slide',
  name: 'slide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'index',
    },
  },
})
