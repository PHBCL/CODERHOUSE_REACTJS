import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { BarLoader } from 'react-spinners'


const gf = new GiphyFetch('N755gb20XTqvcAtqmmt9D99jUahCdXoI');

const PageNotFound = () => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchGif = async () => {
      try {
        const { data } = await gf.search('not found', { limit: 50});
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setGif(data[randomIndex]);
        }
      } catch (error) {
        console.error('Error fetching GIF:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGif();
  }, []);

  if (loading) {
    return (
      <Flex direction={'column'} justify={'center'} align={'center'}> 
          <BarLoader color="#36d7b7" />
      </Flex>
    )
  }

  return (
    <Flex direction="column" justify="center" align="center">
      <Gif gif={gif} width={300} />
    </Flex>
  );
};

export default PageNotFound;