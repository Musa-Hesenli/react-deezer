import React from "react";
import SearchBar from "./content/Header/SearchBar";
import UserInfo from "./content/Header/UserInfo";
import Slider from "./content/info/Slider";

class Content extends React.Component {
  render() {
    return (
      <div className="dynamic-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 content-header">
              <SearchBar />
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <UserInfo />
            </div>
          </div>
          <div className='row my-4'>
              <div className='col-md-8'>
                <Slider/>
              </div>
              <div className='col-md-4'>
                  Are you kola
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
