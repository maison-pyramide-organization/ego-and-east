import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Playlist',
  name: 'playlist',
  type: 'document',
  fields: [
    defineField({
      title: 'Id',
      name: 'id',
      type: 'number',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'string',
    }),
    defineField({
      title: 'Button Color',
      name: 'button_color',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'id',
      media: 'image',
    },
  },
})
