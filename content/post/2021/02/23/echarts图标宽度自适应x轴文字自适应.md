---
title: "Echarts图标宽度自适应x轴文字自适应"
date: 2021-02-23T10:29:09+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Echarts"]
---
## 柱状图为例

## html
```shell script
<div class="mainDiv">
    <div id="echartsDiv" style="height: 450px"></div>
</div>
```

## js

>xAxisData 为横坐标值
>fontsize 字体大小默认12px,这里设置成14可以保证label之间的间距
```shell script
 var xAxisData = ['Reconstructive Surgical Procedures', 'Connective Tissue', 'Extremities', 'Peripheral Nervous System', 'Epidemiologic Methods', 'Nervous System Physiological Phenomena', 'Diagnostic Techniques and Procedures', 'Musculoskeletal Physiological Phenomena', 'Mechanical Phenomena', 'Biophysical Phenomena', 'Public Health', 'Hand Deformities']
    var gridWidth = 1200;//默认宽度
    var fontsize = 14; 
    var wordNum = parseInt((gridWidth / xAxisData.length) / fontsize);//默认一行展示多少字符
    var maxLine = 0;//
    for (var i = 0; i < xAxisData.length; i++) {
        var flag = parseInt(xAxisData[i].length / wordNum) + 1;
        if (flag > maxLine) maxLine = flag;
    }
    var cityChart = document.getElementById('echartsDiv');
    //设置容器高宽
    var autoContainer = function () {
        cityChart.style.width = $(".mainDiv").width() + 'px';//获取div宽度，重新设置显示字符数
        gridWidth = $(".mainDiv").width();
        wordNum = parseInt((gridWidth / xAxisData.length) / fontsize);
    };
    var myCharB = echarts.init(document.getElementById('echartsDiv'));
    autoContainer();
    //获取echarts图表
    echartsFun()
    function echartsFun() {
        var option = {
            grid: {
                bottom: (maxLine + 1) * 14, //字体大小默认14px
            },
            /*//另一种方式暂时底部拖动滚动条
            dataZoom: [{
                show: true,
                endValue: 4//x轴少于10个数据，则显示全部，超过10个数据则显示前10个。
            }],*/
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            xAxis: {
                data: xAxisData,
                type: 'category',
                axisLabel: {
                    interval: 0,
                    formatter: function (value, index) {
                        var strs = value.split('');
                        var str = ''
                        for (var i = 0, s; s = strs[i++];) {
                            str += s;
                            if (!(i % wordNum)) str += '\n';
                        }
                        return str
                    }
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 30, 88, 80, 70, 13, 89, 56, 73, 14, 23],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        };
        myCharB.setOption(option);
        window.onresize = function () {//用于使chart自适应高度和宽度
            autoContainer();//重置容器高宽
            myCharB.resize();
        };
        /*图表底部滚动条 操作 重载
        myCharB.on('datazoom', function (params) {
            if (params.batch) {
                var start = params.batch[0].start;
                var end = params.batch[0].end;
            } else {
                var start = params.start;
                var end = params.end;
            }
            var cur_col_num = ((end - start) / 100) * xAxisData.length; //计算缩放后可以显示几个柱子
            wordNum = parseInt(Math.ceil((gridWidth / cur_col_num)) / 14);//重新计算wordNum
        });*/
    }
</script>
```

