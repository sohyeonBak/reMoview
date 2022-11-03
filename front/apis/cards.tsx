import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { backUrl } from '../config';

const fetchCards = async (limit = 10) => {
  const { data } = await axios('https://jsonplaceholder.typicode.com/photos')
  const result = data.filter((item:any) => item.id <= limit);
  return result
}

const cards = (limit: number) => {
  return useQuery(["cards", limit], () => fetchCards(limit));
};

export { fetchCards, cards }