const MobileNav = () => {
  return (
    <div class="fixed px-5" style={{ bottom: 0 }}>
      <ul class="flex ">
        <li href="#" active>
          Home
        </li>
        <li href="#">About</li>
        <li href="#">Services</li>
        <li href="#">Pricing</li>
        <li href="#">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNav;
