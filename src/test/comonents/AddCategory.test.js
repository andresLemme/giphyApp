import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../comonents/AddCategory";


describe('debe de mostrarse en <AddCategory/>', () => {
  
  const setCategories = () =>{};
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('debe de mostrarse correctamente', () => {
   expect(wrapper).toMatchSnapshot()
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo'
    input.simulate('change', { target:{value}})
  });
  
  
});