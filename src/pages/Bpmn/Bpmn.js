import React from 'react'
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
// import ReactBpmn from 'react-bpmn'
import LayoutWrapper from '../../components/layoutWrapper'

import './Bpmn.scss'

// const Bpmn = props => {
//   const { rolePath } = props

//   return (
//     <LayoutWrapper rolePath={rolePath} selectedKeys="7">
//       bpmn
//     </LayoutWrapper>
//   )
// }

class Bpmn extends React.Component {

  constructor(props) {
    super(props);

    this.state = { };

    this.containerRef = React.createRef();
  }

  componentDidMount() {

    const {
      url,
      diagramXML
    } = this.props;
    console.log('url = ', url);
    // console.log('diagramXML = ', diagramXML);

    const container = this.containerRef.current;

    this.bpmnViewer = new BpmnJS({ container });

    this.bpmnViewer.on('import.done', (event) => {
      const {
        error,
        warnings
      } = event;

      if (error) {
        return this.handleError(error);
      }

      this.bpmnViewer.get('canvas').zoom('fit-viewport');

      return this.handleShown(warnings);
    });

    if (url) {
      return this.fetchDiagram(url);
    }

    if (diagramXML) {
      return this.displayDiagram(diagramXML);
    }
  }

  componentWillUnmount() {
    this.bpmnViewer.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      props,
      state
    } = this;

    if (props.url !== prevProps.url) {
      return this.fetchDiagram(props.url);
    }

    const currentXML = props.diagramXML || state.diagramXML;

    const previousXML = prevProps.diagramXML || prevState.diagramXML;

    if (currentXML && currentXML !== previousXML) {
      return this.displayDiagram(currentXML);
    }
  }

  displayDiagram(diagramXML) {
    this.bpmnViewer.importXML(diagramXML);
  }

  fetchDiagram(url) {

    this.handleLoading();

    fetch(url)
      .then(response => response.text())
      .then(text => this.setState({ diagramXML: text }))
      .catch(err => this.handleError(err));
  }

  handleLoading() {
    const { onLoading } = this.props;

    if (onLoading) {
      onLoading();
    }
  }

  handleError(err) {
    const { onError } = this.props;

    if (onError) {
      onError(err);
    }
  }

  handleShown(warnings) {
    const { onShown } = this.props;

    if (onShown) {
      onShown(warnings);
    }
  }

  render() {
    const { rolePath } = this.props

    return (
      <LayoutWrapper rolePath={rolePath} selectedKeys="7">
        <div className="react-bpmn-diagram-container" ref={ this.containerRef }></div>
      </LayoutWrapper>
    );
  }
}

export default Bpmn
