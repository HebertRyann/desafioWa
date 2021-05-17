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
  > div.ContainerIntial {
    display: flex;
    button {
      width: 150px;
      height: 60px;
      background: #fff;
      border: 0;
      border-radius: 5px;
      margin-right: 50px;
    }
  }
  > div.ContainerQuestion {
    display: flex;
    flex-direction: column;
    > div.ContainerButtonQuestion {
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        width: 250px;
        height: 80px;
        background: #fff;
        color: #000;
        border: 0;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 18px;
        padding: 0 5px;
        & + button {
          margin-left: 70px;
        }
      }
    }
  }
  div.ContainerReport {
    display: flex;
    flex-direction: column;
    height: 70vh;
    text-align: center;
    div.ContainerChoice {
      display: flex;
      flex-direction: column;
      text-align: center;
      & + div.ContainerChoice {
            margin-left: 50px;
          }
          strong {
            margin-bottom: 05px;
            font-size: 18px;
          }
      button {
          height: 60px;
          width: 170px;
          border: 0;
          background: #fff;
          border-radius: 5px;
          
        }
      
    }
    div.ContainerOverflow {
      overflow: auto;
    }
    div.WrapperContentReport {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 150px;
      & + div.WrapperContentReport {
        margin-top: 50px;
      }
      h1 {
        margin-bottom: 30px;
      }


      div.ContainerButton {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        
      }
    }
  }
  div.ContainerResults {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 150px;
    background: #fff;
    border-radius: 5px;
    margin: 20px auto;
    padding: 5px;
    button {
        width: 40%;
        height: 60px;
        margin: 0px auto;
        border-radius: 5px;
        background: #fff;
    }
    div.WrapperContent {
      display: flex;
      justify-content: space-between;
      p {
        color: #000;
        font-size: 20px;
      }
    }
  }
`;