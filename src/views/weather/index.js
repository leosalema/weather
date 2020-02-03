import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {getWeather} from '../../store/weather/service';
import {Container, Title} from './styles';
import {Day} from './components/day';

const Weather = () => {
  const [values, setValues] = useState ();

  useEffect (async () => {
    setValues (await getWeather ());
  }, []);

  if (!values) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>{values.name} - {values.state}</Title>
        {values.data.map ((item, key) => <Day key={key} data={item} />)}
      </Container>
    );
  }
};

export default Weather;
