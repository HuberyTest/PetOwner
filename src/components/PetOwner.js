import React from 'react';
import get from '../utils/RequestUtil';
import ListGroupItem from './ListGroupItem';
import config from '../config'

class PetOwner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            petData: []
        }
        this.petsUrl = config.listUrl;
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

    render() {
        const paramArray = [
            {groupProp: "gender", displayProp: "name", childProp: "pets"},
            {groupProp: "type", displayProp: "name"},
        ]
        return (
            <ListGroupItem objList={this.state.petData} level={0} paramArray={paramArray} />
        ) 
        
    }
}

export default PetOwner;