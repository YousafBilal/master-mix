import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gigs from './pages/Gigs'
import Mixes from './pages/Mixes'
import Contacts from './pages/Contacts'
import Videos from './pages/Videos'
import Photos from './pages/Photos'
export default class App extends React.Component {
  render() {
    return (
      <div>
     
        
       <Home/>
       <About/>
       <Gigs/>
        <Mixes/>
        <Videos/>
       <Photos/>
        <Contacts/>

      
      </div>
    )
  }
}
