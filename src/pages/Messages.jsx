import React from "react";
import MessageCard from "../components/MessageCard";

const Messages = () => {
  return (
    <div>
      <section className="bg-blue-50">
        <div className="container m-auto py-24 max-w-6xl">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <h1 className="text-3xl font-bold mb-4">Your Messages</h1>

            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;
