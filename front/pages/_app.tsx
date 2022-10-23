import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseLayout from '../components/BaseLayout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../assets/styles/all.scss';
import '../assets/styles/header.scss';

const app = ({Component, pageProps}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default app