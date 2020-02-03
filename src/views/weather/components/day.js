import React from 'react';
import {Dimensions} from 'react-native';
import {Container, Content, TabsContainer, TabItem, TabText} from './styles';

export const Day = props => {
  const {
    date_br,
    humidity,
    rain,
    wind,
    uv,
    thermal_sensation,
    text_icon,
    temperature,
    cloud_converage,
    sun,
  } = props.data;

  let screenWidth = Dimensions.get ('window').width;
  let screenHeight = Dimensions.get ('window').height;

  return (
    <Container>
      <TabItem width={screenWidth} height={screenHeight}>
        <TabText>{date_br}</TabText>
        <Content>
          <TabText>Temperatura:</TabText>
          <TabText>min: {temperature.min}°</TabText>
          <TabText>max: {temperature.max}°</TabText>

        </Content>
        <Content>
          <TabText>Sensação Térmica:</TabText>
          <TabText>min: {thermal_sensation.min}°</TabText>
          <TabText>max: {thermal_sensation.max}°</TabText>

        </Content>
        <Content>
          <TabText>Humidade:</TabText>
          <TabText>min: {humidity.min}%</TabText>
          <TabText>max: {humidity.max}%</TabText>
        </Content>
        <Content>
          <TabText>Chuva:</TabText>
          <TabText>probabilidade: {rain.probability}%</TabText>

        </Content>
        <Content>
          <TabText>Vento:</TabText>
          <TabText>velocidade média: {wind.velocity_avg} km</TabText>

        </Content>
        <Content>
          <TabText>Text: </TabText>
          <TabText>{text_icon.text.pt}</TabText>

        </Content>
        <Content>
          <TabText>Sol: </TabText>
          <TabText>nascer: {sun.sunrise}</TabText>
          <TabText>por: {sun.sunset}</TabText>
        </Content>
      </TabItem>
    </Container>
  );
};
