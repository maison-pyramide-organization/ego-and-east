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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
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
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
    defineField({
      name: 'tiktok',
      title: 'Tiktok',
      type: 'url',
    }),
    defineField({
      name: 'ig',
      title: 'IG',
      type: 'url',
    }),
    defineField({
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle:'index',
      media: 'image',
    },
  },
})
