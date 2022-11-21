import 'antd/dist/antd.css';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import rootReducer from '../src/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
