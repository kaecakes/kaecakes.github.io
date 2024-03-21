const InfoBox = ({ text }: { text: string }) => {
    return (
        <div className="absolute bottom-12 left-0 right-0 z-10 flex items-center justify-center text-xl uppercase text-white">
            <h1>{ text }</h1>
        </div>
    );
}

const renderContent: { [key: string]: JSX.Element } = {
    'about': (
        <InfoBox text="About me" />
    ),
    'contact': (
        <InfoBox text="Contact" />
    ),
    'projects': (
        <InfoBox text="Projects" />
    ),
    'attribution': (
        <InfoBox text="Artwork Attribution" />
    ),
}

const Popup = ({ hoveringNav }: { hoveringNav: string }) => {
  return renderContent[hoveringNav] || null;
}

export default Popup
