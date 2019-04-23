const appReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_GRID':
      return workView => "grid"
    case 'CLEAR_ICON':
      return workView => undefined
    case 'SHOW_LIST':
      return workView => "list"
    case 'PREV_SLIDE': 
      let num
      state.slideNum === 0 ? num = state.projects.length - 1 : num = state.slideNum - 1
      return num
    case 'NEXT_SLIDE':
      let num2
      state.slideNum === state.projects.length - 1 ? num2 = 0 : num2 = state.slideNum + 1
      return num2
      
    case 'SAVE_PROJECTS':
      return {...state, project:[...action.Data.projects]}
    default: 
      return state
  }
}

export default appReducer