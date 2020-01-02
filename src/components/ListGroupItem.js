import React from 'react';

function ListGroupItem(props) {
    const {paramArray, level, objList} = props;
    const {groupProp, childProp, displayProp} = paramArray[level];

    const groups = [];
    const groupItems = [];
    let preGroup = ""; 
    let items = [];
    for (let item of objList) {
        if (item[groupProp] !== preGroup) {
            preGroup = item[groupProp];
            groups.push(preGroup);
            items = [item];
            groupItems.push(items)
        } else {
            items.push(item);
        }
    }

    return (
        <ul>
            {groups.map((g, idx) => <li key={g}>{g}
                <ul>
                    {groupItems[idx].map((i) => <li key={i[displayProp]}>{i[displayProp]} 
                    {
                        i[childProp] && i[childProp].length 
                        && <ListGroupItem objList={i[childProp]} level={level + 1} paramArray={paramArray}/>
                    }
                    </li>)}
                </ul>
            </li>)}
        </ul>
    )
}

export default ListGroupItem;