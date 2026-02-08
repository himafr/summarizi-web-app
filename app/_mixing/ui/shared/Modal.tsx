/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import {  cloneElement, createContext, ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react";


const Overlay: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--backdrop-color)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        transition: 'all 0.5s',
      }}
    >
      {children}
    </div>
  );
};

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const Modal: React.FC<{ children: ReactNode }> &{
  Open: typeof Open;
  Window: typeof Window;
}= ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export const Open: React.FC<{
  children: ReactElement;
  opens: string;
}> = ({ children, opens }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Open must be used inside Modal');

  const { open } = context;

  return cloneElement(children, {
    onClick: () => open(opens),
  });
};

export const Window: React.FC<{
  name: string;
  children: ReactElement<{ onClose: () => void }>;
}> = ({ name, children }) => {
const ref = useRef<HTMLDivElement | null>(null);

  const context = useContext(ModalContext);
  if (!context) throw new Error('Window must be used inside Modal');

  const { openName, close } = context;

    useEffect(() => {
      function handleClick(e:MouseEvent) {
       if (ref.current && !ref.current.contains(e.target as Node)) {
      close();
    }
      }
  
      document.addEventListener("dblclick", handleClick, true);
  
      // Cleanup function to remove listener on unmount
      return () => {
        document.removeEventListener("dblclick", handleClick, true);
      };
    }, [close]);
  

  // const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
     <div
     ref={ref}
     className="bg-black10 shadow-lg py-[3.2rem] px-1.5 md:px-[4rem]"
  style={{position:'fixed',
    top:'1%',
    left:'50%',
    transform:'translate(-50%, -0%)',
    borderRadius:'var(--border-radius-lg)',
    transition:'all 0.5s',
    
  }}>
        <button  className='absolute right-4 top-4 cursor-pointer' onClick={close}>
          X
        </button>
        <div >{cloneElement(children, { onClose: close })}</div>
  </div>
    </Overlay>,
    document.body
  );
};
Modal.Open=Open;
Modal.Window=Window;

export default Modal
