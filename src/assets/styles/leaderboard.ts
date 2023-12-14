import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0 auto
    color: #363942
    min-height: 100vh
    `
export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 10px;
    `

export const ListElement = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e1e1e1;
    `
export const ListItemElement = styled.li`
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.6);
    padding: 12px 15px;
    color: #363942;
    cursor: pointer;
    animation-fill-mode: forwards;
    &:hover {
        background: #4a69dd !important;
    color: #ffffff;
      }
      &:nth-child(even) {
        background: rgba(240, 243, 252, 0.6);
      }
      &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    `

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    `
export const ProfileImage = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 50%;
    background: #f0f3fc;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    `
export const ProfileHeader = styled.h3`
    color: #363942 !important;
    `
export const ProfileSpan = styled.span`
    display: block;
    position: absolute;
    bottom: 1px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    background: #3253ce;
    &.red {
        background: #D33538;
        color: #363942;
      }
      &.brown {
        background: #E26C40;
    color: #363942;
      }
      &.yellow {
        background: #E29531;
        color: #363942;
      }
    `

    export const ScoreBlock = styled.div`
    display: flex;
    align-items: center;
    `
    export const ScoreBlockSpan = styled.span`
    color: #b7b8bc;
    font-size: 0.75rem;
    @media (max-width: 560px) {
        display: none;
      }
      
    `
    export const ScoreBlockHeader = styled.h3`
    font-size: 1.2rem;
    margin: 0 10px;
    @media (max-width: 560px) {
        margin: 0;
      }
    `