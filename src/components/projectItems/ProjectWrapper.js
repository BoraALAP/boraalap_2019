import styled from 'styled-components';
import {Media} from '../../styles/Media'

export default styled.div`
    display: grid;
    width: 100vw;
    padding: 150px 10vw 5vw;
    box-sizing: border-box;

    @media ${Media.mobileL} {
        margin-left: 90px;
        padding: 130px 0 110px 0;
        width: calc(100vw - 110px);
    }
`

