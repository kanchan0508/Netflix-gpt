import React from "react";
import { faqData } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleFaq } from "../utils/FaqSlice";

const FaqSection = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((store) => store.faq.activeIndex);

  const handleToggleindex = (index) => {
    dispatch(toggleFaq(index));
  };

  return (
    <div className="bg-black text-white pl-20 p-5">
      <div className="w-2/3">
        <h2 className="font-bold text-3xl">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mt-4 text-xl cursor-pointer">
            <div
              className="flex justify-between items-center"
              onClick={() => handleToggleindex(index)}
            >
              <h3>{faq.question}</h3>
              <span className="">
                {" "}
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="p-4 bg-gray-900 text-gray-400">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
