import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';



const UseMentor = () => {
  const axiosPublic = UseAxiosPublic();

  const { data:courseMentor  = [], refetch, isLoading } = useQuery({
    queryKey: ['courseMentor'],
    queryFn: async () => {
      const res = await axiosPublic.get('/mentor');
      return res.data;
    },
  });

  return [courseMentor, refetch, isLoading];
};

export default UseMentor;
