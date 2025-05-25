import Footer from "./footer";
import Navigation from "./sec-nav";

interface LayoutProps {
    children: React.ReactElement,
    noSpaceOnTop?: boolean
}

const PillarsLayout = (props: LayoutProps) => {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer noSpaceOnTop={props.noSpaceOnTop} />
        </div>
    )
}

export default PillarsLayout;