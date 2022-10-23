import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { backUrl } from '../config';

const fetchCards = async (limit = 10) => {
  const { data } = await axios(`${backUrl}/posts?limit=${limit || 0}`)
  const result = data.filter((item:any) => item.id <= limit);
  return result
}

const cards = (limit: number) => {
  return useQuery(["cards", limit], () => fetchCards(limit));
};

export default cards;