const CancelBtn = ({ setIsOpen, children, className = "" }) => {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(false)}
      aria-label="Close modal"
      className={`w-full sm:w-auto flex-1 border border-[#EA7D00] rounded-[12px] py-2.5 text-white bg-white text-secondary hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default CancelBtn;
