import React, { Component } from 'react';
import Header from './Header';
// import Shop from './Shop';
import Chitietsp from './Chitietsp';
import dl from './dulieu.json';
class Chitiet extends Component {
    render() { 
     
      
        return (   
            <div>
                <>
                <Header/>
  {/* Header*/}
  <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bolder">Shop in style</h1>
        <p className="lead fw-normal text-white-50 mb-0">
          With this shop hompeage template
        </p>
      </div>
    </div>
  </header>
  {/* Section*/}
  <section className="py-5">
    <div className="container px-3 px-lg-2 mt-5">
      <div className="row  justify-content-center">
        
        
          {
              dl.map((value,key) =>{
                return(
                  <Chitietsp key={key} tinId={value.id} anh={value.anh}tieuDe={value.tieude}price={value.price}></Chitietsp>
                )
                  
                
              })
          }
       
        
        
      </div>
    </div>
  </section>
</>

            </div>
        );
    }
}

export default Chitiet;