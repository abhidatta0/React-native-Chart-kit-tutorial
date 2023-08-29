import {View, Text, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit'
import {lineChartData} from './data';

const LineChartDemo = ()=>{
    const {width} = useWindowDimensions();
    return (
     <View>
         <Text>Line chart demo</Text>
         <LineChart
         data={lineChartData}
         yAxisLabel=''
         yAxisSuffix=''
         width={width}
         height={400}
         chartConfig={{
             backgroundGradientFrom:'yellow',
             backgroundGradientFromOpacity: 0.5,
             backgroundGradientTo:'lightgreen',
             backgroundGradientToOpacity: 1,
             color:()=> 'red',
             barPercentage: 0.6,
             propsForDots:{
                r:'6',
                strokeWidth: '3',
                stroke:'black'
             }
         }}
         style={{borderColor:'black', borderWidth:1}}
         withInnerLines={false}
         withShadow={false}
         getDotColor={()=> 'yellow'}
         hidePointsAtIndex={[3]}
         bezier
         // verticalLabelRotation={50}
         // horizontalLabelRotation={40}
         />
     </View>
    )
}

export default LineChartDemo