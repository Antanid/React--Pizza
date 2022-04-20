import React from 'react';


class Categories extends React.Component {

    state = {
        activeItem: 0,
    }

    onSelectItem = (index) => {
        this.setState({
            activeItem: index,
        })
    }

    render() {
        const { items, onCLickItem } = this.props;
        return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {
                        items.map((name, index) => (
                            < li
                                className={this.state.activeItem === index ? 'active' : ''}
                                onClick={() => this.onSelectItem(index)}
                                key={`${name}_${index}`}> {name}</li>
                        ))
                    }
                </ul>
            </div >
        );
    }
}


/* function Categories({ items, onCLickItem }) {
    return (

        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map((name, index) => (
                        < li onClick={() => onCLickItem(name)}  key={`${name}_${index}`}> {name}</li>
                    ))
                }
            </ul>
        </div >

    )
}
 */
export default Categories