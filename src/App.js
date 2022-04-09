import React from "react";
import Header from "./components/header";
import Filters from "./components/filters";
import Table from "./components/table";
import "./App.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return (
            <div className="og-contianer">
                    <Header text="Users List"/>
                    <Filters />
                    <Table />
             </div>
        )
    }
}

export default App;