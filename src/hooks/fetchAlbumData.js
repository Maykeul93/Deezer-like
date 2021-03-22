import { useState, useEffect } from 'react';

import api from 'src/api';

const fetchAlbumData = (url) => {
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(url)
      .then((response) => response.data)
      .then((responseData) => {
        console.log(responseData);
        setAlbumData(responseData);
      })
      .catch((errors) => {
        console.error(errors);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    albumData,
    loading,
  };
};

export default fetchAlbumData;
