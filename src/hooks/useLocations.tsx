import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';

const useLocations = () => {
  const location = useLocation();
  const [state, setState] = useState<QueryString.ParsedQs | undefined>(
    undefined
  );

  useEffect(() => {
    const obj: QueryString.ParsedQs = QueryString.parse(location.search);
    for (const key in obj) {
      const newKey = key.replaceAll('?', '');
      obj[newKey] = obj[key];
      delete obj[key];
    }
    setState(obj);
  }, [location]);
  return {
    location: state,
    path: location.pathname,
  };
};

export default useLocations;
