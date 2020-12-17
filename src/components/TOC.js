import React, {Component} from 'react'

class TOC extends Component {

    shouldComponentUpdate(newProps, newState){
      console.log('===TOC=== update', newProps.data, this.props.data);
      
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }

    render() {
      console.log("===TOC=== render()")
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}>
                       <a href={"/content/"+data[i].id}
                          onClick={function(id, e){
                            e.preventDefault();
                            console.log(id);
                            this.props.onChangePage(id);
                          }.bind(this, data[i].id)}
                       >{data[i].title}</a>
                       </li>)
            i = i + 1;
        }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }


export default TOC;