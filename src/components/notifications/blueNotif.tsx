import { useEffect, useState } from "react";

export const BlueNoti = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
    className={`fixed top-[68vh] lg:top-[64vh] left-1/2 transform ${
      visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"
    } w-[17.38em] h-[2.9em] flex items-center justify-center rounded-lg text-center transition-all duration-700`}
    style={{ transform: visible ? 'translateX(-50%)' : 'translateX(100%)' }}
  >
    <div className="bg-accent500 text-white25 w-full h-full rounded-lg flex items-center justify-center">
      <h1 className="text-p1-regular p-3">{message}</h1>
    </div>
  </div>

  );
};
