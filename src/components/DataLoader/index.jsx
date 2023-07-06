import { Component } from 'react';
import PropTypes from 'prop-types';

class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    
    this.setState({ isLoading: true });

    getData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { render } = this.props;
    const layout = render(this.state);
    return layout;
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
}

export default DataLoader;
