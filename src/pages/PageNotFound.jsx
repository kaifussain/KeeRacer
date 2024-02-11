import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom';
import BackStage from '../components/backStage';

function PageNotFound() {
  return (
      <BackStage 
      box={
        <div id="pageNF_Box" className='popY'>
        <div id="pageNF">
            <div style={{fontSize:'40px'}}>404</div>
            Page not found!
            </div>
        <Link style={{textDecoration:'none',color:'inherit'}}>
        <div id="goHomeBtn">Go to Home Page</div>
        </Link>
    </div>
      }/>
    
  )
}

export default PageNotFound;