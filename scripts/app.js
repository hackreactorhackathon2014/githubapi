$(function(){
  nv.addGraph(function() {
  var chart = nv.models.scatterChart()
                .showDistX(true)   
                .showDistY(true)
                .transitionDuration(350)
                .color(d3.scale.category10().range());

  chart.tooltipContent(function(key) {
      return '<h3>' + key + '</h3>';
  });

  //Axis settings
  chart.xAxis.axisLabel('PRICE RANGE').tickFormat(d3.format('.02f'));
  chart.yAxis.axisLabel('STARS').tickFormat(d3.format('.02f'));
  chart.scatter.onlyCircles(false);

  var myData = randomData(5,40);
  console.log(myData)
  d3.select('#chart svg')
      .datum(myData)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

function randomData(groups, points) { 
  var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'diamond', 'square'],
      random = d3.random.normal(5)
      groupsList = ['American', 'Italian', 'Japanese', 'Chinese', 'Mexican'];
  for (i = 0; i < groups; i++) {
    data.push({
      key: groupsList[i],
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
      , y: random()
      , size: Math.random()   
      , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle" 
      });
    }
  }

  return data;
}

})