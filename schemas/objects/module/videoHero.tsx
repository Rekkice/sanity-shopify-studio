import {BlockElementIcon, ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.videoHero',
  title: 'Video hero',
  type: 'object',
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy',
    },
  ],
  fields: [
    defineField({
        title: "URL",
        name: "url",
        type: "string"
    })
    // Layout
    // defineField({
    //   name: 'layout',
    //   title: 'Layout direction',
    //   type: 'string',
    //   initialValue: 'left',
    //   options: {
    //     direction: 'horizontal',
    //     layout: 'radio',
    //     list: [
    //       {
    //         title: 'Content / Copy',
    //         value: 'left',
    //       },
    //       {
    //         title: 'Copy / Content',
    //         value: 'right',
    //       },
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
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
