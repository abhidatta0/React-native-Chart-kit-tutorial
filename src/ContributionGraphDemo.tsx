import {ContributionGraph} from 'react-native-chart-kit';
import {useWindowDimensions, Alert} from 'react-native';

const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];
const  ContributionGraphDemo = ()=>{
    const { width: screenWidth}  = useWindowDimensions();
   return <ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
  width={screenWidth}
  height={220}
  squareSize={20}
  gutterSize={2}
  onDayPress={({count, date})=> Alert.alert(`Count : ${count}`, `Date ${date}`)}
  chartConfig={{
    backgroundGradientFrom: "yellow",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "lightgreen",
    backgroundGradientToOpacity: 0.3,
    color: (opacity)=> `rgba(0,0,0,${opacity})` ,
    propsForLabels: {
        fill: 'green',
        fontWeight: 'bold',
    },
  }}
//   accessor='value'
  tooltipDataAttrs={(value)=> {
     console.log({value});
    return ({rx: 9, ry: 9})}
  }
/>
}

export default ContributionGraphDemo;