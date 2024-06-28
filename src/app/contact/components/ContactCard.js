import { CONTACTLIST } from "@/app/commons/constants/ContactList";
import Link from "next/link";
import React from "react";

function ContactCard() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg">Find me on</h1>
      <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center">
        {CONTACTLIST.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            target="_blank"
            className="w-full lg:w-auto"
          >
            <div
              className={`flex flex-col justify-between p-6 rounded-lg shadow-lg ${item.color}`}
              style={{ minWidth: '250px' }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-white text-xl font-semibold">{item.title}</h2>
                <div className="flex-shrink-0 text-white">{item.logo}</div>
              </div>
              <p className="text-white mt-2">{item.description}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-neutral-600 hover:bg-neutral-700 text-neutral-200 rounded-lg py-2 px-4"
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;
