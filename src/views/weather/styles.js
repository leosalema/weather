import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #34495E;
`

export const Header = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Content = styled.View`
    flex-direction: row;
    flex: 8;
`

export const Title = styled.Text`
    color: #F39C12;
    font-weight: bold;
    font-size: 26;
    text-align: center;
`

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicators: false,
    pagingEnabled: true,
    scrollEventThrotle: 16,
  })``;
  