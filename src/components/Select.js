import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoChevronDownSharp } from "react-icons/io5";

const Select = ({ label, options, selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative lex flex-col">
        <Listbox.Label className="block mb-1 text-gray-700">
          {label}
        </Listbox.Label>
        <Listbox.Button className="bg-white shadow py-2 px-3 rounded-lg focus:outline-none focus:ring-2">
          {selected} <IoChevronDownSharp size={18} className="inline ml-1" />
        </Listbox.Button>
        <Transition
          className="absolute top-full left-0 z-10 shadow-xl"
          enter="transition duration-100 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="max-w-max max-h-96 overflow-y-auto shadow-xl rounded overflow-hidden mt-1 focus:outline-none focus:ring-2">
            {options.map((value) => (
              <Listbox.Option key={value} value={value}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-blue-600 text-white" : "bg-white text-black"
                    } py-1 px-3`}
                  >
                    {value}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
