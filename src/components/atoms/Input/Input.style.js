import styled from "styled-components";

const  StyledWrapper = styled.div`
.form-floating{
    position: relative;
    margin-bottom: 20px;
}
.form-control{
    width: 94%;
    padding: 10px;
    border: 1px solid black;
    outline: none;
    font-size: 16px;
    margin-right: 10px;
}

.form-control:focus{
    border-color: blue;
}

.form-floating label{
    position: absolute;
    left: 12px;
    top: 12px;
    transition: top 0.3s, font-size 0.3s, color 0.3s;
    pointer-events: none;
}

.form-floating.active label{
    top: -10px;
    font-size: 12px;
    color: blue;
    background-color: white;
    padding-right: 10px;
    padding-left: 10px;
}

input {
    background-color: transparent;
}
`

export { StyledWrapper }