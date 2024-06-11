import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import '../tailwind.css';
import Widget from '../components/widget';
import { useState } from 'react';
const Home: React.FC = () => {
  

    const [widgets, setWidgets] = useState([<Widget key={0} />]);
  
    const addWidget = () => {
      setWidgets([...widgets, <Widget key={widgets.length} />]);
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <div className="p-4">
        <IonButton onClick={addWidget}>Add Widget</IonButton>
      </div>
      <div className="flex flex-row flex-wrap p-4 space-x-4">
        {widgets.map((widget, index) => (
          <div key={index}>{widget}</div>
        ))}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
