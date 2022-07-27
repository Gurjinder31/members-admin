import React from 'react';

const MemberCard = ({
  id,
  name,
  age,
  activity,
  rating,
  filterData,
  setFilterData,
}) => {
  const deleteMember = (itemId) => {
    const itemList = filterData.filter((item) => item.id !== itemId);
    setFilterData(itemList);
  };
  console.log(activity);

  let starRating = Array(rating)
    .fill()
    .map((_, i) => <p>⭐</p>);

  return (
    <div className='flex flex-col border-2 rounded-md w-auto h-auto text-center p-2'>
      <div className='member-name '>Name: {name}</div>
      <div className='member-age'>Age: {age}</div>
      <div className='member-activity mt-4 h-24'>
        <h2>List of Activities:</h2>
        {activity.map((list) => (
          <div className='bg-green-700'>{list}</div>
        ))}
      </div>
      <div className='mt-6 flex space-x-1'>Rating: {starRating}</div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md mb-4 text-sm'
        type='button'
        onClick={() => deleteMember(id)}
      >
        Remove Member
      </button>
    </div>
  );
};

export default MemberCard;
