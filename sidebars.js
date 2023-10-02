/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: { // Change this to a more appropriate name, e.g., "bryanSidebar"
    "Bryan's Blueprint": [
      'bryan/intro',
      'bryan/sleep',
      {
        type: 'category',
        label: 'Diet',
        items: [
          'bryan/diet-overview',
          {
            type: 'category',
            label: 'Food',
            items: [
              'reference/recipes/green-giant',
              'reference/recipes/super-veggie',
              'reference/recipes/nutty-pudding',
            ],
          },
          {
            type: 'category',
            label: 'Supplements',
            items: [
              'reference/supplements/overview',
              'reference/supplements/starter-items',
            ],
          },
        ],
      },
      'bryan/fitness',
      'bryan/measurements',
    ],
  },
  'Reference': [
    {
      type: 'category',
      label: 'Recipes',
      items: [
        'reference/recipes/overview',
        'reference/recipes/green-giant',
        'reference/recipes/super-veggie',
        'reference/recipes/nutty-pudding',
      ],
    },
    {
      type: 'category',
      label: 'Supplements',
      items: [
        'coming-soon',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
