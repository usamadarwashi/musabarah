import { IonButton } from "@ionic/react";

interface WidgetProps { }

const Widget: React.FC<WidgetProps> = () => {
  return (
    <div className="flex flex-col my-4 mx-4 w-32 h-32 border-collapse border-cyan-300 bg-white rounded-lg ">
    <div className="flex flex-col h-full">
      <span className="flex text-black justify-center mt-5 text-6xl">22</span>
      <IonButton  size="small" className="mt-auto" color="light">Tutors</IonButton>
    </div>
  </div>
  );
};

export default Widget;
