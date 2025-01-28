import { useState } from "react";

export const useToast = () => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
    setToasts((prev) => [...prev, message]);
    setTimeout(() => removeToast(message), 3000); // Auto-remove after 3s
  };

  const removeToast = (message: string) => {
    setToasts((prev) => prev.filter((toast) => toast !== message));
  };

  return { toasts, addToast, removeToast };
};