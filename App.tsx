import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import BarChartDemo from './src/BarChartDemo';
import LineChartDemo from './src/LineChartDemo';

const App = () => {
  return (
    <SafeAreaView>
      {/* <BarChartDemo /> */}
      <LineChartDemo />
    </SafeAreaView>
  );
};

export default App;