import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories= { setCategories }/> );

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find( 'input' );
        const value = 'Hola mundo';

        input.simulate( 'change', { target: { value } });
    })
});
