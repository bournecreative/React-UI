import React from "react";
import "../../css/global.css"
import "../../css/hero.css"

export default class HeroBanner extends React.Component {

    constructor(props){
        super(props)
        this.setHeight = this.setHeight.bind(this)
        this.setRetina = this.setRetina.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.state = {winWidth: window.innerWidth}
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleResize)
    }

    handleResize(){
        const newWinWidth = window.innerWidth;
        this.setState({winWidth: newWinWidth})
    }

    render(){
        return (
          <div className="hero bg-cover bg-center" style={this.setHeight()}></div>
        )
    }

    setHeight() {
        const stylesConfig = this.state.winWidth > 767 ? {height: this.props.bgImg.desk.height, background: `url(${this.setRetina(this.props.bgImg.desk.img)})`} : {height: this.props.bgImg.mobile.height, background: `url(${this.setRetina(this.props.bgImg.mobile.img)})`}
        return stylesConfig
    }

    setRetina(img){
        const pixelRatio = window.devicePixelRatio;
        img = img.replace("scl=1", "").replace("scl=2","") + "scl=" + (2 / pixelRatio)
        console.log(img)
        return img;
    }
}

