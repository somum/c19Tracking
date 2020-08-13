import React from 'react';

import { Cards, Chart, CountryPicker } from "./Components";
import styles from './App.module.css'
import { fetchData } from './api/index'

import coronaLogo from './images/coronaLogo.png'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData(); // data fetch korlam
    this.setState({ data: fetchedData }) //state e add korlam data
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country }); //state e add korlam data

  }

  render() {

    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaLogo} alt="COVID-19" />
        <Cards data={data} /> {/* cards e data pathacchi */}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
