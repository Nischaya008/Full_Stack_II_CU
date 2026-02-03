import React from 'react';
import Card from '../components/Card';

const Home = () => {
  const personalInterests = [
    {
      id: 1,
      title: 'About Me',
      description: 'Hello! I\'m Nischaya, a passionate developer and tech enthusiast. I love exploring new technologies, building projects, and sharing my journey in the world of coding and digital creation.',
      imageUrl: 'https://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg'
    },
    {
      id: 2,
      title: 'My Hobbies',
      description: 'When I\'m not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with photography. I also enjoy playing guitar and learning about astronomy in my free time.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzRr3W6SAXddo41GYs6RaDXg4mDhjySJK-Q&s'
    },
    {
      id: 3,
      title: 'Current Obsession',
      description: 'Lately, I\'ve been diving deep into machine learning and AI. Building neural networks that can generate art has been particularly fascinating!',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYFBESTMzj5iTCauCnb4HYITXPRhAOVjV1g&s'
    }
  ];

  return (
    <div className="page">
      <h1>Welcome to My Personal Space</h1>
      <p className="intro-text">
        Thanks for stopping by! This is where I share my thoughts, interests, and projects. 
        Feel free to explore and get to know me better through the things I love.
      </p>
      <div className="card-container">
        {personalInterests.map(item => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
