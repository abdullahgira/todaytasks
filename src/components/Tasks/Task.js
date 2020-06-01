import React from "react"
import styled from "styled-components"

const StyledTask = styled.div`
    display: flex;
    align-items: center;

    color: #63492b;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    padding: 1rem 1.5rem;
    margin-bottom: 0.25rem;
    font-size: 16px;

    .checkbox-label {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        width: 18px;
        clear: both;
        margin-right: 0.75rem;

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        input:focus + .checkbox-custom {
            border: 2px solid black;
        }

        .checkbox-custom {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 18px;
            width: 18px;
            background-color: transparent;
            border-radius: 5px;
            transition: all 0.3s ease-out;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            border: 1px solid #63492b;

            &::after {
                position: absolute;
                content: "";
                left: 8px;
                top: 8px;
                height: 0px;
                width: 0px;
                border-radius: 5px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(0deg) scale(0);
                -ms-transform: rotate(0deg) scale(0);
                transform: rotate(0deg) scale(0);
                opacity: 1;
                transition: all 0.3s ease-out;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                -ms-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
            }

            &::before {
                position: absolute;
                content: "";
                left: 5px;
                top: 5px;
                width: 0px;
                height: 0px;
                border-radius: 5px;
                border: 2px solid #63492b;
                -webkit-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
            }
        }

        input:checked ~ .checkbox-custom {
            background-color: #63492b;
            border-radius: 1px;
            -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
            transform: rotate(0deg) scale(1);
            opacity: 1;
            border: 1px solid #63492b;
        }

        input:checked ~ .checkbox-custom {
            &::after {
                -webkit-transform: rotate(45deg) scale(1);
                -ms-transform: rotate(45deg) scale(1);
                transform: rotate(45deg) scale(1);
                opacity: 1;
                left: 4.5px;
                top: 1.5px;
                width: 6px;
                height: 10px;
                border: solid white;
                border-width: 0 1px 1px 0;
                background-color: transparent;
                border-radius: 0;
            }
            &::before {
                left: -1px;
                top: -1px;
                width: 18px;
                height: 18px;
                border-radius: 1px;
                -webkit-transform: scale(3);
                -ms-transform: scale(3);
                transform: scale(3);
                opacity: 0;
                z-index: 999;
                transition: all 0.3s ease-out;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                -ms-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
            }
        }
    }

    .checkbox-label .checkbox-custom.circular {
        border-radius: 50%;
    }

    .checkbox-label input:checked ~ .checkbox-custom.circular {
        border-radius: 50%;
    }
    .checkbox-label input:checked ~ .checkbox-custom.circular::after {
        border-width: 0 1px 1px 0;
    }
    .checkbox-label .checkbox-custom.circular::after {
        border-radius: 50%;
    }

    .checkbox-label .checkbox-custom.circular::before {
        border-radius: 50%;
    }

    .checkbox-label input:checked ~ .checkbox-custom.circular::before {
        border-radius: 50%;
    }
`

export default function Task(props) {
    return (
        <StyledTask>
            <label class="checkbox-label">
                <input type="checkbox" />
                <span class="checkbox-custom circular"></span>
            </label>
            {props.children}
        </StyledTask>
    )
}
