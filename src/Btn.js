function Btn() {
    const clickHandler = () => console.log("ShabbaRanks!!!")
    return (
        <button onMouseOver={clickHandler}>
            Click Me
        </button>
    )
}

export default Btn;