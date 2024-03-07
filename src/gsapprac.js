import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function GsapPrac() {
  useEffect(() => {
    const firstCard = document.querySelector('.first-card');
    const secondCard = document.querySelector('.second-card');
    const thirdCard = document.querySelector('.third-card');

    const tl = gsap.timeline({ paused: true });

    // Store initial rotations in localStorage
    const firstCardRotation = localStorage.getItem('firstCardRotation') || -20;
    const secondCardRotation = localStorage.getItem('secondCardRotation') || 5;
    const thirdCardRotation = localStorage.getItem('thirdCardRotation') || 20;

    gsap.set(firstCard, { rotation: firstCardRotation });
    gsap.set(secondCard, { rotation: secondCardRotation });
    gsap.set(thirdCard, { rotation: thirdCardRotation });

    // Animation for hovering the first card
    firstCard.addEventListener('mouseenter', () => {
      tl.clear(); // Clear previous animations
      tl.to(firstCard, { rotation: 0, y: 0, duration: 0.6, ease: "power2.out" })
        .to([secondCard, thirdCard], { x: '+=20', duration: 0.6, ease: "power2.out" })
        .play();
    });

    // Animation for hovering the second card
    secondCard.addEventListener('mouseenter', () => {
      tl.clear(); // Clear previous animations
      tl.to(secondCard, { rotation: 0, y: 0, duration: 0.6, ease: "power2.out" })
        .to(firstCard, { x: '-20', duration: 0.6, ease: "power2.out" })
        .to(thirdCard, { x: '+20', duration: 0.6, ease: "power2.out" })
        .play();
    });

    // Animation for hovering the third card
    thirdCard.addEventListener('mouseenter', () => {
      tl.clear(); // Clear previous animations
      tl.to(thirdCard, { rotation: 0, y: 0, duration: 0.6, ease: "power2.out" })
        .to([firstCard, secondCard], { x: '-20', duration: 0.6, ease: "power2.out" })
        .play();
    });

    // Reverse animations instantly on mouse leave
    [firstCard, secondCard, thirdCard].forEach(card => {
      card.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });

  }, []);

  return (
    <div className="container">
      <div className="first-card">
        <h3>Verified NGOs</h3>
        <p>Find genuine NGOs</p>
        <button>View Listing</button>
        <img src="/images/faetured.jpg" alt="imgsource" />
      </div>

      <div className="second-card">
        <h3>Verified NGOs</h3>
        <p>Find genuine NGOs</p>
        <button>View Listing</button>
        <img src="/images/faetured.jpg" alt="imgsource" />
      </div>

      <div className="third-card">
        <h3>Verified NGOs</h3>
        <p>Find genuine NGOs</p>
        <button>View Listing</button>
        <img src="/images/faetured.jpg" alt="imgsource" />
      </div>
    </div>
  );
}

export default GsapPrac;
