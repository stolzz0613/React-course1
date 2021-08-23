import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba en <GifGridItem/>', () => {

    const title = 'Un titulo';
    const url = 'https://www.google.com'
    const wrapper = shallow( <GifGridItem title= { title } url= { url }/> );

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe contener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual a la url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find( 'div' );
        const className = div.prop('className');
        
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })

})
