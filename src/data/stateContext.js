import React from 'react'

const stateContext = React.createContext({
    slideNum: 0,
    project: [],
    workView: undefined
});

export default stateContext
