import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5%;
  width: 100vw;

  .footer {
    margin-top: -6px;
    width: 100%;
    background: var(--black-void);
    display: flex;
    flex-direction: column;
    align-items: center;

    .creditsTermsAndCondition {
      padding: 30px 0;
      border-top: 2px solid var(--gray);
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      color: #fff;

      p {
        font-size: 18px;
        font-weight: 500 medium;
        color: white;
      }

      a {
        text-decoration: none;
      }

      .supportContainer {
        display: flex;

        > * {
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
      }
    }

    .buttonContainer {
      display: flex;
      margin-top: 5%;
      margin-bottom: 5%;

      .link {
        text-decoration: none;
      }

      .icon-wrapper {
        margin-right: 10px;
      }

      .twitter-btn {
        display: flex;
        align-items: center;
        color: white;
        cursor: pointer;
        padding: 0 20px 0 20px;
        height: 60px;
        background: #1da1f2;
        border-radius: 12px;
        font-weight: bold;
        margin-left: 44px;

        svg {
          margin-right: 10px;
        }
      }

      > * {
        &:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          width: 9vw;
          min-width: 150px;
          height: 60px;
          border-radius: 12px;
          margin-right: 10%;
          font-size: max(1.5vw, 12px);
          line-height: 100%;
          font-weight: 600;
          padding: 5px 0 5px 0;
          color: black;

          &:hover {
            background-color: #f3f6f4;
          }
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .creditsTermsAndCondition {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .supportContainer {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`

export { Container }
