class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.createBarChart();
    }
  }
  createBarChart() {
    
    d3.selectAll("svg")
      .remove();
    
    const node = this.node;
    const dataset = this.props.data;
    const balanceData = dataset.map(d => d.ob);
    const shadowBalData = dataset.map(d => d.shadowOb);
    const yearData = dataset.map(d => Func.round(d.year + (d.month - 1) / 12, 3));
    const max = d3.max(balanceData);

    const w = 820;
    const h = 400;
    const p = 60;
    const pl = Func.formatNum(max).length * 6.4;
    
    const svg = d3.select(node)
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    const tooltip = d3.select(".main")
      .append("div")
      .attr("id", "tooltip");

    const size = dataset.length;
    const barWidth = (w - p - pl) / size;
    
    const tooltipHtml = dataset.map(d => {
      return "<h3>" + Func.formatDate(d.month, d.year) + "</h3><div class=\"row\"><div>Opening balace: </div><div>" + Func.formatNum(d.ob) + "</div></div><div class=\"row\"><div>Interest added: </div><div>" + Func.formatNum(d.interest) + "</div></div><div class=\"row\"><div><em>Less</em> Paid: </div><div>(" + Func.formatNum(d.paid) + ")</div></div><div class=\"row\"><div>Closing balance: </div><div>" + Func.formatNum(d.cb) + "</div></div>"; 
    });
 
    const scaleX = d3.scaleLinear()
                   .range([pl, w - p])
                   .domain([d3.min(yearData), d3.max(yearData)]);
  
    const scaleY = d3.scaleLinear()
                 .range([h - p, p])
                 .domain([0, max]);
  
    const scaleBarHeight = d3.scaleLinear()
                 .range([0, h - 2 * p])
                 .domain([0, max]);
 
    svg.selectAll(".bar1")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => barWidth * i + pl)
      .attr("y", (d, i) => scaleY(d.shadowOb))
      .attr("width", barWidth)
      .attr("height", (d, i) => scaleBarHeight(d.shadowOb))
      .attr("class", "bar1")
      .attr("fill","#b8d0d4")
      .attr("opacity", 0.5);
    
    svg.selectAll(".bar2")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => barWidth * i + pl)
      .attr("y", (d, i) => scaleY(d.ob))
      .attr("width", barWidth)
      .attr("height", (d, i) => scaleBarHeight(d.ob))
      .attr("class", "bar2")
      .attr("fill","#003333")
      .on("mouseover", (d, i) => {
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        tooltip.html(tooltipHtml[i])
          .style("left", function() {
            let pos = d3.event.pageX;
            let offset = pos > 700 ? -270 : 30;
            return pos + offset + "px";
          })
          .style("top", (d3.event.pageY) - 30 + "px")
          .style("visibility", "visible");
      })
      .on("mouseout", (d, i) => {
        tooltip.transition()
          .duration(200)
          .style("visibility", "hidden");
      });
    
    const xAxis = d3.axisBottom(scaleX).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(scaleY);
    
    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + (h - p) + ")")
      .call(xAxis);
    
    svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate(" + pl + ", 0)")
      .call(yAxis);
  }

  render() {
    return (
      <div className='visHolder' ref={node => this.node = node}></div>
    );
  }
}

module.exports = BarChart;
