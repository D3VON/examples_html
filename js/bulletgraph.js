/**
 * Created by devonmcb on 1/27/16.
 */
//-------------------------------------------------------
Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
    return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
};
//-------------------------------------------------------
Highcharts.setOptions({
    chart:{
        type:'bar',
        margin:[5,15,10,100],
    },
    credits:{enabled:false},
    exporting:{enabled:false},
    legend:{enabled:false},
    title:{text:''},
    xAxis:{
        tickLength:0,
        lineColor:'#999',
        lineWidth:1,
        labels:{style:{fontWeight:'bold'}}
    },
    yAxis:{
        min:0,
        minPadding:0,
        maxPadding:0,
        tickColor:'#ccc',
        tickWidth:1,
        tickLength:3,
        gridLineWidth:0,
        endOnTick:true,
        title:{text: ''},
        labels:{
            y:10,
            style:{
                fontSize:'8px'
            },
            formatter:function(){
                if (this.isLast){
                    return this.value + ' %';
                }
                else{
                    return this.value;
                }
            }
        }
    },
    tooltip:{
        enabled:true,
        backgroundColor:'rgba(255, 255, 255, .85)',
        borderWidth:0,
        shadow:true,
        style:{fontSize:'10px',padding:2},
        formatter:function() {
            return this.series.name + ": <strong>" + Highcharts.numberFormat(this.y,2) + "</strong>";
        }
    },
    plotOptions:{
        bar:{
            color:'#000',
            shadow:false,
            borderWidth:0,
        },
        scatter:{
            marker:{
                symbol:'line',
                lineWidth:3,
                radius:8,
                lineColor:'#000'
            }
        }
    }
});

//----------------This is where I can feed in data and control stuff---------------------------------------
var chart1 = new Highcharts.Chart({
    chart:{renderTo:'container1'},
    xAxis:{categories:['IBM']},
    yAxis:{
        min:44,
        max:88,
        tickInterval:10,
        labels:{y:10,style:{fontSize:'8px'}},
        plotBands:[{from:53,to:73,color: 'rgba(103,103,103,.35)'}//,
            //  {from:70,to:85,color: 'rgba(153,153,153,.35)'},
            //  {from:85,to:100,color: 'rgba(204,204,204,.35)'}
        ]
    },
    series:[//{},{}] //name:'Measure',pointWidth:10,data:[80]},
        {name:'Low',type: 'scatter',data:[44],},
        {name:'Current',type: 'scatter',data:[60],},
        {name:'High',type: 'scatter',data:[88],}]
});