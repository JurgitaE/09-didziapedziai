function ShowName({animalName}) {
    switch(animalName) {
        case 'Racoon': return (
            <i>R-A-C-OO-N</i>
        );
        case 'Fox':  return (
            <u>FoX</u>
        );
        default: return (
            <b>what?</b>
        )
    }
}

export default ShowName;