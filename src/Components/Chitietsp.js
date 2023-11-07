import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Chitietsp extends Component {
  constructor(props) {
    super(props);
    
  }
  chuyenDoiURL =(str) =>{
 
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;

  }
  
 
    render() {
        return (
         <div className="col-4">
         
        
            <div className="col mb-5 mr-2">
              
              <div className="card h-100">
                {/* Product image*/}
                <Link to={"/chi-tiet/"+ this.chuyenDoiURL(this.props.tieuDe)+"."+this.props.tinId+".html"} >
                <img
                  className="card-img-top"
                  src={this.props.anh}
                  alt=""
                />
                </Link>
                
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{this.props.tieuDe}</h5>
                    {/* Product price*/}
                    {this.props.price}
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
              <button
              className="btn btn-outline-dark flex-shrink-0"
              type="button"
            >
              <i className="bi-cart-fill me-1" />
              Add to cart
            </button>
              </div>
                </div>
              </div>
            </div>
         </div>
        );
    }
}

export default Chitietsp;