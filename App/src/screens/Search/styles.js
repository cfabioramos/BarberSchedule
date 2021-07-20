import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: violet;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #b641a9;
    height: 45px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;


export const DistanceButton = styled.TouchableOpacity`
            flex-direction: row;
            width: 85px;
            height:25px;
            background-color: #b641a9;
            align-items:center;
            justify-content:center;
            border-radius:20px;

`;
export const AvaliacaoButton = styled.TouchableOpacity`
            flex-direction: row;
            width: 85px;
            height:25px;
            background-color: #b641a9;
            align-items:center;
            justify-content:center;
            border-radius:20px;
            
`;
export const ButtonText = styled.Text`
    font-size: 12px;
    color: white;
  
`;

export const ButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px
    height :30px;
    padding : 30px;

`;

export const FiltroLabel = styled.Text`
        font-size:13px;
        color: white;
`;
export const NameArea = styled.View`
    background-color: #b641a9;
    height: 45px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
`;

export const NameInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;