export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-yellow-700 transition ${className || ""}`}
      >
        {children}
      </button>
    );
  }
  