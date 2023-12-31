import styled from "@emotion/styled"

export const ProfileWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px;
`

export const ProfileImg = styled.img`
    width: 100px;
    border: 1px solid black;
    border-radius: 50%;
`

export const Profilecontent = styled.div`
    display: inline-block;
    margin-left: 30px;
`

export const ProfileHedaer = styled.h2`
    font-size: 22px;
    margin-bottom: 10px;
`

export const Contect = styled.div`
    margin-top: 5px;
    display: inline-block;
`

export const Github = styled.div`
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
    display: inline-block;
`

export const Giturl = styled.span`
    margin-left: 6px;
    color: black;
    text-decoration: none;

    &:active {
        color: black;
    }
    &:hover {
        color: gray;
    }
`

export const IconEmail = styled.img`
    width: 14px;
    vertical-align: text-top;
    margin-right: 2px;
`

export const IconGit = styled.img`
    width: 14px;
    vertical-align: text-top;
    margin-right: 2px;
`