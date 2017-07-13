import React from 'react';
import YomiArea from './YomiArea';
import ToriArea from './ToriArea';

/*
  <Main
    fudaId={17}
    toriFudaCount={10}
  />
*/

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setYomiFudaId(this.props.fudaId);
  }

  componentWillReceiveProps(newProps) {
    console.log("new Props");
    console.log(newProps);
    console.log("new id", newProps.fudaId);
    this.setYomiFudaId(newProps.fudaId);
  }

  setYomiFudaId(fudaId) {
    this.setState({yomiFudaId: fudaId});
  }

  render() {
    console.log("rendering");
    console.log("this.props.fudaId", this.props.fudaId);
    if (!this.props.fudaId) {
      return <div>Loading</div>
    } else {
    return (
      <main>
        <YomiArea
          fudaId={this.state.yomiFudaId}
        />
        <ToriArea
          fudaIndex={this.props.fudaId - 1}
          toriFudaCount={this.props.toriFudaCount}
          onFudaSelect={this.props.onFudaSelect}
        />
      </main>
    );
    }
  }
}