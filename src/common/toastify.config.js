import { toast } from "react-toastify";

const showToast = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    type: type,
    toastId: message,
  });
};

export { showToast };
