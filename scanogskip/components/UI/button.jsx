export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-black text-white rounded-xl px-4 py-2 hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
