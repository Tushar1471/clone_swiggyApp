import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const OverLay = ({ open, setOpen }) => {
  const [signUp, setSignUp] = useState(false);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-16 top-0  -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        title="Close"
                        className="relative rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-slate-50 py-16 shadow-xl font-sans">
                    <div className="px-4 sm:px-6">
                      <div className="w-full h-full">
                        <div className="w-full h-36 flex justify-between items-center ">
                          <div className="w-3/6 h-28 flex flex-col justify-between">
                            <h1 className="text-4xl font-semibold ">
                              {signUp ? "Sign Up" : "Login"}
                            </h1>
                            <p className="text-sm">
                              or
                              <span
                                className="text-orange-600 cursor-pointer ml-2"
                                onClick={() => setSignUp(!signUp)}
                              >
                                {signUp
                                  ? "login to your account"
                                  : "create an account"}
                              </span>
                            </p>
                            <p>________</p>
                          </div>
                          <div className="w-2/6 h-32 ">
                            <img
                              className="w-full h-full"
                              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                              alt="Random"
                            />
                          </div>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className="w-full h-full my-4">
                            <input
                              className="w-full  h-16 indent-6 border outline-none"
                              type="text"
                              placeholder="Phone number"
                            />
                            {signUp && (
                              <>
                                <input
                                  className="w-full  h-16 indent-6 border outline-none"
                                  type="text"
                                  placeholder="Name"
                                />
                                <input
                                  className="w-full  h-16 indent-6 border outline-none"
                                  type="email"
                                  placeholder="Email"
                                />
                              </>
                            )}
                          </div>
                          {signUp && (
                            <p className="text-indigo-900 font-semibold">
                              Have a referral code?
                            </p>
                          )}
                          <button className="w-full h-12 bg-orange-600 my-4 text-white border-none shadow-lg rounded-md">
                            {signUp ? "CONTINUE" : "LOGIN"}
                          </button>
                        </form>
                        <p className="text-sm">
                          By{" "}
                          {signUp ? "creating an account" : "clicking on Login"}
                          , I accept the
                          <strong> Terms & Conditions & Privacy Policy</strong>
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OverLay;
