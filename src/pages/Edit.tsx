import React, { useState } from "react";
import { IBaseUser, IUser } from "../components/interface";
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import {PrimaryButton, DialogType } from '@fluentui/react';
import { useForm } from "react-hook-form";
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import NavBar from '../components/navBar';
import "../styles/navBar.css";

const controlStyles = {
  root: {
    margin: "0 30px 20px 0",
    maxWidth: "300px",
  },
};


interface IFormInputs {
  name: string;
  designation: string;
  skills: string;
  city: string;
}

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Male' },
  { key: 'B', text: 'Female' },
];

const option: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

interface IProps {
  user: IBaseUser;
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { name: "",  designation: "", skills: "", city: "", id: 1 };

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const EditUserForm: React.FunctionComponent = props => {
  const [formValue, setFormValue] = useState(initUser);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
          // props.onAddUser(formValue);
          setFormValue(initUser);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>();

  const onSubmit = handleSubmit(({ name, designation }) => {
    console.log(name, designation);
  }); 
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <NavBar/>
      <div className="user-container">
      <h1>Edit Profile</h1>
      <form onSubmit={onSubmit}>
      <TextField label="Name" styles={controlStyles}/>
      <TextField label="Designation" styles={controlStyles}/>
      <ChoiceGroup options={options} label="Gender" required={true} />
      <Dropdown
        placeholder="Select an option"
        label="City"
        options={option}
        styles={dropdownStyles}
      />
      <TextField label="Skills" styles={controlStyles}/>
      <TextField label="City" styles={controlStyles}/>
      <PrimaryButton
        type="button"
        onClick={() => {
          console.log('edit button clicked');}}
      >
        Submit
      </PrimaryButton>
    </form>
    </div>
    </div>
  );
};
export default EditUserForm;
