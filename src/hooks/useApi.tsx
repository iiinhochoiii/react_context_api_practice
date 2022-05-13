import { useState } from 'react';
import axios from 'utils/axios';

const useApi = <T,>(
  url: string
): {
  data: T[];
  loading: boolean;
  getList: () => void;
} => {
  const [data, setData] = useState<T[]>([]);

  const [loading, setLoading] = useState(false);

  const getList = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(url);

      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log('Error >>>', err);
    }
  };

  return { data, loading, getList };
};

export default useApi;
