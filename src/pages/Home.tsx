import {HomeContent} from "@Components";
import styled from "styled-components";
import {HomeContentFilter} from "../components/HomeContentFilter";
import {HomeContentFilterContextProvider} from "../context/HomeContentFilterContext";
export function Home(): JSX.Element {
  return (
    <>
      <HomeContentFilterContextProvider>
        <HomeContentFilter />
        <HomeContent/>
      </HomeContentFilterContextProvider>
    </>

  )
}