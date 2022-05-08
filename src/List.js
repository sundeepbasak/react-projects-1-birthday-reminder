import React from "react";

const List = ({ people }) => {
  return (
    <div className="mt-4">
        {people.map((element) => {
          const { id, name, age, image } = element;
          return (
            <article key={id} className="flex items-center space-x-4 my-3">
              <img className="rounded-full w-14 h-14" src={image} alt={name} />
              <div>
                <h4 className="font-semibold">{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default List;
