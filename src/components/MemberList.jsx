import React, { useEffect, useState } from 'react';

import MemberCard from './MemberCard';

const MemberList = () => {
  const member = [
    {
      id: 1,
      name: 'John Wick',
      age: '30',
      rating: 5,
      activityList: ['Hiking', 'Cycling', 'Tennis'],
    },
    {
      id: 2,
      name: 'Tom Harry',
      age: '40',
      rating: 3,
      activityList: ['Hiking', 'Swimming', 'Swimming', 'check'],
    },
    {
      id: 3,
      name: 'Cristiano Ronaldo',
      age: '35',
      rating: 4,
      activityList: ['Hiking', 'Kayaking', 'Soccer'],
    },
  ];

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setData(member);
    setFilterData(member);
  }, []);

  const handleInputChange = (event) => {
    const filter = event.target.value;
    const filterDataa = data.filter((element) => {
      return element.name.toLowerCase().includes(filter.toLowerCase());
    });
    setFilterData(filterDataa);
  };

  const handleOptionChange = (event) => {
    const filter = event.target.value;
    const filterDataa = data.filter((element) => {
      return Object.values(element.activityList).includes(filter);
    });
    setFilterData(filterDataa);
  };

  let memberName = <div></div>;
  let memberCount = <div></div>;
  for (let list of data) {
    if (list.name) {
      memberName = <div>{list.name}</div>;
    }
    memberCount = <div>Object.keys(list.activityList).length</div>;
  }

  return (
    <div className='flex flex-col justify-center space-x-4  items-center mt-8 '>
      <input
        className='outline-double rounded-md'
        onChange={handleInputChange}
        type='text'
        placeholder='search member...'
      />
      <select className='my-4' onChange={handleOptionChange}>
        <option value=''>Search by Activity</option>
        <option value='Hiking'>Hiking</option>
        <option value='Cycling'>Cycling</option>
        <option value='Tennis'>Tennis</option>
        <option value='Kayaking'>Kayaking</option>
        <option value='Soccer'>Soccer</option>
        <option value='Swimming'>Swimming</option>
      </select>

      <div className='flex flex-row mt-4 space-x-8'>
        {filterData.map((list, i) => (
          <div>
            <MemberCard
              id={list.id}
              name={list.name}
              age={list.age}
              activity={list.activityList}
              rating={list.rating}
              setFilterData={setFilterData}
              filterData={filterData}
            />
            <div className='flex'>
              <div>Activities count:</div>
              <p>{list.activityList.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
