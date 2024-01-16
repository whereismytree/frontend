import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from 'store';
import { Provider } from 'react-redux';
import { Router } from 'routes/Router';
import GlobalStyle from 'style/globalStyle';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
