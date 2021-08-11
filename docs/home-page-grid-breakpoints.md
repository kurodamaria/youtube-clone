Note: I don't think this is a good design, I like the nature behavior of grid more. I did this only to make a YouTube website clone.



| Breakpoint (px) | Content Width (px) | Grid Container Width (px) | Items per row |
| --------------- | ------------------ | ------------------------- | ------------- |
| [0, 512)        | 690                | 336                       | 1             |
| [512, 888)      | 779                | 672                       | 2             |
| [888, 1144)     | -                  | -                         | 3             |
| [1144, 1800)    | -                  | -                         | 4             |
| [1800, 2136)    | -                  | -                         | 5             |
| [2136, +∞)      | -                  | 2256 max                  | 6             |

I don't get it. How the fucking the Grid Container changes its width?

```css
/* max-width: 600px */
calc(100% + var(--ytd-rich-grid-item-margin))
/* other situations */
calc(100% - var(--ytd-rich-grid-item-margin) * 2)

/* 100% refers to the Content Width, YouTube calls it "Page Manager", I call it Page Content */

/* and here is the formula to calculate the width of each column */
calc( 100% / var(--ytd-rich-grid-items-per-row) - var(--ytd-rich-grid-item-margin) - 0.01px );
```

So I am saying that I will calculate in this way

```css
max-width: 2256px;
margin: 0 auto;
display: grid;
gap: 1em 1em;
--items-per-row: 1;
@media(min-width: 512px) {
    --items-per-row: 2;
}
@media(min-width: 888px) {
    --items-per-row: 3;
}
@media(min-width: 1144px) {
    --items-per-row: 4;
}
@media(min-width: 1800px) {
    --items-per-row: 5;
}
@media(min-width: 2136px) {
    --items-per-row: 6;
}
width: 100%;
grid-template-columns: repeat(var(--items-per-row), calc(100% / var(--items-per-row)));
```

