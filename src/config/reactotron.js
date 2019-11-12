import ReactoTron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = ReactoTron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}
