import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import configureStore from 'redux-mock-store';
import { rootInitialState, TStoreState } from 'src/reducers';
import { Store } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ExtendedRenderOptions extends RenderOptions {
  initialState: Partial<TStoreState>;
  store?: Store<Partial<TStoreState>>;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const TestWrapper =
  (store: Store) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children?: React.ReactNode }) =>
    (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </Provider>
    );

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState,
    store = configureStore<Partial<TStoreState>>()(initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {
    initialState: rootInitialState,
  },
) =>
  rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions,
  });

export * from '@testing-library/react';
// override the built-in render with our own
export { renderWithRedux };
