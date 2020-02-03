import styled from 'styled-components/native';


export const TabItem = styled.View`
    width: ${props => props.width};
    height: ${props => props.height};
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-left: 20px;
    padding: 10px;
    justify-content: center;
    left: 0;
`;


export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;
`;

export const Container = styled.View`
    flex: 1;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex-direction: row; 
`

