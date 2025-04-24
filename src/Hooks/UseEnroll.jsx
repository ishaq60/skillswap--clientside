import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import useAuth from './UseAuth';


const UseEnroll = () => {
  const axiosPublic = UseAxiosPublic();
const {user}=useAuth()
  const { data: enrolecart = [], refetch, isLoading } = useQuery({
    queryKey: ['enrolecart',user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/enroll/${user?.email}`);
      return res.data;
    },
  });

  return [enrolecart, refetch, isLoading];
};

export default UseEnroll;
