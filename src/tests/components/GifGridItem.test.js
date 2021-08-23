import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba en <GifGridItem/>', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifGridItem /> );
        expect( wrapper ).toMatchSnapshot();
    })
})
