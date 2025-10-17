// Counter card component for displaying deity recitation counts

interface CounterCardProps {
  deityName: string;
  count: number;
  onClick?: () => void;
}

export default function CounterCard({ deityName, count, onClick }: CounterCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{deityName}</h3>
      <p className="text-5xl font-bold text-saffron mb-2">{count}</p>
      <p className="text-gray-600">times recited</p>
    </div>
  );
}