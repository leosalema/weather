import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {getWeather} from '../../store/weather/service';
import {Container, Content, Title, TabsContainer, Header} from './styles';
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
      <Header>
        <Title>{values.name} - {values.state}</Title>
      </Header>
        <Content>
          <TabsContainer>
            {values.data.map ((item, key) => <Day key={key} data={item} />)}
          </TabsContainer>

        </Content>
      </Container>
    );
  }
};

export default Weather;
