import { HomeIcon } from '@sanity/icons'
// import { getPriceRange } from '../../utils/getPriceRange'

const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    // Hero
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
      group: 'editorial'
    },
    // Modules
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'module.callout' },
        { type: 'module.callToAction' },
        { type: 'module.collection' },
        { type: 'module.image' },
        { type: 'module.instagram' },
        { type: 'module.product' }
      ],
      group: 'editorial'
    },
    /*
    // Gallery
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'galleryProduct',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: Rule => Rule.required()
            },
            {
              name: 'productWithVariant',
              title: 'Product + Variant',
              type: 'productWithVariant',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            }
          ],
          preview: {
            select: {
              defaultVariantTitle: 'productWithVariant.product.store.variants.0.store.title',
              image: 'image',
              isDeleted: 'productWithVariant.product.store.isDeleted',
              priceRange: 'productWithVariant.product.store.priceRange',
              status: 'productWithVariant.product.store.status',
              title: 'productWithVariant.product.store.title',
              variantTitle: 'productWithVariant.variant.store.title'
            },
            // TODO: DRY with `objects/productWithVariant`
            prepare(selection) {
              const {
                defaultVariantTitle,
                image,
                isDeleted,
                priceRange,
                status,
                title,
                variantTitle
              } = selection
              const productVariantTitle = variantTitle || defaultVariantTitle

              let previewTitle = [title]
              if (productVariantTitle) {
                previewTitle.push(`[${productVariantTitle}]`)
              }

              let subtitle = getPriceRange(priceRange)
              if (status !== 'active') {
                subtitle = '(Unavailable in Shopify)'
              }
              if (isDeleted) {
                subtitle = '(Deleted from Shopify)'
              }

              return {
                media: image,
                subtitle,
                title: previewTitle.join(' ')
              }
            }
          }
        }
      ]
    },
    */
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.singleton',
      group: 'seo'
    }
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE
      }
    }
  }
}
