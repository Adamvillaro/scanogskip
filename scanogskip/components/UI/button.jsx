export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
