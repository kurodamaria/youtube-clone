import styled from "styled-components";

export const VideoCardGridContainer = styled.div`
  max-width: 2256px;
  margin: 1rem auto 1em auto;
  padding: 0 1em;
  display: grid;
  --items-per-row: 1;
  @media (max-width: 511px) {
    width: 336px;
  }
  @media (min-width: 512px) {
    --items-per-row: 2;
  }
  @media (min-width: 888px) {
    --items-per-row: 3;
  }
  @media (min-width: 1144px) {
    --items-per-row: 4;
  }
  @media (min-width: 1800px) {
    --items-per-row: 5;
  }
  @media (min-width: 2136px) {
    --items-per-row: 6;
  }
  gap: 1em 1em;
  // relative to the parent container (ContentContainer)
  width: 100%;
  // relative to this container
  grid-template-columns: repeat(var(--items-per-row), calc((100% - var(--items-per-row) * 1em + 1em) / var(--items-per-row)));
`