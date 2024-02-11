import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonButton, IonImg } from '@ionic/react';
import './Feed.css';

const Feed = () => {
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/projects/1').then((response) => response.json()).then((data) => {
      setProjectName(data.name);
    }).catch((error) => console.error('Error fetching prject data', error));
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen className="feed-container">
        <section className="top-btn-section">
          <IonButton className="btn btn1" fill="clear">
            <IonImg src="assets/img/top1.png" alt="" />
          </IonButton>
          <IonButton className="btn btn2" fill="clear">
            <IonImg src="assets/img/top2.png" alt="" />
          </IonButton>
          <IonButton className="btn btn3" fill="clear">
            <IonImg src="assets/img/top3.png" alt="" />
          </IonButton>
        </section>

        <section className="top-btn-section-2">
          <IonButton className="btn btn4" fill="clear">
            <IonImg src="assets/img/top4.png" alt="" />
          </IonButton>
          <IonButton className="btn btn5" fill="clear">
            <IonImg src="assets/img/top5.png" alt="" />
          </IonButton>
          <IonButton className="btn btn6" fill="clear">
            <IonImg src="assets/img/top6.png" alt="" />
          </IonButton>
        </section>

        <section className="menu">
          <IonButton className="btn post-big" fill="clear">
            <IonImg src="assets/img/post-big.png" alt="" />
          </IonButton>
          <div className="menu-btns">
            <IonButton className="btn" fill="clear">
              <IonImg src="assets/img/top1.png" alt="" />
            </IonButton>
            <IonButton className="btn" fill="clear">
              <IonImg src="assets/img/top1.png" alt="" />
            </IonButton>
            <IonButton className="btn" fill="clear">
              <IonImg src="assets/img/top1.png" alt="" />
            </IonButton>
          </div>
        </section>

        <section className="project">
          <h1>{projectName || 'Loading...'}</h1>
          <div className="big-btn">
            <IonButton className="btn project-big" fill="clear">
              <IonImg src="assets/img/project-big.png" alt="" />
            </IonButton>
            <IonButton className="btn mini1" fill="clear">
              <IonImg src="assets/img/mini1.png" alt="" />
            </IonButton>
            <IonButton className="btn mini2" fill="clear">
              <IonImg src="assets/img/mini2.png" alt="" />
            </IonButton>
            <IonButton className="btn mini3" fill="clear">
              <IonImg src="assets/img/mini3.png" alt="" />
            </IonButton>
            <IonButton className="btn mini4" fill="clear">
              <IonImg src="assets/img/mini4.png" alt="" />
            </IonButton>
            <IonButton className="btn mini5" fill="clear">
              <IonImg src="assets/img/mini5.png" alt="" />
            </IonButton>
            <IonButton className="btn sub1" fill="clear">
              <IonImg src="assets/img/sub1.png" alt="" />
            </IonButton>
            <IonButton className="btn sub2" fill="clear">
              <IonImg src="assets/img/sub2.png" alt="" />
            </IonButton>
          </div>
          <IonButton className="btn" fill="clear">
            <IonImg src="assets/img/subs.png" alt="" />
          </IonButton>
        </section>

        <section className="footer-btn">
          <IonButton fill="clear">
            <IonImg src="assets/img/footer.png" alt="" />
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
