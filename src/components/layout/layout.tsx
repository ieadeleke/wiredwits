import Footer from "./footer";
import Navigation from "./nav";

interface LayoutProps {
    children: React.ReactElement,
    noSpaceOnTop?: boolean
}

const DisplayLayout = (props: LayoutProps) => {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer noSpaceOnTop={props.noSpaceOnTop} />
        </div>
    )
}

export default DisplayLayout;