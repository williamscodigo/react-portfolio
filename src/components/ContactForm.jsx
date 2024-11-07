import React, { useState, useEffect } from "react";
import consultationImage from "../assets/consultation.jpg";
import { IoIosSend } from "react-icons/io";


export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });


  function handleSubmit(e) {
    e.preventDefault();

    //simple data validation
    
    if (values.name.length === 0 || values.email.length === 0 || values.message.length === 0) return;

    console.log('Form submitted:', values);

  }


  function handleOnChange(e) {
    const key = e.target.name;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }));
  }

  return (
    <div className="p-2 md:p-4 rounded border border-slate-400/30 mx-auto max-w-3xl">
  <div className="mb-8 md:mb-12"><img src={consultationImage} alt="gentleman texting mobile" />
    </div>
    <div className="mb-4">
            <p className="tracking-wide leading-relaxed text-center">I&apos;m always thriving to improve my skills. Feedback is much appreciated.</p>
        </div>

      <div className="p-2 md:p-4 rounded border border-slate-900 max-w-xl mx-auto shadow-xl shadow-slate-500/50 mb-8">

        <form 
          name="contact-form" 
          id="contact-form" 
          className="max-w-xl mx-auto" 
          onSubmit={handleSubmit}
        >

          <fieldset>
            <legend className="text-lg font-semibold text-center tracking-wide uppercase mb-4 underline decoration-slate-900/10 underline-offset-8">
              Send A Message
            </legend>
            <p className="text-sm font-thin text-red-500 text-center mb-8">all fields required *</p>
        
            <div className="flex flex-col md:flex-row">
              <div className="mb-4 md:mr-8 md:w-1/2">
                <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 ml-1 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 invalid:text-pink-600 valid:border-green-500"
                      placeholder="Name"
                      onChange={handleOnChange}
                      required
                    />
              </div>
              <div className="mb-4 md:w-1/2">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500
              block mb-1 ml-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 invalid:text-pink-600 valid:border-green-500"
                  placeholder="Email"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
            <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-500
              block mb-1 ml-1 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 valid:border-green-500"
                onChange={handleOnChange}
                placeholder="Write your message here!..."
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                className="w-full px-4 py-4 border border-slate-700 bg-slate-900 text-white dark:bg-gray-100 dark:text-black hover:bg-blue-500 dark:hover:bg-blue-500 font-medium rounded-sm disabled:opacity-25 disabled:text-slate-900"
                type="submit"
              >
                <span className="inline-flex items-center">Send Message <IoIosSend className="ml-2" size={30} /></span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
