import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
     <section>
        <div className="title">
          <h2>
            Our Tours
          </h2>
         <div className="underline"></div>
         {tours.map((tour)=>
         {
          return <Tour id={tour.id} {...tour} removeTour={removeTour}></Tour>
        }
         )}
        </div>
      </section>
    </section>
  );
};

export default Tours;
