import React from "react"
import {Card} from "antd";
import {Router,Route,Link,browerHistory} from "react-router-dom";

export default class PCNewsBLock extends React.Component{
  constructor(){
    super();
    this.state={
      news:'',
    };
  };
  componentWillMount(){
    var myFetchOptions={
      method:"GET",
    };
    var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count;
    fetch(url,myFetchOptions).then(response=>{   return response.json();})
    .then(json=>this.setState({news:json}));

  };
  render(){

    const {news} =this.state;

    const newsList =news.length>0?news.map((newsItem,index)=>(
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
        {newsItem.title}
        </Link>
      </li>
    ))
    :'没有加载到任何新闻';

    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    )
  }
}