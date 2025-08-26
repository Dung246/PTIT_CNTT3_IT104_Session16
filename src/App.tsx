import React, { Component } from 'react'
import SubjectList from './components/PTIT_CNTT_IT104_SESSION16_Ex01/SubjectList'
import LoginStatus from './components/PTIT_CNTT_IT104_SESSION16_Ex02/LoginStatus'
import Buttons from './components/PTIT_CNTT_IT104_SESSION16_Ex03/Buttons'
import ClickCounter from './components/PTIT_CNTT_IT104_SESSION16_Ex04/ClickCounter'
import UserForm from './components/PTIT_CNTT_IT104_SESSION16_Ex05/UserForm'
import ThemeSwitcher from './components/PTIT_CNTT_IT104_SESSION16_Ex06/ThemeSwitcher'
import Shop from './components/PTIT_CNTT_IT104_SESSION16_Ex07/Shop'
import { ProductItem } from './components/PTIT_CNTT_IT104_SESSION16_Ex07/Product'
import ProductList from './components/PTIT_CNTT_IT104_SESSION16_Ex08/ProductList'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SubjectList></SubjectList> */}
        {/* <LoginStatus></LoginStatus> */}
        {/* <Buttons></Buttons> */}
        {/* <ClickCounter></ClickCounter> */}
        {/* <UserForm></UserForm> */}
        {/* <ThemeSwitcher></ThemeSwitcher> */}
        {/* <Shop></Shop> */}
        <ProductList></ProductList>
      </div>
    )
  }
}
