import React, {useEffect, useState} from 'react';
import ReviewCard from '../components/Home/ReviewCard';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { cardList } from '../types/card/card';
import Con from '../assets/styles/Contents.module.scss';
import axios from 'axios';
import { fetchCards } from '../apis/cards';

const Home = (): React.ReactElement<{}, any> => {

  const { isLoading, error, data } = useQuery<cardList[], Error>(["cards"], () => fetchCards(10))

  return (
    <div>
      {data?.map((item:any, idx:number) => <ReviewCard card={item} key={idx} /> )}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["cards"], () => fetchCards(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}


