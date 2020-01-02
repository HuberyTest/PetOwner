import React from 'react';
import get from '../utils/RequestUtil';
import MyItem from './MyItem';
class PetOwner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            petData: {}
        }
        this.petsUrl = "http://5c92dbfae7b1a00014078e61.mockapi.io/owners";
    }

    componentDidMount() {
        get(this.petsUrl).then((result) => {
            if (result) {
                result.sort((m1, m2)=> m1.gender === m2.gender ? (m1.name > m2.name ? 1 : -1) : (m1.gender > m2.gender ? -1 : 1));
                for (let p of result) {
                    if (p.pets) {
                        p.pets = p.pets.sort((p1, p2) =>  p1.type === p2.type ? (p1.name > p2.name ? 1 : -1) : (p1.type > p2.type ? 1 : -1));
                    }
                }
                this.setState({petData: result});
            }
        });
    }

    printTypeObjArray(objArray, typeFld, nameFld) {
        let output = [];
        let preObj = null;
        output.push(<ul>);
        output.push(<li>Coffee</li>);
        output.push(<li>Milk</li>);
        output.push(</ul>);
    
        // for (let o of objArray) {
        //     if (preObj == null) {
        //         output.push(<ul><li>{o[typeFld]}</li>);
        //     } else if (preObj[typeFld] != o[typeFld]) {
        //         output.push(</ul><ul><li>{o[typeFld]}</li>);
        //     }
        //     output.push(<li>{o[nameFld]}</li>);
        // }
        return output;
    }

    render() {
        let people = this.printTypeObjArray(this.state.petData, "gender", "name");
        let output = [];
        let preObj = null;

        return (
            <div>
                <ul><MyItem /></ul>
            </div>
        ) 
        
    }
}

export default PetOwner;