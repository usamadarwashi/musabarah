import { IonButton } from "@ionic/react";
import Widget from "./widget";

interface WidgetsProps { }
const tutors = [
    "أحمد",
    "إبراهيم",
    "أسامة",
    "أيمن",
    "باسم",
    "بكر",
    "بشير",
    "توفيق",
    "ثابت",
    "جابر",
    "جمال",
    "حسام",
    "حسن",

  ];
const students = [
        "سعيد",
        "سفيان",
        "شريف",
        "صالح",
        "صادق",
        "طارق",
        "عادل",
        "عاصم",
        "عبد الله",
        "عبد الرحمن",
        "علاء",
        "عماد",
        "فارس",
        "فؤاد",
        "فيصل",
        "كريم",
        "ماهر",
        "مروان"
]

const previewMembers = () => {
    
  
}

const Widgets: React.FC<WidgetsProps> = () => {

  return (
    <>
   <Widget name={"معلمين"} quantity={tutors.length} onClick={previewMembers}/>
   <Widget name={"طلاب"} quantity={students.length} onClick={previewMembers}/>
   </>
  );
};

export default Widgets;
