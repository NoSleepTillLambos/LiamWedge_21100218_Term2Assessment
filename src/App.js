import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function App() {


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)


    axios.post('http://localhost:80/api/addUser', inputs)
    .then(function(response){
      console.log(response);
    });



  }


  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="name" type="text" placeholder="Name of Pet" onChange={handleChange} />
            <select>
              <option>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select>
              <option>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="age" type="number" placeholder="Age of Pet (years) " onChange={handleChange} />
            <input name="petId" type="number" placeholder="Pet MicroChip Id" onChange={handleChange} />
            <input name="ownerName" type="text" placeholder="Pet Owner Name" onChange={handleChange}  />
            <input name="ownerId" type="number" placeholder="Pet Owner ID Number" onChange={handleChange}  />
            <input name="origin" type="text" placeholder="Export Origin" onChange={handleChange}  />
            <input name="destination" type="text" placeholder="Export Destination" />

            <button onClick={handleSubmit} >Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
