import {ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.imageHero',
  title: 'Image hero',
  type: 'object',
  icon: ImageIcon,
  fieldsets: [
    {
      name: 'cta',
      title: 'Call to action',
    },
  ],
  fields: [
    defineField({
        name: "title",
        type: "string"
    }),
    defineField({
        name: "subtitle",
        type: "string"
    }),
    defineField({
        name: "body",
        type: "body"
    }),
    defineField({
        name: "image",
        type: "image"
    }),
    defineField({
        name: "link",
        type: "linkInternal",
        fieldset: "cta"
    })
  ],
//   preview: {
//     select: {
//       title: 'title',
//     },
//     prepare(selection) {
//       const {title} = selection
//       return {
//         subtitle: 'Call to action',
//         title,
//         media: BlockElementIcon,
//       }
//     },
//   },
})
