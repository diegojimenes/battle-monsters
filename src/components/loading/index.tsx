import * as St from './styles';

export const Loading = () => {
    return (
        <St.LoaderWrapper>
            <St.PixelText>Carregando</St.PixelText>
            <St.Dots>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </St.Dots>
        </St.LoaderWrapper>
    );
};