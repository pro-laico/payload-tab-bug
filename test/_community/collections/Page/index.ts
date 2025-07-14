import type { CollectionConfig } from 'payload'

export const PageCollection: CollectionConfig = {
  slug: 'page',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        {
          slug: 'text',
          fields: [
            {
              name: 'type',
              type: 'select',
              options: ['one', 'two'],
            },
            {
              name: 'first',
              type: 'text',
              admin: {
                condition: (_: any, siblingData: any) =>
                  (siblingData?.type && siblingData?.type === 'one') ?? false,
              },
            },
            {
              name: 'second',
              type: 'text',
              admin: {
                condition: (_: any, siblingData: any) =>
                  (siblingData?.type && siblingData?.type === 'two') ?? false,
              },
            },
            {
              type: 'tabs',
              tabs: [
                {
                  label: 'One',
                  admin: {
                    condition: (_: any, siblingData: any) =>
                      (siblingData?.type && siblingData?.type === 'one') ?? false,
                  },
                  fields: [
                    {
                      name: 'firstInTab',
                      type: 'text',
                    },
                  ],
                },
                {
                  label: 'Two',
                  admin: {
                    condition: (_: any, siblingData: any) =>
                      (siblingData?.type && siblingData?.type === 'two') ?? false,
                  },
                  fields: [
                    {
                      name: 'secondInTab',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
