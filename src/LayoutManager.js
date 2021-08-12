import { useCustomNamedState as useStateObject } from '@Hooks'
// Layout
const layout = {
  Header: {
    height: '56px',
    fontSize: '1.5rem',
    LR: {
      ...useStateObject('hide')
    },
    Center: {
      maxWidth: '656px',
      BackButton: {
        ...useStateObject('hide')
      },
      SASearchButton: {
        ...useStateObject('hide')
      },
      SearchForm: {
        ...useStateObject('focused'),
        ...useStateObject('hide')
      }
    }
  },
  LSide: {
    Drawer: {
      width: '240px',
      ...useStateObject('hideDrawer'),
      ...useStateObject('locked'),
      ...useStateObject('hideModal')
    },
    MiniDrawer: {
      width: '72px',
      ...useStateObject('hide')
    }
  },
  RSide: {
    marginTop: '56px',
    ...useStateObject('marginLeft')
  }
}

// Note the reducer returns nothing because it calls setState
function reducer (layout, action) {
  switch (action) {
    case 'SASearchButton/clicked': {
      layout.Header.LR.setHide(true)
      layout.Header.Center.SearchForm.setHide(false)
      layout.Header.Center.SearchForm.setFocused(true)
      layout.Header.Center.BackButton.setHide(false)
      break
    }
    case 'BackButton/clicked': {
      layout.Header.LR.setHide(false)
      layout.Header.Center.BackButton.setHide(true)
      layout.Header.Center.SearchForm.setHide(true)
      break
    }
    case '@media(min-width: 657px)': {
      // need do some check for performance
      layout.Header.LR.setHide(false)
      layout.Header.Center.SASearchButton.setHide(true)
      break
    }
    case '@media(max-width: 656px)': {
      if (layout.Header.Center.SearchForm.isFocused) {
        layout.Header.LR.setHide(true)
        layout.Header.Center.BackButton.setHide(false)
      } else {
        layout.Header.Center.SearchForm.setHide(true)
      }
      break
    }
    case '@media(min-width: 808px)': {
      layout.LSide.MiniDrawer.setHide(false)
      break
    }
    case '@media(max-width: 807px)': {
      layout.LSide.MiniDrawer.setHide(
        !layout.LSide.Drawer.hide
      )
      break
    }
    case '@media(min-width: 1329px)': {
      layout.LSide.Drawer.setHide(false)
      layout.LSide.MiniDrawer.setHide(true)
      break
    }
  }
}
