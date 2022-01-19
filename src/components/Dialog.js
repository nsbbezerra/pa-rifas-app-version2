import { Dialog, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import Button from "./Button";

export default function DialogApp({
  open,
  onClose,
  title,
  message,
  type = "info",
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full  sm:mx-0 sm:h-10 sm:w-10 ${
                      (type === "info" && "bg-blue-100") ||
                      (type === "error" && "bg-red-100") ||
                      (type === "warning" && "bg-orange-100") ||
                      (type === "success" && "bg-green-100")
                    }`}
                  >
                    {(type === "info" && (
                      <InformationCircleIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    )) ||
                      (type === "error" && (
                        <ExclamationIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      )) ||
                      (type === "warning" && (
                        <ExclamationIcon
                          className="h-6 w-6 text-orange-500"
                          aria-hidden="true"
                        />
                      )) ||
                      (type === "success" && (
                        <CheckIcon
                          className="h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      ))}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{message}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button
                  scheme={
                    (type === "info" && "blue") ||
                    (type === "warning" && "orange") ||
                    (type === "error" && "red") ||
                    (type === "success" && "green")
                  }
                  icon={<XIcon />}
                  onClick={onClose}
                >
                  FECHAR
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
