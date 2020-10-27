import React from "react";
import { Link } from "react-router-dom";


const User = () => {
    return (
        <div className="container">
            <div className="py-4">


                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-md-offset-4">
                            <div class="account-wall">

                                <form>
                                    <div class="form-group row">  <div class="col-xs-3 text-right"></div>
                                        <label for="uname" class="col-sm-2 col-form-label">Uname:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext" id="uname" value="dummyName"/>
                                         </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="pws" class="col-sm-2 col-form-label">Passwd:</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="psw" placeholder="Password"/>
                                          </div>
                                          </div>
                                         
                                             
                                         
    <Link className="btn btn-light" to="/users/ChangePassword">Change Password</Link>

                                        <button className="btn btn-light" type="submit"> Log Out</button>

                                    


                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default User;