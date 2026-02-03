import React from 'react';
import Card from '../components/Card';

const Games = () => {
  const myFavoriteGames = [
    {
      id: 1,
      title: 'Stardew Valley',
      description: 'My go-to comfort game! There\'s something incredibly therapeutic about managing my little farm, befriending the villagers, and exploring the mines. I\'ve sunk hundreds of hours into multiple playthroughs.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Stardew+Valley',
      hoursPlayed: '250+ hours',
      platform: 'PC/Switch',
      favoriteAspect: 'Farming & Relationships'
    },
    {
      id: 2,
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'This game redefined open-world exploration for me. The sense of discovery is unmatched, and I love how the game respects the player\'s intelligence. The first time I parried a guardian laser was legendary!',
      imageUrl: 'https://via.placeholder.com/300x200?text=Zelda+BOTW',
      hoursPlayed: '180+ hours',
      platform: 'Nintendo Switch',
      favoriteAspect: 'Exploration & Physics'
    },
    {
      id: 3,
      title: 'Hades',
      description: 'Roguelikes were never really my thing until Hades. The perfect blend of tight combat, incredible storytelling, and that \'one more run\' feeling. The soundtrack still gives me chills!',
      imageUrl: 'https://via.placeholder.com/300x200?text=Hades',
      hoursPlayed: '120+ hours',
      platform: 'PC',
      favoriteAspect: 'Combat & Narrative'
    },
    {
      id: 4,
      title: 'Disco Elysium',
      description: 'A game that completely changed how I think about RPGs. The writing is absolutely phenomenal, and the way it handles failure as an integral part of the experience is brilliant. My first playthrough as a sorry cop was unforgettable.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Disco+Elysium',
      hoursPlayed: '60+ hours',
      platform: 'PC',
      favoriteAspect: 'Writing & Roleplaying'
    }
  ];

  return (
    <div className="page">
      <h1>My Gaming Journey</h1>
      <p className="page-intro">
        Gaming has been a huge part of my life since I was a kid. I love games that tell compelling stories 
        and create memorable experiences. Here are some of my all-time favorites that I keep coming back to.
      </p>
      <div className="card-container">
        {myFavoriteGames.map(game => (
          <div key={game.id} className="game-card">
            <Card
              title={game.title}
              description={
                <>
                  <p>{game.description}</p>
                  <div className="game-details">
                    <span className="game-hours">⏱️ {game.hoursPlayed}</span>
                    <span className="game-platform">🎮 {game.platform}</span>
                    <span className="game-aspect">❤️ {game.favoriteAspect}</span>
                  </div>
                </>
              }
              imageUrl={game.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
