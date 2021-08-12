# How DC Works
## Methods

#### CSS Controls

```javascript
export const CSSDC = css`
  display: ${props => props.hide === undefined ? '' : props.hide ? 'none' : props.display} !important;
`

export const CSSVPC = css`
  visibility: ${props => props.hide === undefined ? '' : props.hide === true ? 'hidden' : 'visible'} !important;
  // remove from document flow
  position: ${props => props.hide === undefined ? props.position : props.hide === true ? 'fixed' : props.position} !important;
`
```

Enable a component to receive `hide` prop. Will override other rules without `!important`.

#### Media Query

```css
@media (...) {
    ...
}
```

#### Programmatic Media Query

Combine with other in program logic to provide more complex layout decisions.

```javascript
export function useMediaQuery (query, cb) {
  useEffect(() => {
    const mql = window.matchMedia(query)
    cb(mql)
    mql.addEventListener('change', cb)
    return () => {
      mql.removeEventListener('change', cb)
    }
  }, [query, cb])
}
```

## Reducer

Once some shit changes, re-calculate the layout based on the shit and the current *layout*.

```javascript
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
function reducer(layout, action) {
    switch (action) {
        case 'SASearchButton/clicked':
        	layout.Header.LR.setHide(true)
        	layout.Header.Center.SearchForm.setHide(false)
        	layout.Header.Center.SearchForm.setFocused(true)
    	break
    }
    if (action === 'SASearchButton/clicked') {
        layout.Header.LR.setHide(true)
        layout.Header.Center.SearchForm.setHide(false)
        layout.Header.Center.SearchForm.setFocused(true)
    }
}
```

