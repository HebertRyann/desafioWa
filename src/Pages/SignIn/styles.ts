import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid purple;
    width: 60px;
    width: 300px;
  }
  div.ContainerReport {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 70%;
    color: #000;
    
    div.ContainerOverflow {
      overflow: auto;
      height: 80%;
    }
    div.ContainerResults {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 120px;
      width: 400px;
      border-radius: 3px;
      margin: 15px auto 0 auto;
      padding: 10px 20px;
      div.ContentResults {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        p {
          font-size: 22px;
        }
      }
      button {
        height: 60px;
        border-radius: 5px;
        width: 50%;
        margin: 0 auto;
        border: 0;
      }
    }
    div.WrapperContentReport {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      padding: 15px 5px;
      height: 200px;
      color: #fff;
      h1 {
        margin-bottom: 25px;
      }
      div.ContainerButtonReport {
        display: flex;
        justify-content: center;
        div.ContainerChoice {
          display: flex;
          flex-direction: column;
          button {
            height: 60px;
            width: 200px;
            margin-right: 100px;
            border-radius: 5px;
            border: 0;
          }
          strong {
            margin-bottom: 10px;
          }
        }
      }
      & + div {
        margin-top: 20px;
      }
    }
  }

  div.ContainerNotifyReport {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    width: 300px;
    height: 70px;
    color: #000;
    text-align: center;
    justify-content: center;
    position: absolute;
    right: 100px;
    top: 50px;
  }

  div.ContainerMain {
    display: flex;
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 2rem;
    }
    button {
      height: 60px;
      width: 200px;
      background: #fff;
      border: 0;
      border-radius: 5px;
      margin: 0 auto;
      font-size: 18px;
    }
    select {
      background: transparent;
      height: 70px;
      font-size: 18px;
      border: 2px solid #fff;
      padding: 0 20px;
      color: #fff;
      option {
        color: #000;
        background: transparent;
      }
    }
  }
`;