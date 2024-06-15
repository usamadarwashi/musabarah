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
import NavBar from '../components/NavBar';

const Home: React.FC = () => {

  return (
<IonPage>
      <div className="flex flex-col h-full w-full max-w-full">
        <div className="flex justify-between pt-8 pl-7 w-full bg-emerald-800">
          <header className="flex gap-0 bg-emerald-800">
            <SearchNormal1 size="32" color="#FFF" />
          </header>
          <img src={headerImage} alt="Header" className="w-72 h-72 z-20" />
        </div>
        <main className="flex flex-col flex-grow pt-9 px-7 mt-[-30px] text-2xl bg-white rounded-t-[32px] text-neutral-800">
          <h1 className="font-bold">Musabarah</h1>
          <p className="mt-2.5 text-sm font-medium text-neutral-700">Management made easy</p>
          <div className="flex flex-col grow shrink-0 items-center basis-0 w-full">
            <div className="flex gap-4 mt-5">
              <Cards />
            </div>
          </div>
        </main>
        <NavBar />
      </div>
    </IonPage>
  );
};

export default Home;
