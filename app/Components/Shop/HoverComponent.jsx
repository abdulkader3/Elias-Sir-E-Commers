import React from 'react';

const HoverComponent = () => {
  const shopPages = [
    'Banner With Sidebar',
    'Boxed Banner',
    'Full Width Banner',
    'Horizontal Filter',
    'Off Canvas Sidebar',
    'Infinite Ajax Scroll',
    'Right Sidebar',
    'Both Sidebar'
  ];

  const shopLayouts = [
    '3 Columns Mode',
    '4 Columns Mode',
    '5 Columns Mode',
    '6 Columns Mode',
    '7 Columns Mode',
    '8 Columns Mode',
    'List Mode',
    'List Mode With Sidebar'
  ];

  const productPages = [
    'Variable Product',
    'Featured & Sale',
    'Data In Accordion',
    'Data In Sections',
    'Image Swatch',
    'Extended Info',
    'Without Sidebar',
    '360° & Video'
  ];

  const productLayouts = [
    { name: 'Default', badge: 'HOT' },
    'Vertical Thumbs',
    'Grid Images',
    'Masonry',
    'Gallery',
    'Sticky Info',
    'Sticky Thumbs',
    'Sticky Both'
  ];

  const Badge = ({ type }) => {
    const colors = {
      HOT: 'bg-orange-500',
      NEW: 'bg-blue-500'
    };
    
    return (
      <span className={`${colors[type]} text-white text-xs font-bold px-2 py-1 rounded ml-2`}>
        {type}
      </span>
    );
  };

  const Section = ({ title, items }) => (
    <div className="flex-1">
      <h3 className="text-gray-900 font-semibold text-sm mb-4 pb-3 border-b border-gray-200">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-orange-500 transition-colors cursor-pointer"
            >
              {typeof item === 'string' ? item : item.name}
            </a>
            {item.badge && <Badge type={item.badge} />}
            {item === 'Horizontal Filter' && <Badge type="HOT" />}
            {item === 'Off Canvas Sidebar' && <Badge type="NEW" />}
            {item === '360° & Video' && <Badge type="NEW" />}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-screen max-w-6xl whitespace-nowrap">
      <div className="grid grid-cols-4 gap-8">
        <Section title="SHOP PAGES" items={shopPages} />
        <Section title="SHOP LAYOUTS" items={shopLayouts} />
        <Section title="PRODUCT PAGES" items={productPages} />
        <Section title="PRODUCT LAYOUTS" items={productLayouts} />
      </div>
    </div>
  );
};

export default HoverComponent;
