import React from "react";

const App = () => {
  return (
    <div className="border-2 border-red-100 text-red-700">
      <button
        onClick={() => {
          electron.sayHello.sendHello("Hello");
        }}
      >
        say hello
      </button>
    </div>
  );
};

export default App;
