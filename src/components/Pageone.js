import React, {Component} from 'react'
import Header from "./Header"
import Body from "./Body"


class Pageone extends Component {
    constructor(){
        super()
    }



    render(){
        return(
        <div class = 'pageOne'>
     <Header/>
     <Body/>
     </div>
        )
    }

}

export default Pageone