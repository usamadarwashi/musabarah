import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import '../tailwind.css';
import Widget from '../components/widget';
import { useState } from 'react';
import Widgets from '../components/widgets';
import * as React from 'react';
import headerImage from '../headerImage.svg'
import { SearchNormal1 } from 'iconsax-react';
import Cards from '../components/Cards';
const Home: React.FC = () => {

  return (
<IonPage>
  <div className="flex flex-col pb-6 mx-auto w-full bg-emerald-800 max-w-full">
  <div className="flex justify-between  pt-8 pl-7 w-full bg-emerald-800">
      <header className="flex gap-0 bg-emerald-800">
        <SearchNormal1 size="32" color="#FFF" />
      </header>
      <img src={headerImage} alt="Header" className="w-72 h-72 z-20" />
    </div>
    <main className="flex flex-col pt-9 pl-7 mt-[-30px] text-2xl bg-white rounded-t-[32px] text-neutral-800">
      <h1 className="font-bold">Musabarah</h1>
      <p className="mt-2.5 text-sm font-medium text-neutral-700">Management made easy</p>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="flex gap-4 mt-5">
            <Cards/>
          </div>
        </div>
    </main>
  </div>
</IonPage>
  );
};

export default Home;
