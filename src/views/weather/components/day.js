import React from 'react';
import {Title, Block, SubTitle} from './styles';

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

  return (
    <Block>
      <SubTitle>{date_br}</SubTitle>
      <Title>Temperatura: </Title>
      <SubTitle>min: {temperature.min}°</SubTitle>
      <SubTitle>max: {temperature.max}°</SubTitle>

      <Title>Sensação Térmica:</Title>
      <SubTitle>min: {thermal_sensation.min}°</SubTitle>
      <SubTitle>max: {thermal_sensation.max}°</SubTitle>

      <Title>Humidade:</Title>
      <SubTitle>min: {humidity.min}%</SubTitle>
      <SubTitle>max: {humidity.max}%</SubTitle>

      <Title>Chuva:</Title>
      <SubTitle>probabilidade: {rain.probability}%</SubTitle>

      <Title>Vento:</Title>
      <SubTitle>velocidade média: {wind.velocity_avg} km</SubTitle>

      <Title>Text: </Title>
      <SubTitle>{text_icon.text.pt}</SubTitle>

      <Title>Sol: </Title>
      <SubTitle>nascer: {sun.sunrise}</SubTitle>
      <SubTitle>por: {sun.sunset}</SubTitle>
    </Block>
  );
};
