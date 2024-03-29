import React, { memo, useState } from 'react'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
import moment from 'moment'
import { getToken } from '../../util/TokenAction'
const Optimization = memo((props) => {
    let optimize_date = []
    const [token, settoken] = useState(getToken())
    useAsyncEffect(async () => {
        chartInit();
    });
    const chartInit = (optimize_date) => {
        echarts.init(document.getElementById('Unit-optimization')).dispose();
        let mychart = echarts.init(document.getElementById('Unit-optimization'));
        let dateX = [
            moment(new Date()).subtract(7, 'hours').format("HH:mm"),
            moment(new Date()).subtract(6, 'hours').format("HH:mm"),
            moment(new Date()).subtract(5, 'hours').format("HH:mm"),
            moment(new Date()).subtract(4, 'hours').format("HH:mm"),
            moment(new Date()).subtract(3, 'hours').format("HH:mm"),
            moment(new Date()).subtract(2, 'hours').format("HH:mm"),
            moment(new Date()).subtract(1, 'hours').format("HH:mm"),
            // moment(new Date()).format("YYYY-MM-DD")
            moment(new Date()).format('HH:mm')
        ]
        let cDate0 = [726.39, 726.76, 727.84, 727.91, 728.81, 728.84, 728.85, 728.86]
        let cDate1 = [1, 723.76, 721.84, 722.91, 724.81, 726.84, 721.85, 721.86]
        let cDate2 = [726.39, 1, 721.84, 722.91, 724.81, 726.84, 721.85, 721.86]
        let nDate0 = [62.78, 63.03, 63.77, 65.27, 82.61, 84.35, 93.28, 97.31]
        let option 
        if (props.type === '叶轮产量') {
            option = {
                // title: {
                //     text: '2019年销售水量和主营业务收入对比',
                //     textStyle: {
                //         align: 'center',
                //         color: '#fff',
                //         fontSize: 20,
                //     },
                //     top: '3%',
                //     left: '10%',
                // },
                // backgroundColor: '#0f375f',
                // grid: {
                //     top: "25%",
                //     bottom: "10%"//也可设置left和right设置距离来控制图表的大小
                // },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '2%',
                    bottom: '0%',
                    containLabel: true
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['塔顶温度', '进料量'],
                    top: "0%",
                    textStyle: {
                        color: "#ffffff"
                    }
                },
                xAxis: {
                    data: dateX,
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                    axisTick: {
                        show: true //隐藏X轴刻度
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac" //X轴文字颜色
                        }
                    },
    
                },
                yAxis: [
                    {
                        type: "value",
                        name: "实际叶轮数量",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#FFFFFF'
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        },
    
                    },
                    {
                        type: "value",
                        name: "kw",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        position: "right",
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        }
                    },
                    {
                        type: "value",
                        gridIndex: 0,
                        min: 50,
                        max: 100,
                        splitNumber: 8,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                            }
                        }
                    }
                ],
                series: [
                    // {
                    //     name: "回流比",
                    //     type: "line",
                    //     yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    //     smooth: true, //平滑曲线显示
                    //     showAllSymbol: true, //显示所有图形。
                    //     symbol: "circle", //标记的图形为实心圆
                    //     symbolSize: 10, //标记的大小
                    //     itemStyle: {
                    //         //折线拐点标志的样式
                    //         color: "#058cff"
                    //     },
                    //     lineStyle: {
                    //         color: "#058cff"
                    //     },
                    //     areaStyle: {
                    //         color: "rgba(5,140,255, 0.2)"
                    //     },
                    //     data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                    // },
    
    
                    {
                        name: "产量",
                        type: "line",
                        // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: true, //平滑曲线显示
                        showAllSymbol: true, //显示所有图形。
                        symbol: "circle", //标记的图形为三角形
                        symbolSize: 10, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: "#058cff"
                        },
                        lineStyle: {
                            color: "#058cff"
                        },
                        areaStyle: {
                            color: "rgba(5,140,255, 0.2)"
                        },
                        data: cDate0
                    },
                    {
                        name: "能耗",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFE3"
                                },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                                ])
                            }
                        },
                        data: nDate0
                    },
                ]
            };
        } else if (props.type === '叶轮待完成量') {
            option = {
                // title: {
                //     text: '2019年销售水量和主营业务收入对比',
                //     textStyle: {
                //         align: 'center',
                //         color: '#fff',
                //         fontSize: 20,
                //     },
                //     top: '3%',
                //     left: '10%',
                // },
                // backgroundColor: '#0f375f',
                // grid: {
                //     top: "25%",
                //     bottom: "10%"//也可设置left和right设置距离来控制图表的大小
                // },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '2%',
                    bottom: '0%',
                    containLabel: true
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['塔顶温度', '进料量'],
                    top: "0%",
                    textStyle: {
                        color: "#ffffff"
                    }
                },
                xAxis: {
                    data: dateX,
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                    axisTick: {
                        show: true //隐藏X轴刻度
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac" //X轴文字颜色
                        }
                    },
    
                },
                yAxis: [
                    {
                        type: "value",
                        name: "实际叶轮数量",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#FFFFFF'
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        },
    
                    },
                    {
                        type: "value",
                        name: "kw",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        position: "right",
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        }
                    },
                    {
                        type: "value",
                        gridIndex: 0,
                        min: 50,
                        max: 100,
                        splitNumber: 8,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                            }
                        }
                    }
                ],
                series: [
                    // {
                    //     name: "回流比",
                    //     type: "line",
                    //     yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    //     smooth: true, //平滑曲线显示
                    //     showAllSymbol: true, //显示所有图形。
                    //     symbol: "circle", //标记的图形为实心圆
                    //     symbolSize: 10, //标记的大小
                    //     itemStyle: {
                    //         //折线拐点标志的样式
                    //         color: "#058cff"
                    //     },
                    //     lineStyle: {
                    //         color: "#058cff"
                    //     },
                    //     areaStyle: {
                    //         color: "rgba(5,140,255, 0.2)"
                    //     },
                    //     data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                    // },
    
    
                    {
                        name: "产量",
                        type: "line",
                        // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: true, //平滑曲线显示
                        showAllSymbol: true, //显示所有图形。
                        symbol: "circle", //标记的图形为三角形
                        symbolSize: 10, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: "#058cff"
                        },
                        lineStyle: {
                            color: "#058cff"
                        },
                        areaStyle: {
                            color: "rgba(5,140,255, 0.2)"
                        },
                        data: cDate1
                    },
                    {
                        name: "能耗",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFE3"
                                },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                                ])
                            }
                        },
                        data: nDate0
                    },
                ]
            };
        } else if (props.type === '剩余毛胚') {
            option = {
                // title: {
                //     text: '2019年销售水量和主营业务收入对比',
                //     textStyle: {
                //         align: 'center',
                //         color: '#fff',
                //         fontSize: 20,
                //     },
                //     top: '3%',
                //     left: '10%',
                // },
                // backgroundColor: '#0f375f',
                // grid: {
                //     top: "25%",
                //     bottom: "10%"//也可设置left和right设置距离来控制图表的大小
                // },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '2%',
                    bottom: '0%',
                    containLabel: true
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['塔顶温度', '进料量'],
                    top: "0%",
                    textStyle: {
                        color: "#ffffff"
                    }
                },
                xAxis: {
                    data: dateX,
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                    axisTick: {
                        show: true //隐藏X轴刻度
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac" //X轴文字颜色
                        }
                    },
    
                },
                yAxis: [
                    {
                        type: "value",
                        name: "实际叶轮数量",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#FFFFFF'
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        },
    
                    },
                    {
                        type: "value",
                        name: "kw",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        position: "right",
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        }
                    },
                    {
                        type: "value",
                        gridIndex: 0,
                        min: 50,
                        max: 100,
                        splitNumber: 8,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                            }
                        }
                    }
                ],
                series: [
                    // {
                    //     name: "回流比",
                    //     type: "line",
                    //     yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    //     smooth: true, //平滑曲线显示
                    //     showAllSymbol: true, //显示所有图形。
                    //     symbol: "circle", //标记的图形为实心圆
                    //     symbolSize: 10, //标记的大小
                    //     itemStyle: {
                    //         //折线拐点标志的样式
                    //         color: "#058cff"
                    //     },
                    //     lineStyle: {
                    //         color: "#058cff"
                    //     },
                    //     areaStyle: {
                    //         color: "rgba(5,140,255, 0.2)"
                    //     },
                    //     data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                    // },
    
    
                    {
                        name: "产量",
                        type: "line",
                        // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: true, //平滑曲线显示
                        showAllSymbol: true, //显示所有图形。
                        symbol: "circle", //标记的图形为三角形
                        symbolSize: 10, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: "#058cff"
                        },
                        lineStyle: {
                            color: "#058cff"
                        },
                        areaStyle: {
                            color: "rgba(5,140,255, 0.2)"
                        },
                        data: cDate2
                    },
                    {
                        name: "能耗",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFE3"
                                },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                                ])
                            }
                        },
                        data: nDate0
                    },
                ]
            };
        } 
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }

    return (
        <div id='Unit-optimization' style={{ width: '100%', height: '100%' }}></div>
    )
})

export default Optimization