const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      link: {
        type: 'generated-index',
        description: 'This section introduces the concept of Tier0, providing an overview of the system.',
      },
      items: [
        'Introduction',
        'Getting Started/Homepage',
        'Basic Guides/UNS Data Integration/User Journey',
        'Getting Started/Access Control Overview',
      ],
    },
    {
      type: 'category',
      label: 'How-to Guide',
      link: {
        type: 'generated-index',
        description: 'This section provides guides on how to build data models, and use them in Tier0.',
      },
      items: [
        'Getting Started/Login',
        'Basic Guides/UNS Data Integration/Build Data Models',
        'Basic Guides/UNS Data Integration/Edit UNS Models',
        'Basic Guides/UNS Data Integration/Talk to UNS Models',
        'Basic Guides/UNS Data Integration/Connect Data via Flow',
        {
          type: 'category',
          label: 'Common Data Sources',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to connect to various common data sources.',
          },
          items: [
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting OPC UA',
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting OPC DA',
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting Modbus',
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting MQTT',
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting File',
            'Basic Guides/UNS Data Integration/Common Data Sources/Connecting RestAPI',
          ],
        },
        'Basic Guides/UNS Data Integration/Process Data',
        {
          type: 'category',
          label: 'Common Data Processing Methods',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on general data processing methods.',
          },
          items: [
            'Basic Guides/UNS Data Integration/Common Data Processing Methods/Combining Multiple Sources',
            'Basic Guides/UNS Data Integration/Common Data Processing Methods/Filtering Data',
            'Basic Guides/UNS Data Integration/Common Data Processing Methods/Changing Data',
            'Basic Guides/UNS Data Integration/Common Data Processing Methods/Spliting Data',
          ],
        },
        'Basic Guides/UNS Data Integration/Connect Data via MQTT',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guide',
      link: {
        type: 'generated-index',
      },
      items: [
        'Basic Guides/Database Management/Analyze Data',
        'Basic Guides/App/Build Applications',
        'Basic Guides/App/Anchor',
        'Basic Guides/App/Scene',
        'Basic Guides/System Management/Audit Log',
      ],
    },
    {
      type: 'category',
      label: 'System',
      link: {
        type: 'generated-index',
      },
      items: [
        'Basic Guides/System Management/Account Management',
        'Basic Guides/System Management/Workspace Management',
      ],
    },
    'Glossary',
  ],
};

export default sidebars;
