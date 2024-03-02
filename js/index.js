//右一气温/降水图
(function(){
    var yearData = [
        {
          year: "2022", 
          data: [
            [-0.9,2.6,7.7,14.1,19.3,24.5,26.3,24.4,19.6,13.3,6,0.5],//温度
            [5.6,9.1,23,34.6,48.7,62.1,86.1,83,89.9,54.8,19.8,5.2]//降水
          ]
        },
      ];
      var myChart = echarts.init(document.querySelector('#Box2 .chart'));

      var option = {
        //两条线的颜色
        color: ["	#A115DB","#F9B1E0"],
        tooltip: {
          trigger: "axis",
          formatter: '{b}<br/>温度：{c0}(℃)<br/>降水：{c1}(mm)'
        },
        legend: {
          textStyle: {
            color: "#f29bfd"
          },
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
    
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"
          ],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "#f29bfd" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "#f29bfd" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a" // 分割线颜色
            }
          }
        },
        series: [
          {
            name: "温度",
            type: "line",
            symbol: 'point',
            symbolSize: 6,
            lineStyle: {
              color: '#a470C6',
              width: 3
            },
            smooth: true,
            data: yearData[0].data[0]
          },
          {
            name: "降水量",
            type: "line",
            smooth: true,
            data: yearData[0].data[1],
            areaStyle: {}
          }
        ]
      };
    
      myChart.setOption(option);

      window.addEventListener("resize", function() {
        myChart.resize();
      });
    })();

//右二土壤图
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector("#rightBox2 .chart"));
    // 2.指定配置
    var option = {
      color: ["#aa1", "#ac4", "#ada", "#af7"],
      title:{
        text: '土壤化学组成',
        left:'center',
        textStyle:{
          fontWeight:'bold',
          fontSize:18,
          color:'rgb(0,255,255)'
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
  
      legend: {
        bottom: "0%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "土壤化学组成",
          type: "pie",
          radius: ["30%", "60%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          data: [
            { value: 0.47, name: "速效钾" },
            { value: 0.26, name: "速效氮" },
            { value: 0.21, name: "速效磷" },
            { value: 0.1, name: "土壤有机质" }
          ]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();