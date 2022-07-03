import styled from 'styled-components'

export const Container = styled.div`
  width: min(1170px, 90%);
  padding: 35px 30px;
  color: var(--white);
  background: var(--purple-light);
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  position: relative;

  .answer {
    opacity: 0.75;
    transition: all 0.3s ease;
    margin-top: 20px;
    width: 95%;
  }

  .question {
    max-width: 78%;
  }

  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--green);
    position: absolute;
    top: 21px;
    right: 20px;
    transition: all 0.3s ease;
    transform: rotate(${(props) => (props.isOpen ? '135deg' : '0deg')});
  }
`
