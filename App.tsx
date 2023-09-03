import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import BarChartDemo from './src/BarChartDemo';
import LineChartDemo from './src/LineChartDemo';
import StackedBarChartDemo from './src/StackedBarChartDemo';

const App = () => {
  return (
    <SafeAreaView>
      {/* <BarChartDemo /> */}
      {/* <LineChartDemo /> */}
      <StackedBarChartDemo />
    </SafeAreaView>
  );
};

export default App;