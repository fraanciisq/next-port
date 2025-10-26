// FOR THE CARD COMPONENT
import React from "react";

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow p-6 border border-gray-100 ${className ?? ""}`}>{children}</div>
);