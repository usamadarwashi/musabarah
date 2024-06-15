import gg from "../gg.svg"
import jj from "../jj.svg"
import kk from "../kk.svg"
import hh from "../hh.svg"
import { BookSquare, Game, More, Profile2User, UserSquare } from "iconsax-react";

interface CardProps { 
  image: any;
  name: any;
  icon: any;
}

const Card: React.FC<CardProps> = ({image, name, icon}) => {
  return (
    <>
      <div className="relative inline-block">
      <img src={image} alt="bg"/>
      <More size="28" color="#FFF" className="absolute top-2 right-2 cursor-pointer" />
      {icon}
      <h2 className="absolute bottom-2 left-2 text-white">{name}</h2>
    </div>
    </>

  )
}

const Cards: React.FC = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-6 mb-4">
      <Card image={gg} name="Tutors" 
        icon={<UserSquare size="32" color="#FFFF" className="absolute top-2 left-2 cursor-pointer"/>}/>
      <Card image={jj} name="Students" 
        icon={<Profile2User size="32" color="#FFFF" className="absolute top-2 left-2 cursor-pointer"/>}/>
      <Card image={hh} name="Tasmee3" 
        icon={<BookSquare size="32" color="#FFFF" className="absolute top-2 left-2 cursor-pointer"/>}/>
      <Card image={kk} name="Games" 
        icon={<Game size="32" color="#FFFF" className="absolute top-2 left-2 cursor-pointer"/>}/>
    </div>
    </>
  );
};

export default Cards;
