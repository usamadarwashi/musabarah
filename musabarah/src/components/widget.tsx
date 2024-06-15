import { IonButton } from "@ionic/react";

interface WidgetProps { 
  name: string;
  quantity: number;
  onClick: () => void;
}

const Widget: React.FC<WidgetProps> = ({ name, quantity, onClick }) => {
  return (
    <div className="flex flex-col my-4 mx-4 w-32 h-32 border-collapse border-cyan-300 bg-white rounded-lg ">
    <div className="flex flex-col h-full">
      <span className="flex text-black justify-center mt-5 text-6xl">{quantity}</span>
      <IonButton  size="small" className="mt-auto font-bold" color="light"  onClick={onClick}>{name}</IonButton>
    </div>
  </div>
  );
};

export default Widget;
