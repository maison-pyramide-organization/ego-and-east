import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'string',
    }),
    defineField({
      title: 'Index',
      name: 'index',
      type: 'number',
    }),
    defineField({
      title: 'CTA',
      name: 'cta',
      type: 'string',
      options: {
        list: ['book a talent', 'become a talent', 'get in contact'],
      },
    }),
  ],
})
