import React, {useState} from 'react';
import styled from 'styled-components';
import { skyBlue } from 'styles/theme';

const StyledForm = styled.form`
display: flex;
flex-direction: row;
  
`;

const Button = styled.button`
    margin-left: 2em;
    background-color: ${skyBlue};
    flex-grow: 1;
    border-radius: 0.12em;
    border-color: white;
    border-width: 4px;
    color: white;
    border-style: solid;
    transition:  0.3s background-color ease-in-out;

    :hover {
        background-color: navy;
    }
}
  
`;

const Field = styled.div`
  flex-grow: 2;
  /* width: 100%; */
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;

  :hover {
    background-color:  #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  :focus {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }
  :active {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }

  input {
    width: 100%;
    height: 56px;
    position: relative;
    padding: 0px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
  }
`;



interface FormProps {

}

const Form: React.FC<FormProps> = ({  }) => {
    const [email, setEmail] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${email}`)
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
             <Field>
             <input type="text" 
             placeholder='Email address'
             value={email}
             onChange={e => setEmail(e.target.value)}
             />
             </Field>
             <Button type="submit">Submit</Button>
           </StyledForm>
    );
};

export default Form;


