import React from "react";

const SearchStatus = ({ count }) => {
    const correctWordForm = () => {
        const titles = ['человек', 'человека', 'человек']
       const cases = [2, 0, 1, 1, 1, 2];   
       return titles[ (count % 100 >4 && count%100<20) 
         ? 2
         : cases[(count % 10 < 5) ? count % 10 : 5] ];   
   }
    return (
        <h2>
           {count
  ? <span className='bg-primary p-2 m-2'>{count} {correctWordForm()} тусанет с тобой сегодня</span>
  : <span className='bg-danger p-2 m-2'>С тобой никто не тусанет</span>}
        </h2>
    );
};

export default SearchStatus;
