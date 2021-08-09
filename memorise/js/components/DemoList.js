class DemoList extends React.Component {
   constructor(props){
      super(props);
      this.handleTest = this.handleTest.bind(this);
      this.handleHome = this.handleHome.bind(this);
      this.demoList = this.demoList.bind(this);
   }
   handleTest(event) {
     let record = this.demoList();
     this.props.onTest(event, record);
   }
   handleHome(event) {
     this.props.onHome(event);
   }
   demoList() {
     return {
        "title": "Example - European Capital Cities",
        "column1": "Country",
        "column2": "Capital",
        "items": [
          ["Albania", "Tirana"],
          ["Andorra", "Andorra la Vella"],
          ["Armenia", "Yerevan"],
          ["Austria", "Vienna"],
          ["Azerbaijan", "Baku"],
          ["Belarus", "Minsk"],
          ["Belgium", "Brussels"],
          ["Bosnia and Herzegovina", "Sarajevo"],
          ["Bulgaria", "Sofia"],
          ["Croatia", "Zagreb"],
          ["Cyprus", "Nicosia"],
          ["Czech Republic", "Prague"],
          ["Denmark", "Copenhagen"],
          ["Estonia", "Tallinn"],
          ["Finland", "Helsinki"],
          ["France", "Paris"],
          ["Georgia", "Tbilisi"],
          ["Germany", "Berlin"],
          ["Greece", "Athens"],
          ["Hungary", "Budapest"],
          ["Iceland", "Reykjavik"],
          ["Ireland", "Dublin"],
          ["Italy", "Rome"],
          ["Kazakhstan", "Astana"],
          ["Kosovo", "Pristina"],
          ["Latvia", "Riga"],
          ["Liechtenstein", "Vaduz"],
          ["Lithuania", "Vilnius"],
          ["Luxembourg", "Luxembourg"],
          ["Macedonia (FYROM)", "Skopje"],
          ["Malta", "Valletta"],
          ["Moldova", "Chisinau"],
          ["Monaco", "Monaco"],
          ["Montenegro", "Podgorica"],
          ["Netherlands", "Amsterdam"],
          ["Norway", "Oslo"],
          ["Poland", "Warsaw"],
          ["Portugal", "Lisbon"],
          ["Romania", "Bucharest"],
          ["Russia", "Moscow"],
          ["San Marino", "San Marino"],
          ["Serbia", "Belgrade"],
          ["Slovakia", "Bratislava"],
          ["Slovenia", "Ljubljana"],
          ["Spain", "Madrid"],
          ["Sweden", "Stockholm"],
          ["Switzerland", "Bern"],
          ["Turkey", "Ankara"],
          ["Ukraine", "Kiev"],
          ["United Kingdom", "London"],
          ["Vatican City", "Vatican City"]
        ]
      };
   }
   render() {
     let record = this.demoList();
     return (
        <div className="container">
          <List record={record}/>
          <button onClick={this.handleTest} className="test">Test me!</button>
          <button onClick={this.handleHome}>Home <i className="fa fa-home"></i></button>
        </div>
    );
   }
}

