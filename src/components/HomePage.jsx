import { useEffect, useState } from 'react';

const HomePage = () => {
  const [heroImg, setHeroImg] = useState('');

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/photos/2014422',
          {
            headers: {
              Authorization:
                'jtmqbIQwHaJsZRkbUNJZlZPVDrxWZojEYodXKeNMOIBmBZphbdfhkMx0', // Replace with your Pexels API key
            },
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Use .json() method
        setHeroImg(data.src.original);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHeroImage(); // Call the function to fetch the data
  }, []); // Empty dependency array to ensure effect runs only once on mount

  return (
    <div className="homePage">
      {heroImg ? <img src={heroImg} alt="Hero" /> : <p>Loading...</p>}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi illum
        quia adipisci numquam aperiam fuga eaque iste blanditiis natus, nemo
        deserunt fugit! Alias commodi, beatae dolore necessitatibus est vero
        laborum optio reiciendis perferendis asperiores? Dolores minus modi
        molestiae, odit tempora, saepe laudantium, quaerat aspernatur commodi
        similique suscipit nostrum ipsam velit nobis laboriosam quasi veniam
        excepturi!
      </p>
    </div>
  );
};

export default HomePage;
