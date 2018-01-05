import React, { Component } from 'react';
import classes from 'Profile.css';
class Profile extends Component{
    render(){
        return(
            <div>
               
<link href="./Profile.css"/>
<div class="container">
       <div class="card card-container">
           <form class="form-horizontal">
                <div class="form-group">
                   <label class="control-label col-sm-2" for="name">Name::</label>
                         <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" placeholder="Enter name"/>
                         </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Email:</label>
                        <div class="col-sm-10">
                               <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="phone">Phone.:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="phone" placeholder="Enter Phone number"/>
                        </div>
                </div>
                <div class="form-group">
                     <label class="control-label col-sm-2" for="email">Address:</label>
                        <div class="col-md-10">
                           <div class="form-row">
                                  <div class="form-group col-md-5">
                                   
                                   <input type="text" class="form-control" id="inputflat" placeholder="flat number"/>
                                </div>
                                <div class="space"></div>
                                         <div class="form-group col-xs-4" >
                                               
                                                  <select id="inputBlock" class="form-control">
                                                        <option selected >Block...</option>
                                                              <option>A</option>
                                                              <option>B</option>
                                                              <option>C</option>
                                                              <option>D</option>
                                                  </select>
                                       </div>

                                       <div class="form-group col-md-5">
                                   
                                   <input type="text" class="form-control" id="inputsociety" placeholder="Enter society"/>
                                </div>
                            </div>
                       
                </div>
                </div>
               
            </form>
           
       </div>
       </div>



                </div>
        );
    }
}export default Profile;