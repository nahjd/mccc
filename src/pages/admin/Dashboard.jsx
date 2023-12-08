import React from 'react';
import {
  AppBreadcrumb,
  AppContent,
  AppFooter,
  AppHeader,
  AppHeaderDropdown,
  AppSidebar,
  DocsCallout,
  DocsLink,
  DocsExample,
} from './../../components/index'; 
import { AppBar } from '@mui/material';
function Dashboard() {
  return (
  <>
    <AppBreadcrumb/>
    <AppContent/>
    <AppFooter/>
    <AppHeader/>
    <AppHeaderDropdown/>
    <AppSidebar/>
    <AppBar position="static">
      {
        
        
         
            <div className="container">
              <header className="header-mc">
                <nav className="nav-mc">
                  <div className="global-div-mc">
                  <Link to="/"> <img className="image-mc" src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg" alt="" /></Link>
        
            
        
        
                  <div className="wholeheader">
                  <div className="top-headers">
                  <div className="language">
                        <Button>Dil</Button>
                        
                      </div>
                      <div className="email-div">
                        <Button><Link to="/admin">Dashboard</Link> </Button>
                      </div>
                      <div className="email-div">
                      <Button><Link to="/admin/mealspageforadmin">Meals</Link> </Button>
                      </div>
                      <div className="karier-div">
                      <Button><Link to="/admin/addmeals">Add New Meals</Link></Button>
                       
                      </div>
                    </div>
                    <div className="end-header">
                          <Button>
                           <Link to="/login">Login</Link>
                          </Button>
                          <Button>
                           <Link to="/register">Register</Link>
                          </Button>
                          <Button>
                           <Link to="/wishlist">Wishlist</Link>
                          </Button>
                          <Button>
                           <Link to="/cart">Cart</Link>
                          </Button>
                        </div>
                  </div>
        
        
        
        
        
                  
                 
                  </div>
               
        
                </nav>
              </header>
            </div>
          
       
        
      }
    </AppBar>
    <DocsCallout/>
    <DocsExample/>
    <DocsLink/>
    
    </>
  )
}

export default Dashboard