import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseCart = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: cart = [], refetch, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axiosPublic.get('/course');
      return res.data;
    },
  });

  return [cart, refetch, isLoading];
};

export default UseCart;
