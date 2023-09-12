/* eslint-disable @typescript-eslint/no-explicit-any */
import DPForm from "./DPForm";
// import FormComponent from "./FormComponent";
import "./styles.scss";

const ContextMenu = ({
  id,
  top,
  left,
  right,
  bottom,
  setMenu,
  ...props
}: any) => {
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div
      style={{
        top,
        left,
        right,
        bottom,
      }}
      className="contextMenu"
      {...props}
    >
      {/* <FormComponent onClose={closeMenu} id={id} /> */}
      <DPForm id={id} onClose={closeMenu} />
      {/* <button onClick={duplicateNode}>duplicate</button>
      <button onClick={deleteNode}>delete</button> */}
    </div>
  );
};

export default ContextMenu;
