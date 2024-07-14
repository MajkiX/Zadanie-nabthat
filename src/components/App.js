import React, { Component } from 'react';
import Header from "./Header";
import Main from './Main'
import Footer from './Footer';
import '../App.scss';
import data from "../data";
import anime from 'animejs'
class App extends Component{
  state = {
    radioOption: "",
    textArray: [],
    nameInfo: false,
    menuVisibility: false
  }

  //Stworzenie kopi tablicy z obiektami 
  dataArray = data

  handleShowMenu = () => {
  
    if(this.state.menuVisibility === false){
      anime({
      targets: '.menu',
      translateY: "-15vh",
      opacity: "100%",
      easing: 'easeInSine'
    })
    }
    if(this.state.menuVisibility === true){
      anime({
        targets: '.menu',
        translateY: "0",
        opacity: "0",
        easing: 'easeInSine'
    })
    }
    this.setState({
      menuVisibility: !this.state.menuVisibility
    })  
  }

  handleShowName = () => {
    this.setState({
      nameInfo: true
    })
  }

  handleRestart = () => {
    this.setState({
      textArray: [],
      nameInfo: false
    })
  }

  handleTextAdd = () =>{
    if(this.state.radioOption==="0"){
      if(this.state.textArray.includes(this.dataArray[0])){
        alert("zawartość została już wykorzystana")
      }else{
        const textArray = [...this.state.textArray, this.dataArray[0]]
        this.setState({
          textArray
        })
      }
    }
    if(this.state.radioOption==="1"){
      if(this.state.textArray.includes(this.dataArray[1])){
        alert("zawartość została już wykorzystana")
      }else{
        const textArray = [...this.state.textArray, this.dataArray[1]]
        this.setState({
          textArray
        })
      }
    }
    if(this.state.radioOption==="2"){
      //Sprawdzenie nieużytych indexów
      let notUsedIndexs = []
      this.dataArray.forEach((element, index) => {
        if(this.state.textArray.includes(element)){
          return element
        }else{
          notUsedIndexs = [...notUsedIndexs, index]
        }
      })
        if(notUsedIndexs.length> 0){
          let randomInt = Math.floor(Math.random() * notUsedIndexs.length)
          const textArray = [...this.state.textArray, this.dataArray[notUsedIndexs[randomInt]]]
          this.setState({
          textArray
        })
      }else{
        alert("wykorzystano całą zawartość")
      }
    }
  }
    
  

  handleTextReplace = () =>{
    if(this.state.textArray.length> 0){
      if(this.state.radioOption==="0"){
        if(this.state.textArray.includes(this.dataArray[0])){
          alert("zawartość została już wykorzystana")
        }else{
          let textArray = this.state.textArray
          textArray[textArray.length-1] = this.dataArray[0]
          this.setState({
            textArray
          })
        }
      }
      if(this.state.radioOption==="1"){
        if(this.state.textArray.includes(this.dataArray[1])){
          alert("zawartość została już wykorzystana")
        }else{
          let textArray = this.state.textArray
          textArray[textArray.length-1] = this.dataArray[1]
          this.setState({
            textArray
          })
        }
      }
      if(this.state.radioOption==="2"){
        //Sprawdzenie nieużytych indexów
        let notUsedIndexs = []
        this.dataArray.forEach((element, index) => {
          if(this.state.textArray.includes(element)){
            return element
          }else{
            notUsedIndexs = [...notUsedIndexs, index]
          }
        })
          if(notUsedIndexs.length> 0){
            let randomInt = Math.floor(Math.random() * notUsedIndexs.length)
            let textArray = this.state.textArray
            textArray[textArray.length-1] = this.dataArray[notUsedIndexs[randomInt]]
            this.setState({
            textArray
          })
        }else{
          alert("wykorzystano całą zawartość")
        }
      }
    }else{
      alert("nie ma czego zastąpić")
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div className="App">
      <Header
      name={this.state.nameInfo}
      />
      <Main 
      onChange={this.handleChange}
      textAdd={this.handleTextAdd}
      textReplace={this.handleTextReplace}
      clickRestart={this.handleRestart}
      clickShowName={this.handleShowName}
      textArray={this.state.textArray}
      />
      <Footer
      menuVisibility={this.state.menuVisibility}
      clickShowMenu={this.handleShowMenu}
      />
      </div>
    )
  }
}

export default App;
