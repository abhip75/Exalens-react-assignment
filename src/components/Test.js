

import React, { useState, useEffect } from 'react';
import Chart, {Series, ZoomAndPan, Legend, ScrollBar} from 'devextreme-react/chart';



const Test = () => {
  // const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://demo.questdb.io/select?q=SELECT+*+FROM+trips');
  //     const result = await response.json();
  //     setData(result);
  //     console.log(result);
  //   };
  //   fetchData();
  // }, []);

const [data, setData] = useState([]);

useEffect(() => {
  fetch("/db/trip.json")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, []);


  return (
    <div>
      <h1 style={{textAlign: "center"}}> Trip Data </h1>
      <Chart
         id="chart"
        palette="Harmony Light"
        dataSource={data}>
       <Series argumentField="arg" valueField="y1" />
       <ScrollBar visible={true} />
       <ZoomAndPan argumentAxis="both" />
       <Legend visible={false} />
       </Chart>
    </div>
  );
};

export default Test;