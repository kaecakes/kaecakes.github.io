const InfoBox = ({ text }: { text: string }) => {
    return (
        <div className="absolute top-24 left-0 right-0 z-10 flex items-center justify-center text-white">
            <h1>{ text }</h1>
        </div>
    );
}

const renderContent: { [key: string]: JSX.Element } = {
    'planetOne': (
        <InfoBox text="About me" />
    ),
    'planetTwo': (
        <InfoBox text="Contact" />
    ),
    'planetThree': (
        <InfoBox text="Projects" />
    ),
    'planetFour': (
        <InfoBox text="About me" />
    ),
}

const Popup = ({ hoveringObject }: { hoveringObject: string }) => {
  return renderContent[hoveringObject] || null;
}

export default Popup
