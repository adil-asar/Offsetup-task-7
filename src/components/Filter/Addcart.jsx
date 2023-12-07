import React, { useState } from 'react';

const Addcart = () => {
  const data = [
    { id: 'item1', category: 'item1', text: 'Item 1' },
    { id: 'item2', category: 'item2', text: 'Item 2' },
    { id: 'item3', category: 'item3', text: 'Item 3' },
    // Add more items as needed
  ];

  const categories = Array.from(new Set(data.map(item => item.category))); 

  const [selectedTab, setSelectedTab] = useState(categories[0]);

  // Filter data based on the selected tab
  const filteredData = data.filter(item => item.category === selectedTab);

  return (
    <div>
      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedTab(category)}
            className={selectedTab === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {/* Render the filtered data */}
        {filteredData.map(item => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Addcart;
