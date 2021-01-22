import React from 'react';
import styled from 'styled-components/native';
import { DEFAULT_COLLOR_PALLET } from "../screens/ColorsPalette";

const InputArea = styled.View`
    width: ${props => props.width}%;
    height: 40px;
    background-color: ${DEFAULT_COLLOR_PALLET[3]};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${DEFAULT_COLLOR_PALLET[0]};
    margin-left: 10px;
`;

export default ({IconSvg, width, placeholder, value, onChangeText, onBlur, readOnly, maxLength}) => {
    return (
        <InputArea width={width}>
            <IconSvg width="22" height="22" fill={DEFAULT_COLLOR_PALLET[0]} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={DEFAULT_COLLOR_PALLET[0]}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                editable={readOnly}
                maxLength={maxLength}            
            />
        </InputArea>
    );
}