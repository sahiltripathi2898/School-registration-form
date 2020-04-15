import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      school_parent :  newUser.school_parent,
      name :  newUser.name,
      established_year :  newUser.established_year,
      no_of_stud :  newUser.no_of_stud,
      brand : newUser.brand,
      email : newUser.email,
      principal_name : newUser.principal_name,
      level_serviced : newUser.level_serviced,
      address : newUser.address,
      state : newUser.state,
      district : newUser.district,
      city : newUser.city,
      postcode : newUser.postcode,
      contact : newUser.contact,
      contactno : newUser.contactno,
      contacttype : newUser.contacttype,
      classno : newUser.classno,
      boardtype : newUser.boardtype,
    })
    .then(response => {
      console.log('Registered')
    })
}



