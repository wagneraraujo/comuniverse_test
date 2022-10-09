import { Component, HtmlHTMLAttributes, HTMLProps, ReactElement } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface CustomButtonProps {
    color?:string;
    bg?: any;
    text:string;
    icon?: ReactElement,
    borderColor?: string,

}

export const Button = ({ color, bg, text, icon,  borderColor}: CustomButtonProps) => {
    return (
        <CustomButton bg={bg} color={color} borderColor={borderColor}>{icon}{text}</CustomButton>
    )
}

export const CustomButton = styled.button(props => ({
    color: props.color,
    background:props.bg,
   
    
}),`
    border:none;
    cursor:pointer;
    box-sizing: border-box;

    border: none;
    border-radius: 6px;
    padding:9px 46px;
    text-align:center;

    svg{
        margin-right:10px;
    }

    transition:all 0.2s;

    &:hover{
        opacity:.9;
        transition:all 0.2s;
    }

    
`)

