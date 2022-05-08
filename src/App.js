import React, { useState } from "react";
import data from "./Data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="bg-blue-500 w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Birthday Reminder</h1>
      <section className="container mx-auto w-96 h-auto p-5 m-4 bg-white text-black rounded shadow-xl">
        <h2 className="font-semibold font-mono">
          {people.length} birthdays today
        </h2>
        <List people={people} />
        <button
          type="button"
          className="w-full bg-yellow-400 p-2 rounded mt-4 font-medium hover:bg-amber-500"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
      <footer className="mt-4">
        Made with ❤️ by
        <a
          href="https://www.linkedin.com/in/sundeepbasak/"
          target="_blank"
          rel="noreferrer"
          className="text-red-600 italic font-bold underline"
        >
          {" "}
          Sundeep Basak
        </a>
      </footer>
    </div>
  );
}

export default App;
