import styled from 'styled-components';
import {Media} from '../../styles/Media'

export default styled.div`
    min-height: 100vh;
    display: grid;
    width: 100vw;

    @media ${Media.mobileL} {
        margin-left: calc(50px + 2em);
        width: calc(100vw - 100px - 4.5em);
    }
`

