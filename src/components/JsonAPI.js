import React, { Component } from 'react'

export default class JsonApi extends Component {
    constructor(){
        super();
        this.state={
            items : [],
            isLoaded:false,
                    
        }
        }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')
        .then(res=>res.json())
        .then(result=>{
            this.setState({
                isLoaded:true,
                items:result,
            })
        })

    }
    render() {
        const {items,isLoaded} = this.state;
        if(!isLoaded){
            return <div>Loading..</div>
        }
        else{
        return (
         <div style={{ display: "flex", flexWrap: "wrap", flexDirection: 'row' }}>
             {items.map(item=>{
                return <div key={item.id} style={{width: '250px', height: '250px'}} >
                    <h5>{item.id}</h5>
                    <p>{item.title}</p>
                    <img src={item.thumbnailUrl} alt="" />
                 </div>
             })}
         </div>
        )
        }
    }
}