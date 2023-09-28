import { useRouter } from "next/router";

const GoBackButton: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); 
  };

  return (
    <button
      onClick={handleGoBack}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
