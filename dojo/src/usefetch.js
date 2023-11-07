import { useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("COULD NOT FETCH THE DATA FOR THAT RESOURCE");
          }
          return res.json(); //this passes the data into js obj.
        })
        .then((data) => {
          setisPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setisPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return{ data, isPending, error }

};

export default useFetch;
