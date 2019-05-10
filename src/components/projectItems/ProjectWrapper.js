import styled from 'styled-components';
import {Media} from '../../styles/Media'

export default styled.div`
    display: grid;
    width: 100vw;
    padding: ${props => props.padding ? '150px 10vw 5vw': ''};
    box-sizing: border-box;

    @media ${Media.mobileL} {
        margin: auto;
        padding: ${props => props.padding ? '200px 0 110px 0': ''};
        width: calc(70vw);
    }
`

