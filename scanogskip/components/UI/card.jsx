// components/ui/card.jsx
export function Card({ children, className = "" }) {
    return (
      <div className={`rounded-xl border bg-white p-6 shadow-md ${className}`}>
        {children}
      </div>
    );
  }
  