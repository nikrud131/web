import handleHiddenElement from "../handleHiddenElement";

const menu = document.getElementById('menu');
const content = document.getElementById('content');

const handleMenu = () => {
    handleHiddenElement(menu);
    handleHiddenElement(content);
}

export default handleMenu;