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

# Chaining

So I want describe some side effect of an action. This could be done with events. This looks fine ...

**Those shits are easily to cause infinite loops if not used with caution.**

```javascript
// say we are writing this using ai/nanoevents
// EventManager.js
import { createNanoEvents } from 'nanoevents'
export const EventManager = createNanoEvent()

// sideEffectsBind.js
function sideEffectsBind(f, ...effects) {
    const handler = () => {
        effects.forEach(effect => effect())
    }
    const unbind = eventMgr.on(f, handler) 
    return [
    	() => {
        	f()
        	eventMgr.emit(f)
    	},
        unbind
    ]
}
```

Or ... 

```javascript
// not a react custom hook

function addSideEffects(f, ...effects) {
    if (f.sideEffects !== undefined) {
        f.sideEffects.add(...effects)
    } else {
        f.sideEffects = new Set(effects)
    }
}

function removeSideEffects(f, ...effects) {
    if (f.sideEffects !== undefined) {
        effects.forEach(effect => f.sideEffects.delete(effect))
    }
}

function clearSideEffect(f) {
    f.sideEffects = undefined
}

function callWithSideEffects(f) {
    f()
    f.sideEffects?.forEach(effect => effect())
}
```

Both of them are used to describe one statement

> When something happens, some other things should happen, and always should happen.

Say, 

> When the Drawer hides, decide whether to show the MiniDrawer.
>
> ```javascript
> function hideDrawer()
> function showMiniDrawer()
> 
> addSideEffects(hideDrawer, showMiniDrawer)
> 
> callWithSideEffects(hideDrawer)
> ```
>
> 

> When both of the Drawer's hide state changes, recalculate the margin-left of the RSide.
>
> ```javascript
> function recalculateRSideMarginLeft()
> addSideEffects(hideDrawer, recalculateRSideMarginLeft)
> addSideEffects(showMiniDrawer, recalculateRSideMarginLeft)
> ```

Well, this looks good to me.

# Chains

| Heads                                            | Node2             | Node3                            |
| ------------------------------------------------ | ----------------- | -------------------------------- |
| @media(max-width: 656px)                         | SearchForm SH     | Recalculate Content's MarginLeft |
| @media(min-width: 807px) and (max-width: 1328px) | SASearchButton SH | MiniDrawer SH                    |
| @media(min-width: 1329px)                        | BackButton SH     |                                  |
| Clicked DrawerTogger                             | HeaderLR SH       |                                  |
| Clicked ModalLayer                               | Drawer SH         |                                  |
| Clicked SASearchButton                           | MiniDrawer SH     |                                  |
| Clicked BackButton                               |                   |                                  |
| Clicked inside SearchInput                       |                   |                                  |
| Clicked Outside HeaderCenter                     |                   |                                  |

Binary Effect



Hide SearchButton -> Show SearchForm 

Show SearchButton -> Hide SearchForm

Show BackButton -> Hide LR

Hide BackButton -> Show LR

Hide MiniDrawer -> Recalculate Content's MarginLeft

Show MiniDrawer -> Recaucluate Content's MarginLeft

Show Drawer -> Hide MiniDrawer

Clicked inside SearchInput -> Focus SearchInput





Clicked SerachButton -> Hide SearchButton, Show BackButton

Clicked BackButton -> Hide BackButton, Show SearchButton

@media (max-width: 656px) and (min-width: 655px) -> 

​	SearchInput Focused -> @Clicked SearchButton

​	SearchInput UnFocused -> @Clicked BackButton

@media (min-width: 657px) and (max-width: 658px) ->

​	Hide BackButton, Hide SearchButton

@media(min-width: 807px) ->

​	Hide MiniDrawer

@media (min-width: 808px) and (max-width: 809px) ->

​	Drawer Hiding -> Show MiniDrawer

@media (min-width: 1329px) and (max-width: 1330px) ->

​	Drawer Showing -> Hide Modal, Recalculate MarginLeft

​	Drawer Hiding -> Show Drawer
