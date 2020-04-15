import React, { Component } from 'react'
import { register } from './UserFunctions'
import './register.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      school_parent: '',
      name: '',
      established_year: '',
      no_of_stud: '',
      brand:'',
      email:'',
      principal_name:'',
      level_serviced:'',
      address:'',
      state:'',
      district:'',
      city:'',
      postcode:'',
      contact:'',
      contactno:'',
      contacttype:'',
      classno:'',
      boardtype:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      school_parent: this.state.school_parent,
      name: this.state.name,
      established_year: this.state.established_year,
      no_of_stud: this.state.no_of_stud,
      brand:this.state.brand,
      email:this.state.email,
      principal_name:this.principal_name,
      level_serviced:this.level_serviced,
      address:this.state.address,
      state:this.state.state,
      district:this.state.district,
      city:this.state.city,
      postcode:this.state.postcode,
      contact:this.state.contact,
      contactno:this.state.contactno,
      contacttype:this.state.contacttype,
      classno:this.state.classno,
      boardtype:this.state.boardtype
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">

                  <div class="topnav">
                    <a class="active" href="#home">Create Master</a>
                    <a href="#news">Configure Subject</a>
                    <a href="#contact">Data Entry</a>
                    <a href="#about">Access Management</a>
                  </div>


        <div className="row">
          <div>

         

              <h1 className="header" style={{textAlign:"center",margin:"50px",fontWeight:"bold",marginLeft:"100px"}}>School Registration Form</h1>

              <hr style={{marginLeft:"100px"}}></hr>

              <div className='contbig1' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>

           <div className='cont1' style={{marginLeft:"100px",textAlign:"center"}}>

              <div className="form-group">
                <label htmlFor="name">School Parent Entity</label>
                <input
                  type="text"
                  className="form-control"
                  name="school_parent"
                  placeholder="School Parent Entity"
                  value={this.state.school_parent}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                 
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="School Name"
                  value={this.state.name}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="established_year">Established Year</label>
                <input
                  type="text"
                  className="form-control"
                  name="established_year"
                  placeholder="School Established Year"
                  value={this.state.established_year}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="number_of_students">Approximate Number Of Students</label>
                <input
                  type="text"
                  className="form-control"
                  name="no_of_stud"
                  placeholder="School Approx Students"
                  value={this.state.no_of_stud}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>

           </div>




          <div className='cont2' style={{textAlign:"center",marginLeft:"100px"}}>


              <div className="form-group">
                <label htmlFor="level_serviced">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  placeholder="School Brand"
                  value={this.state.brand}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>
             
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                   
                />
              </div>

              <div className="form-group">
                <label htmlFor="principal_name">Principal Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="principal_name"
                  placeholder="Principal Name"
                  value={this.state.principal_name}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="level_serviced">Level Serviced</label>
                <input
                  type="text"
                  className="form-control"
                  name="level_serviced"
                  placeholder="School Type"
                  value={this.state.level_serviced}
                  onChange={this.onChange}
                  style={{width:"400px",backgroundColor:"azure"}}
                />
              </div>
              
          </div>

          </div>



<hr style={{marginLeft:"100px"}}></hr>
<hr style={{marginLeft:"100px"}}></hr>



          <div className='contbig2' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>

          <div className='cont3' style={{marginLeft:"100px",textAlign:"center"}}>
             
             <div className="form-group">
               <label htmlFor="address">Address</label>
               <input
                 type="text"
                 className="form-control"
                 name="address"
                 placeholder="Address"
                 value={this.state.address}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
                 
               />
             </div>

             <div className="form-group">
               <label htmlFor="state">State</label>
               <select
                 type="text"
                 className="form-control"
                 name="state"
                 placeholder="Select State"
                 value={this.state.state}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}>

                  <option >Rajasthan</option>
                  <option >UP</option>
                  <option >Maharashtra</option>
                  <option >Punjab</option>
                  <option >Tamil Nadu</option>
                  <option >Haryana</option>
                  <option >Assam</option>
                  <option >Kerala</option>
                  <option >Karnataka</option>
                  <option >Others</option>
                </select>
             </div>

             <div className="form-group">
               <label htmlFor="district">District</label>
               <input
                 type="text"
                 className="form-control"
                 name="district"
                 placeholder="Select District"
                 value={this.state.district}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
               />
             </div>

             
             <div className="form-group">
               <label htmlFor="city">City</label>
               <input
                 type="text"
                 className="form-control"
                 name="city"
                 placeholder="Select City"
                 value={this.state.city}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
               />
             </div>

             <div className="form-group">
               <label htmlFor="postcode">Post Code</label>
               <input
                 type="text"
                 className="form-control"
                 name="postcode"
                 placeholder="Select PostCode"
                 value={this.state.postcode}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
               />
             </div>
             
         </div>

         <div className='cont4' style={{marginLeft:"100px",textAlign:"center"}}>
             
             <div className="form-group">
               <label htmlFor="contact">Contact Person</label>
               <input
                 type="text"
                 className="form-control"
                 name="contact"
                 placeholder="Contact Person Name"
                 value={this.state.contact}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
                
               />
             </div>

             <div className="form-group">
               <label htmlFor="contactno">Contact Number</label>
               <input
                 type="text"
                 className="form-control"
                 name="contactno"
                 placeholder="Contact Number"
                 value={this.state.contactno}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
               />
             </div>

             <div className="form-group">
               <label htmlFor="contacttype">Contact Type</label>
               <select
                 type="text"
                 className="form-control"
                 name="contacttype"
                 placeholder="Contact Type"
                 value={this.state.contacttype}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}>

                 <option >Personal</option>
                 <option >LandLine</option>
                 <option >Office</option>
                 
                </select>              
             </div>

             <div className="form-group">
               <label htmlFor="classno">Number Of Class</label>
                <select 
                 type="text"
                 className="form-control"
                 name="classno"
                 placeholder="Select Classes"
                 value={this.state.classno}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}>

                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                  <option >4</option>
                </select>
              
             </div>

             <div className="form-group">
               <label htmlFor="boardtype">Board Type</label>
               <input
                 type="text"
                 className="form-control"
                 name="boardtype"
                 placeholder="School Board Type"
                 value={this.state.boardtype}
                 onChange={this.onChange}
                 style={{width:"400px",backgroundColor:"azure"}}
               />
             </div>
             
         </div>

      </div>

              <form noValidate onSubmit={this.onSubmit}>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                style={{width:"20%",marginLeft:"100px",marginBottom:"50px"}}
              >
                Submit !
              </button>
            </form>
           
          </div>
        </div>
      </div>
    )
  }
}

export default Register
