import Menu from "../Menu";
import MenuItem from "../MenuItem";

const Header = () => {
  return (
    <Menu>
      <MenuItem toLink="/">Home</MenuItem>
      <MenuItem toLink="/about">About</MenuItem>
      <MenuItem toLink="/contact" btnContact={true}>Contact</MenuItem>
    </Menu>
  )
}

export default Header;