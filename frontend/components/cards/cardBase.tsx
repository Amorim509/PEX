interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

const CardBase: React.FC<CardBaseProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md overflow-hidden p-4 ${className}`}>
      {children}
    </div>
  );
};

export default CardBase;
