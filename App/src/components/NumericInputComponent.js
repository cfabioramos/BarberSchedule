import React from 'react';
import styled from 'styled-components/native';
import { DEFAULT_COLLOR_PALLET } from "../screens/ColorsPalette";

const InputArea = styled.View`
    width: 100%;
    height: 40px;
    background-color: ${DEFAULT_COLLOR_PALLET[3]};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const NumericInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${DEFAULT_COLLOR_PALLET[0]};
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, onBlur, password, readOnly, maxLength}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill={DEFAULT_COLLOR_PALLET[0]} />
            <NumericInput
                keyboardType = 'numeric'
                placeholder={placeholder}
                placeholderTextColor={DEFAULT_COLLOR_PALLET[0]}
                value={value}
                onChangeText={value => {
                    onChangeText(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
                }}
                onBlur={onBlur}
                secureTextEntry={password}
                editable={readOnly}
                maxLength={maxLength}
            />
        </InputArea>
    );
}