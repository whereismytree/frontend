import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from 'store';
import { Provider } from 'react-redux';
import { Router } from 'routes/Router';
import GlobalStyle from 'style/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from 'components/FallbackComponent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <Router />
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
