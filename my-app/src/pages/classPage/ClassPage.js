import React from "react"
class ClassPage extends React.Component {

    render() {
        return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
        </div>;
    }
}
ClassPage.defaultProps = {name: "Эмка", age: 17};
export default ClassPage