import { ReactNode } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";

type MessageProps = {
  variant: string;
  children: ReactNode;
};
const Message = ({ variant, children }: MessageProps) => {
  let msgColor = "text-green-400";
  let msgBgColor = "bg-green-50";
  let msgBgColorHover = "bg-green-100";
  switch (variant) {
    case "success":
      msgColor = "text-blue-400";
      msgBgColor = "bg-blue-50";
      msgBgColorHover = "bg-blue-100";
      break;
    case "error":
      msgColor = "text-red";
      msgBgColor = "bg-red-50";
      msgBgColorHover = "bg-red-100";
      break;
  }
  return (
    <div className="mx-auto max-w-2xl">
      <div className={`rounded-md ${msgBgColor} p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <CiCircleAlert
              className={`h-5 w-5 ${msgColor}`}
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${msgColor}`}>{children}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`inline-flex rounded-md ${msgBgColor} p-1.5 ${msgColor} hover:${msgBgColorHover} focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50`}
              >
                <span className="sr-only">Dismiss</span>
                <FaRegCircleXmark className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  variant: "info", //info, success,alert
};
export default Message;
